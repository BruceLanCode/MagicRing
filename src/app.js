const http = require('http');
const path = require('path');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');
const route = require('./helper/route');

class Server {
    constructor(config) {
        this.config = Object.assign({},conf,config);
    }

    start() {
        const server = http.createServer((req,res) => {
            const filePath = path.join(this.config.root,req.url);
            route(req,res,filePath,this.config);
        });
        server.listen(this.config.port,() => {
            console.info(`Server start at ${chalk.bold.blue(this.config.port)}`);
        });
    }
}

module.exports = Server;