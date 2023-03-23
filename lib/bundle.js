var transliteration

if (typeof global !== "undefined" && global.transliteration) {
    transliteration = global.transliteration
} else {
    global.transliteration = transliteration = {}
}

transliteration.uk = require('./transliteration')
transliteration.uk.version = require('../package').version
