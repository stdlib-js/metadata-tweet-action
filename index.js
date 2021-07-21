/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

const core = require( '@actions/core' );
const Twitter = require( 'twitter' );
const contains = require( '@stdlib/assert-contains' );
const replace = require( '@stdlib/string-replace' );
const readJSON = require( '@stdlib/fs-read-json' ).sync;
const reFromString = require( '@stdlib/utils-regexp-from-string' );
const objectKeys = require( '@stdlib/utils-keys' );


// FUNCTIONS //

/**
* Replaces all `<placeholder>`s in the supplied string.
*
* @private
* @param {string} str - string to replace placeholders in
* @param {Object} elem - metadata object
* @returns {string} string with placeholders replaced
*/
function replacePlaceholders( str, elem ) {
	let out = str;
	const keys = objectKeys( elem );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out = replace( out, '<' + key + '>', elem[ key ] );
	}
	return out;
}


// MAIN //

/**
* Main function.
*/
async function main() {
	try {
		const metadata = JSON.parse( core.getInput( 'metadata' ) );
		const rulesPath = core.getInput( 'rules' );
		const rulesTable = readJSON( rulesPath );
		const types = core.getInput( 'types' ).split( ',' );
		core.info( `Generate tweets for metadata of the following types: ${types} (n = ${types.length}).` );
		const client = new Twitter({
			consumer_key: core.getInput( 'TWITTER_CONSUMER_KEY' ),
			consumer_secret: core.getInput( 'TWITTER_CONSUMER_SECRET' ),
			access_token_key: core.getInput( 'TWITTER_ACCESS_TOKEN' ),
			access_token_secret: core.getInput( 'TWITTER_ACCESS_TOKEN_SECRET' )
		})
		core.info( `Processing ${metadata.length} metadata entries...` );
		for ( let i = 0; i < metadata.length; i++ ) {
			const elem = metadata[ i ];
			if ( contains( types, elem.type ) ) {
				const description = elem.description;
				const rules = rulesTable[ elem.type ];
				const keys = objectKeys( rules );
				for ( let j = 0; j < keys.length; j++ ) {
					const key = keys[ j ];
					core.info( `Processing ${elem.type} metadata entry with description "${description}" and rule "${key}"...` );
					const re = reFromString( key );
					if ( re.test( description ) ) {
						let tweet = replace( description, re, rules[ key ] );
						tweet = replacePlaceholders( tweet, elem );
						core.info( `Tweeting: "${tweet}"` );
						const res = await client.post( '/statuses/update', { status: tweet } );
						core.info( res );
						break;
					}
				}
			}
		}
	} catch ( e ) {
		core.error( e );
		core.setFailed( e.message );
	}
}

main();