/**
 * Created by yuan on 2/22/2017.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './entry.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname
    }
}