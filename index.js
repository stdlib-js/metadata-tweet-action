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
const rtrim = require( '@stdlib/string-right-trim' );


// MAIN //

/**
* Main function.
*/
async function main() {
	try {
		const metadata = JSON.parse( core.getInput( 'metadata' ) );
		const client = new Twitter({
			consumer_key: core.getInput( 'TWITTER_CONSUMER_KEY' ),
			consumer_secret: core.getInput( 'TWITTER_CONSUMER_SECRET' ),
			access_token_key: core.getInput( 'TWITTER_ACCESS_TOKEN' ),
			access_token_secret: core.getInput( 'TWITTER_ACCESS_TOKEN_SECRET' )
		})
		core.info( `Processing ${metadata.length} metadata entries...` );
		for ( let i = 0; i < metadata.length; i++ ) {
			const elem = metadata[ i ];
			if ( elem.type === 'tweet' ) {
				let status = elem.status;
				if ( elem.author && !contains( status, '@' ) ) {
					status = status + 'by ' + elem.author;
				}
				if ( !contains( status, '#javascript' ) ) {
					status = rtrim( status ) + ' #javascript';
				}
				if ( !contains( status, '#nodejs' ) ) {
					status = rtrim( status ) + ' #nodejs';
				}
				const res = await client.post( '/statuses/update', { status });
				core.info( res );
			}
		}
	} catch ( e ) {
		core.error( e );
		core.setFailed( e.message );
	}
}

main();