const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    /* Entry is where the app starts */
    entry: './src/index.js',
    /* output is what the app gives */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    /* What the app needs to resolve */
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    mode: 'devlopment',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }]
            },
            /* Rule for css */
            {
                test: /\.(sa|sc|c)ss$/i, /* Identify if the file is sass or css extension */
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        /* Css plugin */
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    /* devServer to reload the app while development */
    devServer:{
        static: 
        {
          directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3006
    }
}