const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    devServer: {
        hot: true,
        devMiddleware: {
            index: true,
            publicPath: '/',
            writeToDisk: true,
        },
        // proxy: [
        //     {
        //         context: (pathname) => {
        //             return !pathname.match('^/sockjs') && !pathname.match('^/ws');
        //         },
        //         target: 'http://localhost:30000',
        //         ws: true,
        //     },
        // ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'webpack-import-glob-loader',
                    'source-map-loader',
                    // {
                    //     loader: 'string-replace-loader',
                    //     options: {
                    //         search: '"__ALL_TEMPLATES__"',
                    //         replace: allTemplates,
                    //     },
                    // },
                ],
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        // }),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].[chunkhash].css',
        // }),
        // new ESLintPlugin({
        //     extensions: ['ts'],
        // }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'static',
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
};
