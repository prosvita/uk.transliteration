const program = require('commander')
const fs = require('fs')
const version = require('../package').version
const transliteration = require('./transliteration')

module.exports.run = (argv) => {
    let sourceFile

    program
        .version(version)
        .usage('<options> <sourceFile> [targetFile]')
        .option('-c, --to-cyrillic', 'Convert to Cyrillic from Latin')
        .option('-l, --from-cyrillic', 'Convert to Latin from Cyrillic')
        .arguments('[sourceFile] [targetFile]')
        .action((source, target) => {
            sourceFile = source;
            if (typeof target !== 'undefined') {
                var access = fs.createWriteStream(target, {flags: 'w'})
                process.stdout.write = access.write.bind(access)
            }
        })

    program.parse(argv)
    const opts = program.opts()

    if ((opts.toCyrillic | 0) + (opts.fromCyrillic | 0) !== 1) {
        console.error(new Error('Must select one of the options: --to-cyrillic, --from-cyrillic').message)
        process.exit(1)
    }

    if (typeof sourceFile === 'undefined') {
        console.error(new Error('Can\'t select source file').message)
        process.exit(1)
    }

    fs.readFile(sourceFile, 'utf8', (err, text) => {
        if (err) {
            console.error(new Error(err.message).message)
            process.exit(err.errno)
        }

        if (opts.toCyrillic) {
            process.stdout.write(transliteration.toCyrillic(text))
        } else if (opts.fromCyrillic) {
            process.stdout.write(transliteration.fromCyrillic(text))
        }
    })
}
