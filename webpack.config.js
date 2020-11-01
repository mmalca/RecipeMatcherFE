const webpack = require('webpack');
const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    mode: 'development',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.jsx',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            utils: path.resolve(__dirname, 'src/globals/utils'),
            "@common-components": path.resolve(__dirname, 'src/commonComponents'),
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({options: {}}),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        open: true,
        host: '10.10.248.98'
    },
    devtool: 'inline-source-map',
};
