const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                loader: 'svelte-loader',
                options: {
                    emitCss: true,
                    preprocess: require('svelte-preprocess')({})
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                    /* {
                        loader: 'resolve-url-loader',
                        options: {
                            keepQuery: true,
                        },
                    }, */
                    {
                        loader: 'sass-loader',
                        options: {
                            // implementation: require('sass'),
                            sourceMap: true,
                            // outputStyle: 'expanded',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.mjs',
            '.js',
            '.svelte'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // require('html-webpack-template'),
            // inject: false,
            appMountId: 'app',
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};

module.exports = config;