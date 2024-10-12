const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './index.ts',
        'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
        'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
        'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
        'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
        'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
    devtool: 'inline-source-map',
    output: {
        globalObject: 'self',
        filename: '[name].index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'modules/og-experiments/',
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
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'webpack-import-glob-loader', 'source-map-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: 'Monaco Editor—Og Experiments',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'module.json' },
                { from: 'assets', to: 'assets' },
                { from: 'styles', to: 'styles' },
                { from: 'templates', to: 'templates' },
                { from: 'src/**/*.hbs', to: '' },
                { from: 'src/**/*.css', to: '' },
                { from: 'src/**/*.png', to: '' },
            ],
        }),
    ],
};
