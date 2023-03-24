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
