function fromCyrillic(text) {
    return transliterate(text, require('./cyr2lat'))
}

function toCyrillic(text) {
    return transliterate(text, require('./lat2cyr'))
}

function transliterate(text, reMap) {
    text = ' ' + text + ' '

    for (var i in reMap) {
        text = text.replace(reMap[i][0], reMap[i][1])
    }

    return text.substring(1, text.length - 1)
}

module.exports = {
    fromCyrillic,
    toCyrillic
}
