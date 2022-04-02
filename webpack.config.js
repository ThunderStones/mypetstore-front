const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let getHTMLConfig = function (name) {
    return new HtmlWebpackPlugin({
        template: `./src/view/${name}.html`,
        filename: `view/${name}.html`,
        inject: true,
        hash: true,
        chunks: ['common', name],
        minify: {
            collapseWhitespace: false
        }
    })
}

module.exports = {
    mode: "development",
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
        'catalog-main': ['./src/page/catalog-main/index.js']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8070,
        contentBase: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }

                    },
                    {
                        loader: "css-loader",
                        options: {
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.htm$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        esModule: false,
                        minimize: false
                    }
                }]
            }

        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        getHTMLConfig('index'),
        getHTMLConfig('login'),
        getHTMLConfig('catalog-main'),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            })
        ],
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
    externals: {
        'jquery': 'window.jQuery'
    },
    resolve: {
        alias: {
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            images: __dirname + '/src/images',
            service: __dirname + '/src/service',
            node_module: __dirname + '/node_module'
        }
    }
};