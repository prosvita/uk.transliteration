/* global transliteration */
describe('transliteration', function() {
    it('fromCyrillic()', function() {
        expect(transliteration.fromCyrillic('Привіт!')).to.equal('Pryvit!');
    });

    it('toCyrillic()', function() {
        expect(transliteration.toCyrillic('Pryvit!')).to.equal('Привіт!');
    });
});
