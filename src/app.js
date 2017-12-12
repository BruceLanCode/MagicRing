const http = require('http');
const path = require('path');

class Server {
    constructor() {

    }

    start() {
        const server = http.createServer((req,res) => {
            res.end('huangxi');
        });
        server.listen(3000,() => {
            console.info(`Server start at 3000`);
        });
    }
}

module.exports = Server;