module.exports = {
    root: process.cwd(),
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 60,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
};