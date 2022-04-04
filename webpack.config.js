const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/page/index/index.js',
        'login': './src/page/login/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: ['url-loader?limit=8192&name=images/[name].[hash:8].[ext]']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),  
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/view/index.html',
            filename: 'view/index.html',
            inject: true,
            hash: true,
            chunks: ['index'],
            minify: {
                collapseWhitespace: false
            }
        })
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'util',
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    }
};