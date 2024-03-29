<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Metadata Tweet Action

> A GitHub action for automatically sending tweets based on commit metadata.

## Example Workflow

```yml
# Workflow name:
name: Test GitHub Action

# Workflow triggers:
on:
  push:

# Workflow jobs:
jobs:
  test:
    # Define the type of virtual host machine on which to run the job:
    runs-on: ubuntu-latest

    # Define the sequence of job steps...
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: |
          npm install
      - name: Extract metadata
        id: extract-metadata
        uses: stdlib-js/commit-metadata-action@v2
      - name: Process metadata and send tweets
        uses: stdlib-js/metadata-tweet-action@v2
        with:
          metadata: ${{ steps.extract-metadata.outputs.metadata }}
          TWITTER_CONSUMER_KEY: ${{ secrets.TWITTER_CONSUMER_KEY }}
          TWITTER_CONSUMER_SECRET: ${{ secrets.TWITTER_CONSUMER_SECRET }}
          TWITTER_ACCESS_TOKEN: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          TWITTER_ACCESS_TOKEN_SECRET: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
```

## Inputs

-   `metadata`: *(required)* metadata object array as generated by the [commit-metadata-action][commit-metadata-action].

-   `types`: *(optional)* comma-separated list of types for which to generate tweets. Default: `'bugfix, feature, release'`.

-   `authors`: *(optional)* file path to a JSON file containing a mapping from GitHub user names to Twitter handles.

    ```json
    {
        "kgryte": "kgryte",
        "Planeshifter": "burckhap"
    }
    ```

    Default: `'./authors.json'`.

-   `rules`: *(optional)* file path to a JSON file containing the rules for generating tweets for each type in `types`. For each type, the value should be an object whose keys are regular expression strings and whose values are corresponding replacement strings for each type.

    ```json
    {
	    "bugfix": {},
	    "feature": {
		    "/^[\\s\\S]*?adds? support ([\\s\\S]+)$/i": ":robot_face: [stdlib-bot]: Feature announcement! We've added support $1! Thanks, <author>! <url> #javascript #nodejs"
	    },
	    "release": {}
    }
    ```
    
    If a replacement string contains one or more placeholders demarcated by `< >`, the action replaces the placeholders with corresponding data from the `metadata` object. The `<author>` field is special, as the `username` subfield of the `author` metadata object is used to map to a Twitter handle. In the absence of a GitHub username to Twitter handle mapping, the action replaces the `<author>` placeholder with the GitHub author's name. 

    If the value assigned to a regular expression string is an array, then the action samples one of the replacement strings from the list of replacement strings (**note**: this is useful when wanting to add variety to generated tweets).

    ```json
    {
	    "bugfix": {},
	    "feature": {
		    "/^[\\s\\S]*?adds? support ([\\s\\S]+)$/i": [
			    ":robot_face: [stdlib-bot]: Feature announcement! We've added support $1! Thanks, <author>! <url> #javascript #nodejs",
			    ":robot_face: [stdlib-bot]: New feature! <author> added support $1! <url> #javascript #nodejs"
		    ]
	    },
	    "release": {}
    }
    ```

    Default: `'./rules.json'`.

-   `TWITTER_CONSUMER_KEY`: *(required)* the consumer key for the Twitter application.

-   `TWITTER_CONSUMER_SECRET`: *(required)* the consumer secret for the Twitter application.

-   `TWITTER_ACCESS_TOKEN`: *(required)* the access token for the Twitter application.

-   `TWITTER_ACCESS_TOKEN_SECRET`: *(required)* the access token secret for the Twitter application.

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2021-2024. The Stdlib [Authors][stdlib-authors].

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assign-issue-on-label-action/master/LICENSE

[commit-metadata-action]: https://github.com/stdlib-js/commit-metadata-action

</section>

<!-- /.links -->
