const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

 let getHTMLConfig = function (name) {
    return {
        template: `./src/view/${name}.html`,
        filename: `view/${name}.html`,
        inject: true,
        hash: true,
        chunks: [name],
        minify: {
            collapseWhitespace: false
        }
    };
};

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/page/index/index.js',
        'account': './src/page/account/account.js',
        'cart': './src/page/cart/cart.js',
        'order': './src/page/order/order.js',
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
                test: /\.(png|svg|jpg|gif|webp)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[hash:8].[ext]',
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(htm|template)$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        esModule: false
                    }
                }]
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
        new HtmlWebpackPlugin(getHTMLConfig('index')),
        new HtmlWebpackPlugin(getHTMLConfig('account')),
        new HtmlWebpackPlugin(getHTMLConfig('cart')),
        new HtmlWebpackPlugin(getHTMLConfig('order')),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images/copy'),
                    to: path.resolve(__dirname, 'dist/images/[name][ext]'),// [ext] include dot
                }
            ]
        }),
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
    },
    resolve: {
        alias: {
            util: path.resolve(__dirname, 'src/util'),
            page: path.resolve(__dirname, 'src/page'),
            images: path.resolve(__dirname, 'src/images'),
            service: path.resolve(__dirname, 'src/service'),
            node_module: path.resolve(__dirname, 'src/node_module'),
        }
    }
};