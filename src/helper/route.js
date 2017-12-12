const fs = require('fs');
const stat = fs.stats;

module.exports = async (req, res, filePath, config) => {
    await new Promise(resolve => {
        setTimeout(() => {
            res.write('route\n');
            resolve();
        },10000);
    });
    res.end('huangxi');
};