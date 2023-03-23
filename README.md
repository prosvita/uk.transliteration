# uk.transliteration

JavaScript library and tool for transliteration cyrillic Ukrainian words to latin.

Library can be used in browser and on node.js platform. Browser version can be found in the dist directory.

Browse the demos on https://prosvita.github.io/uk.transliteration/

## Install in Node.js

```bash
npm install transliteration.uk --save
```

```js
var transliteration=require('transliteration');
transliteration.fromCyrillic('Привіт!'); // Pryvit!
transliteration.toCyrillic('Pryvit!'); // Привіт!
```

## Use in browser

This module should support all major browsers.

### bower

```bash
# Install bower if not already installed
# npm install bower -g
bower install transliteration.uk
```

```html
<html>
<head>
  <script src="bower_components/transliteration.uk/dist/transliteration.min.js"></script>
</head>
<body>
  <script>
    console.log(transliteration.fromCyrillic('Привіт!')); // Pryvit!
    console.log(transliteration.toCyrillic('Pryvit!')); // Привіт!
  </script>
</body>
</html>
```

### Vanilla

```html
<script src="https://prosvita.github.io/uk.transliteration/dist/transliteration.min.js"></script>
```

## Install command line tool globally

```
npm install transliteration.uk -g
uk --help

  Usage: uk <options> <sourceFile> [targetFile]

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -c, --to-cyrillic    Convert to Cyrillic from Latin
    -l, --from-cyrillic  Convert to Latin from Cyrillic

```
