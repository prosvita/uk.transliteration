const fs = require('fs')
const transliteration = require('../lib/transliteration')
const textLat = fs.readFileSync('test/text.uk-Lat.md', 'utf8')
const textCyr = fs.readFileSync('test/text.uk-Cyr.md', 'utf8')

describe('transliteration', () => {
    test('fromCyrillic()', () => {
        expect(textLat).toEqual(transliteration.fromCyrillic(textCyr))
    })

    // test('toCyrillic()', () => {
    //     expect(textCyr).toEqual(transliteration.toCyrillic(textLat))
    // })
})
