"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES //
const core_1 = require("@actions/core");
const twitter_1 = __importDefault(require("twitter"));
const assert_is_array_1 = __importDefault(require("@stdlib/assert-is-array"));
const assert_contains_1 = __importDefault(require("@stdlib/assert-contains"));
const string_replace_1 = __importDefault(require("@stdlib/string-replace"));
const fs_read_json_1 = require("@stdlib/fs-read-json");
const random_shuffle_1 = __importDefault(require("@stdlib/random-shuffle"));
const utils_regexp_from_string_1 = __importDefault(require("@stdlib/utils-regexp-from-string"));
const utils_keys_1 = __importDefault(require("@stdlib/utils-keys"));
const string_trim_1 = __importDefault(require("@stdlib/string-trim"));
// FUNCTIONS //
/**
* Returns the Twitter handle corresponding to a given GitHub user.
*
* @private
* @param {Object} user - GitHub user object
* @param {Object} authors - object mapping GitHub user names to Twitter handles
* @returns {string} Twitter handle or the name of the user as a fallback
*/
function twitterHandle(user, authors) {
    const { username, name } = user;
    if (username) {
        (0, core_1.info)('Checking for whether username is present in the authors object: ' + JSON.stringify(authors));
        if (authors[username]) {
            return `@${authors[username]}`;
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
function replacePlaceholders(str, elem, authors) {
    let out = str;
    const keys = (0, utils_keys_1.default)(elem);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        (0, core_1.info)('Replacing <' + key + '> in the supplied string...');
        let value;
        switch (key) {
            case 'author':
                value = twitterHandle(elem[key], authors);
                break;
            default:
                value = elem[key];
                break;
        }
        out = (0, string_replace_1.default)(out, '<' + key + '>', value);
    }
    return out;
}
// MAIN //
/**
* Main function.
*/
async function main() {
    try {
        const metadata = JSON.parse((0, core_1.getInput)('metadata'));
        const rulesPath = (0, core_1.getInput)('rules');
        const rulesTable = (0, fs_read_json_1.sync)(rulesPath);
        const authorsPath = (0, core_1.getInput)('authors');
        const authors = (0, fs_read_json_1.sync)(authorsPath);
        const types = (0, core_1.getInput)('types')
            .split(',')
            .map(x => (0, string_trim_1.default)(x));
        (0, core_1.info)(`Generate tweets for metadata of the following types: ${types} (n = ${types.length}).`);
        const client = new twitter_1.default({
            consumer_key: (0, core_1.getInput)('TWITTER_CONSUMER_KEY'),
            consumer_secret: (0, core_1.getInput)('TWITTER_CONSUMER_SECRET'),
            access_token_key: (0, core_1.getInput)('TWITTER_ACCESS_TOKEN'),
            access_token_secret: (0, core_1.getInput)('TWITTER_ACCESS_TOKEN_SECRET')
        });
        (0, core_1.info)(`Processing ${metadata.length} metadata entries...`);
        for (let i = 0; i < metadata.length; i++) {
            const elem = metadata[i];
            if ((0, assert_contains_1.default)(types, elem.type)) {
                const description = elem.description;
                const rules = rulesTable[elem.type];
                const keys = (0, utils_keys_1.default)(rules);
                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    (0, core_1.info)(`Processing ${elem.type} metadata entry with description "${description}" and rule "${key}"...`);
                    const re = (0, utils_regexp_from_string_1.default)(key);
                    if (re.test(description)) {
                        let replacement;
                        if ((0, assert_is_array_1.default)(rules[key])) {
                            replacement = (0, random_shuffle_1.default)(rules[key])[0];
                        }
                        else {
                            replacement = rules[key];
                        }
                        let tweet = (0, string_replace_1.default)(description, re, replacement);
                        if (typeof authors === 'string') {
                            tweet = replacePlaceholders(tweet, elem, JSON.parse(authors));
                        }
                        (0, core_1.info)(`Tweeting: "${tweet}"`);
                        const res = await client.post('/statuses/update', { status: tweet });
                        (0, core_1.info)(res);
                        break;
                    }
                }
            }
        }
    }
    catch (e) {
        (0, core_1.error)(e);
        (0, core_1.setFailed)(e.message);
    }
}
main();
//# sourceMappingURL=index.js.map