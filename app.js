const yargs = require('yargs')
const music = require('./music.js')

yargs.command({
    command: 'EnstrumanAra',
    describe: 'Arama yap',
    builder: {
        enstruman: {
            describe: 'Arama yapacaginiz alan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
        music.EnstrumanAra(argv.enstruman)
    }
})

yargs.command({
    command: 'BestekarAra',
    describe: 'Arama yap',
    builder: {
        bestekar: {
            describe: 'Arama yapacaginiz alan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
        music.BestekarAra(argv.bestekar)
    }
})

yargs.command({
    command: 'parametreAra',
    describe: 'Arama yap',
    builder: {
        bestekar: {
            describe: 'Arama yapacaginiz alan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
        music.ParametreIleVerileriCek(argv.bestekar)
    }
})

yargs.command({
    command: 'StilAra',
    describe: 'Arama yap',
    builder: {
        stil: {
            describe: 'Arama yapacaginiz alan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
        music.StilAra(argv.stil)
    }
})

yargs.command({
    command: 'all',
    describe: 'Butun verileri çek',
    handler: function ()  {
        music.ButunVerileriCek()
    }
})

yargs.command({
    command: 'detaylar',
    describe: 'Parça Detaylarını çek',
    handler: function ()  {
        music.ParcaDetaylariniCek()
    }
})

yargs.command({
    command: 'pall',
    describe: 'Arama yap',
    builder: {
        parametre: {
            describe: 'Arama yapacaginiz alan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
        music.ParametreIleVerileriCek(argv.parametre)
    }
})


yargs.parse()