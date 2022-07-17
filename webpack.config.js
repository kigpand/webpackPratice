var path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        local: './src/index.js',
        main: './src/test.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}