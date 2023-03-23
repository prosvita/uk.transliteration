// const exec = require('child_process').execSync
const spawn = require('child_process').spawnSync
const fs = require('fs')
// const textLat = fs.readFileSync('test/text.uk-Lat.md', 'utf8')
const textCyr = fs.readFileSync('test/text.uk-Cyr.md', 'utf8')

describe('run cli', () => {
    test('without any options', () => {
        expect(spawn('./bin/uk', [], {encoding: 'utf8'}).stderr)
            .toEqual('Must select one of the options: --to-cyrillic, --from-cyrillic\n')
    })

    test('without options', () => {
        expect(spawn('./bin/uk', ['test/text.uk-Cyr.md'], {encoding: 'utf8'}).stderr)
            .toEqual('Must select one of the options: --to-cyrillic, --from-cyrillic\n')
    })

    test('more than one action', () => {
        expect(spawn('./bin/uk', [ '-c', '-l' ], {encoding: 'utf8'}).stderr)
            .toEqual('Must select one of the options: --to-cyrillic, --from-cyrillic\n')
    })

    test('--to-cyrillic to stdout', () => {
        expect(spawn('./bin/uk', [ '-c', 'test/text.uk-Cyr.md' ], {encoding: 'utf8'}).stdout)
            .toEqual(textCyr)
    })

    test('--to-cyrillic without file', () => {
        expect(spawn('./bin/uk', ['-c'], {encoding: 'utf8'}).stderr)
            .toEqual('Can\'t select source file\n')
    })

    // test('--from-cyrillic to file', () => {
    //     exec('./bin/uk -l test/text.uk-Cyr.md test.uk-Lat.md~')
    //     expect(fs.readFileSync('test.uk-Lat.md~', 'utf8'))
    //         .toEqual(textLat)
    //     fs.unlinkSync('test.uk-Lat.md~')
    // })

    test('--from-cyrillic from wrong file', () => {
        expect(spawn('./bin/uk', [ '-l', 'wrong.file' ]).status)
            .toEqual(254)
    })
})
