/**
 * Created by yuan on 2/22/2017.
 */
var webpack = require('webpack');

const config = {
    entry: {
        app: './app.js',
        vendors: './vendors.js'
    },
    output: {
        filename: '[name]-out.js',
        path: __dirname
    }
};

module.exports = config;

// module.exports={}