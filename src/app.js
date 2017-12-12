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
            // const filePath = path.join(this.conf.root,req.url);
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            res.write(this.config.root + '\n');
            res.write(req.url + '\n');
            const headers = res.getHeaders();
            res.write('headers:' + JSON.stringify(headers) + '\n');

            const filePath = path.join(this.config.root,req.url);
            res.write(filePath + '\n');
            route(req,res,filePath,this.config);
        });
        server.listen(3000,() => {
            console.info(`Server start at ${chalk.bold.blue('3000')}`);
        });
    }
}

module.exports = Server;