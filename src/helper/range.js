module.exports = (totalSize,req,res) => {
    const range = req.headers.range;
    if(!range) {
        return {code: 200};
    }

    const sizes = range.match(/bytes=(\d*)-(\d*)/);
    // console.info(sizes);
    const end = sizes[2] ? parseInt(sizes[2]) : totalSize -1;
    const start = sizes[1] ? parseInt(sizes[1]) : totalSize - end;

    if(start > end || start < 0 || end > totalSize) {
        return {code: 200};
    }

    res.setHeader('Accepet-Ranges','bytes');
    res.setHeader('Content-Ranges',`bytes ${start}-${end}/${totalSize}`);
    res.setHeader('Content-Length',end - start);
    return {
        code: 206,
        start,
        end
    };
};