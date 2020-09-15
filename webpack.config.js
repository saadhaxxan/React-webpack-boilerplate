const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : './src/index.js',
    output: {
        path : path.join(__dirname,'/dist'),
        filename : 'bundle.js'
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        rules:[
            {
                test: /\.js?/,
                exclude: path.join(__dirname, '/node_modules'),
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}