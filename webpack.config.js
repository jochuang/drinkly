const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode: process.env.NODE_ENV,

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','sass-loader'],
            },
        ],
    },

    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        static: {
            // where it is being served from
            directory: path.join(__dirname, 'client')
        },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        }
    }
}