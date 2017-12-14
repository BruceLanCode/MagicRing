const fs = require('fs');
const promisify = require('es6-promisify');
const stat = promisify(fs.stat);
const path = require('path');
const pug = require('pug');
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname, '../template/dir.pug');
const source = fs.readFileSync(tplPath);
const template = pug.compile(source);
// const template = pug.compileFile(source)

module.exports = async (req, res, filePath, config) => {
    try {
        const stats = await stat(filePath);
        if (stats.isFile()) {
            res.write('file \n');
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(template());
        }
    } catch (ex) {
        console.info('err happened')
        console.error(ex);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath} is not a directory or file \n ${ex.toString()}`);
    }
    res.end('huangxi');
};