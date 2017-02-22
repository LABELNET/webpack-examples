var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: "url-loader?limit=8192&name=./img/coffe.png"}, //限定文件大小，base64转换
            // {test: /\.(png|jpg)$/, loader: "url-loader?limit=8192&name=./[name].[ext]"}, 指定文件生成路径
        ]
    },
    plugins: [
        new webpack.BannerPlugin('this file is create!')
    ]
}