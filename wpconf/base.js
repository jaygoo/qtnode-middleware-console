var webpack = require('webpack');
const path = require('path');

function resolve (dir) {
    let p =  path.resolve(__dirname, '..', dir)
    return p;
}

module.exports = {
    mode: "production",
    devtool: 'source-map',
    target: "node",

    entry: {
        index: resolve('./entry/index.ts')
    },
    output: {//输出目录
        path:  path.resolve( './dist'),
        filename: '[name].js',
        publicPath: path.resolve("/"),
        library: 'pkg_name',
        libraryTarget: 'commonjs2'
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};