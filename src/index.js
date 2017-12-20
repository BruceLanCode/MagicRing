const Server = require('./app');
const yargs = require('yargs');

// console.info(yargs.argv);

const argv = yargs
    .usage('magicRing [options]')
    .option('p',{
        alias: 'port',
        describe: '端口号',
        default: 3000
    })
    .option('h',{
        alias: 'hostname',
        describe: 'host',
        default: 'localhost'
    })
    .option('d',{
        alias: 'root',
        describe: 'root path',
        default: process.cwd()
    })
    .version()
    .alias('v','version')
    .help()
    .argv;
// console.info(argv);
const server = new Server(argv);
server.start();

