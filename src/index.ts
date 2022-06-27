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

import { getInput, error, info, setFailed } from '@actions/core';
import Twitter from 'twitter';
import isArray from '@stdlib/assert-is-array';
import contains from '@stdlib/assert-contains';
import replace from '@stdlib/string-replace';
import { sync as readJSON } from '@stdlib/fs-read-json';
import shuffle from '@stdlib/random-shuffle';
import reFromString from '@stdlib/utils-regexp-from-string';
import objectKeys from '@stdlib/utils-keys';
import trim from '@stdlib/string-trim';


// TYPES //

/**
* Object mapping GitHub user names to Twitter handles.
*/
type AuthorMap = { [username: string]: string };


// FUNCTIONS //

/**
* Returns the Twitter handle corresponding to a given GitHub user.
*
* @private
* @param {Object} user - GitHub user object
* @param {Object} authors - object mapping GitHub user names to Twitter handles
* @returns {string} Twitter handle or the name of the user as a fallback
*/
function twitterHandle( user, authors: AuthorMap ): string {
	const { username, name } = user;
	if ( username ) {
		info( 'Checking for whether username is present in the authors object: '+JSON.stringify( authors ) );
		if ( authors[ username ] ) {
			return `@${authors[ username ]}`;
		}
	}
	return name;
}

/**
* Replaces all `<placeholder>`s in the supplied string.
*
* @private
* @param {string} str - string to replace placeholders in
* @param {Object} elem - metadata object
* @param {Object} authors - object mapping GitHub user names to Twitter handles
* @returns {string} string with placeholders replaced
*/
function replacePlaceholders( str: string, elem, authors: AuthorMap ): string {
	let out = str;
	const keys = objectKeys( elem );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		info( 'Replacing <'+key+'> in the supplied string...' );
		let value;
		switch ( key ) {
			case 'author': 
				value = twitterHandle( elem[ key ], authors );
				break;
			default:
				value = elem[ key ];
				break;
		}
		out = replace( out, '<' + key + '>', value );
	}
	return out;
}


// MAIN //

/**
* Main function.
*/
async function main() {
	try {
		const metadata = JSON.parse( getInput( 'metadata' ) );
		const rulesPath = getInput( 'rules' );
		const rulesTable = readJSON( rulesPath );
		const authorsPath = getInput( 'authors' );
		const authors = readJSON( authorsPath );
		const types = getInput( 'types' )
			.split( ',' )
			.map( x => trim( x ) );
		info( `Generate tweets for metadata of the following types: ${types} (n = ${types.length}).` );
		const client = new Twitter({
			consumer_key: getInput( 'TWITTER_CONSUMER_KEY' ),
			consumer_secret: getInput( 'TWITTER_CONSUMER_SECRET' ),
			access_token_key: getInput( 'TWITTER_ACCESS_TOKEN' ),
			access_token_secret: getInput( 'TWITTER_ACCESS_TOKEN_SECRET' )
		})
		info( `Processing ${metadata.length} metadata entries...` );
		for ( let i = 0; i < metadata.length; i++ ) {
			const elem = metadata[ i ];
			if ( contains( types, elem.type ) ) {
				const description = elem.description;
				const rules = rulesTable[ elem.type ];
				const keys = objectKeys( rules );
				for ( let j = 0; j < keys.length; j++ ) {
					const key = keys[ j ];
					info( `Processing ${elem.type} metadata entry with description "${description}" and rule "${key}"...` );
					const re = reFromString( key );
					if ( re.test( description ) ) {
						let replacement;
						if ( isArray( rules[ key ] ) ) {
							replacement = shuffle( rules[ key ] )[ 0 ];
						} else { 
							replacement = rules[ key ]
						}
						let tweet = replace( description, re, replacement );
						if ( typeof authors === 'string' ) {
							tweet = replacePlaceholders( tweet, elem, JSON.parse( authors ) );
						}
						info( `Tweeting: "${tweet}"` );
						const res = await client.post( '/statuses/update', { status: tweet } );
						info( res );
						break;
					}
				}
			}
		}
	} catch ( e ) {
		error( e );
		setFailed( e.message );
	}
}

main();