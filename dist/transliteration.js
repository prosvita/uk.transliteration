(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
var transliteration

if (typeof global !== "undefined" && global.transliteration) {
    transliteration = global.transliteration
} else {
    global.transliteration = transliteration = {}
}

transliteration.uk = require('./transliteration')
transliteration.uk.version = require('../package').version

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../package":5,"./transliteration":4}],2:[function(require,module,exports){
module.exports = ([
    [ /«/g, "\"" ],
    [ /»/g, "\"" ],
    // 0. Словник виключень
    // 1. 'в' в кінці речення
    [ /([абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'’ʼ])в([^абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’ʼ])/g, "$1w$2" ],
    [ /([АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'’ʼ])В([^АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'’ʼ])/g, "$1W$2" ],
    // 2. приголосні букви з 'ь'
    [ /бь/g, "ḅ" ],
    [ /вь/g, "ṿ" ],
    [ /гь/g, "ḥ" ],
    [ /ґь/g, "x" ],
    [ /дь/g, "ḍ" ],
    [ /жь/g, "x" ],
    [ /зь/g, "ẓ" ],
    [ /кь/g, "ḳ" ],
    [ /ль/g, "ḷ" ],
    [ /мь/g, "ṃ" ],
    [ /нь/g, "ṇ" ],
    [ /пь/g, "x" ],
    [ /рь/g, "x" ],
    [ /сь/g, "ṣ" ],
    [ /ть/g, "ṭ" ],
    [ /фь/g, "x" ],
    [ /хь/g, "x" ],
    [ /ць/g, "c" ],
    [ /чь/g, "x" ],
    [ /шь/g, "ṡ" ],
    [ /ь/g, "" ],
    [ /Б[ьЬ]/g, "Ḅ" ],
    [ /В[ьЬ]/g, "Ṿ" ],
    [ /Г[ьЬ]/g, "Ḥ" ],
    [ /Ґ[ьЬ]/g, "x" ],
    [ /Д[ьЬ]/g, "Ḍ" ],
    [ /Ж[ьЬ]/g, "x" ],
    [ /З[ьЬ]/g, "Ẓ" ],
    [ /К[ьЬ]/g, "Ḳ" ],
    [ /Л[ьЬ]/g, "Ḷ" ],
    [ /М[ьЬ]/g, "Ṃ" ],
    [ /Н[ьЬ]/g, "Ṇ" ],
    [ /П[ьЬ]/g, "x" ],
    [ /Р[ьЬ]/g, "x" ],
    [ /С[ьЬ]/g, "Ṣ" ],
    [ /Т[ьЬ]/g, "Ṭ" ],
    [ /Ф[ьЬ]/g, "x" ],
    [ /Х[ьЬ]/g, "x" ],
    [ /Ц[ьЬ]/g, "C" ],
    [ /Ч[ьЬ]/g, "x" ],
    [ /Ш[ьЬ]/g, "x" ],
    [ /Ь/g, "" ],
    // 3. абетка
    [ /а/g, "a" ],
    [ /б/g, "b" ],
    [ /в/g, "v" ],
    [ /г/g, "h" ],
    [ /ґ/g, "g" ],
    [ /д/g, "d" ],
    [ /е/g, "e" ],
    // skip 'є'
    [ /ж/g, "ż" ],
    [ /з/g, "z" ],
    [ /и/g, "y" ],
    [ /і/g, "i" ],
    [ /ї/g, "ï" ],
    [ /й/g, "j" ],
    [ /к/g, "k" ],
    [ /л/g, "l" ],
    [ /м/g, "m" ],
    [ /н/g, "n" ],
    [ /о/g, "o" ],
    [ /п/g, "p" ],
    [ /р/g, "r" ],
    [ /с/g, "s" ],
    [ /т/g, "t" ],
    [ /у/g, "u" ],
    [ /ф/g, "f" ],
    [ /х/g, "ḣ" ],
    [ /ц/g, "c" ],
    [ /ч/g, "ċ" ],
    [ /ш/g, "ṡ" ],
    [ /щ/g, "ṩ" ],
    [ /ю/g, "ü" ],
    [ /я/g, "ja" ],
    [ /А/g, "A" ],
    [ /Б/g, "B" ],
    [ /В/g, "V" ],
    [ /Г/g, "H" ],
    [ /Ґ/g, "G" ],
    [ /Д/g, "D" ],
    [ /Е/g, "E" ],
    // skip 'Є'
    [ /Ж/g, "Ż" ],
    [ /З/g, "Z" ],
    [ /И/g, "Y" ],
    [ /І/g, "i" ],
    [ /Ї/g, "Ï" ],
    [ /Й/g, "J" ],
    [ /К/g, "K" ],
    [ /Л/g, "L" ],
    [ /М/g, "M" ],
    [ /Н/g, "N" ],
    [ /О/g, "O" ],
    [ /П/g, "P" ],
    [ /Р/g, "R" ],
    [ /С/g, "S" ],
    [ /Т/g, "T" ],
    [ /У/g, "U" ],
    [ /Ф/g, "F" ],
    [ /Х/g, "Ḣ" ],
    [ /Ц/g, "C" ],
    [ /Ч/g, "Ċ" ],
    [ /Ш/g, "Ṡ" ],
    [ /Щ/g, "Ṩ" ],
    [ /Ю/g, "Ü" ],
    [ /([A-ZАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯÜĊŻḄḌḢḤḲḶṂṆṠṢṨṬṾẒ])Я/g, "$1JA" ],
    [ /Я([A-ZАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯÜĊŻḄḌḢḤḲḶṂṆṠṢṨṬṾẒ])/g, "JA$1" ],
    [ /Я/g, "Ja" ],
])

},{}],3:[function(require,module,exports){
module.exports = ([
    [ /“/g, "\"" ],
    [ /”/g, "\"" ],
])

},{}],4:[function(require,module,exports){
function fromCyrillic(text) {
    return transliterate(text, require('./cyr2lat'))
}

function toCyrillic(text) {
    return transliterate(text, require('./lat2cyr'))
}

function transliterate(text, reMap) {
    for (var i in reMap) {
        text = text.replace(reMap[i][0], reMap[i][1])
    }

    return text
}

module.exports = {
    fromCyrillic,
    toCyrillic
}

},{"./cyr2lat":2,"./lat2cyr":3}],5:[function(require,module,exports){
module.exports={
  "name": "transliteration.uk",
  "version": "0.1.0",
  "description": "Transliteration tool for Ukrainian language (Latin and Cyrillic alphabets)",
  "main": "./lib/transliteration.js",
  "bin": {
    "uk": "./bin/uk"
  },
  "engines": {
    "node": ">=10"
  },
  "scripts": {
    "browserify": "browserify lib/bundle.js --debug | exorcist ./dist/transliteration.js.map > ./dist/transliteration.js",
    "uglify": "uglifyjs ./dist/transliteration.js --compress --mangle --source-map root=dist/transliteration.js.map --source-map filename=dist/transliteration.min.js.map --source-map url=transliteration.min.js.map -o ./dist/transliteration.min.js",
    "dist": "yarn browserify && yarn uglify",
    "lint": "eslint .",
    "test": "jest --runInBand"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/prosvita/uk.transliteration.git"
  },
  "keywords": [
    "transliterate",
    "transliteration"
  ],
  "author": {
    "name": "Pavlo Bashynskyi",
    "email": "levonet@gmail.com",
    "url": "https://github.com/levonet"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/prosvita/uk.transliteration/issues"
  },
  "homepage": "https://github.com/prosvita/uk.transliteration",
  "dependencies": {
    "commander": "^10.0.0"
  },
  "devDependencies": {
    "browserify": "^17.0.0",
    "eslint": "^8.36.0",
    "exorcist": "^2.0.0",
    "jest": "^29.5.0",
    "uglify-js": "^3.17.4"
  },
  "files": [
    "bin",
    "dist",
    "lib"
  ]
}

},{}]},{},[1])
//# sourceMappingURL=transliteration.js.map
