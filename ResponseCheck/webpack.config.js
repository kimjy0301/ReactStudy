const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'baseball',
    mode: 'development',
    devtool: 'eval',

    resolve: {
        extensions: ['.jsx', '.mjs', '.js', '.json']
      },

    entry: {
        app: ['./main.js'],
    },//입력 js

    module: {
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:[['@babel/preset-env',{
                    targets: {
                        browsers: ['> 5% in KR','not dead'],
                    },
                    debug: true
                }],'@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel']
            }
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true})
    ],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname = 현재경로
        filename: 'app.js',
        publicPath: '/dist/'
    }//출력 js

}; 