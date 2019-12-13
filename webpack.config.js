const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const rootPath = path.join(__dirname, './');
const srcPath = path.join(rootPath, 'src');
const buildPath = path.join(rootPath, './dist');
const projectName = require("./package.json").name;
const nodeExternals = require('webpack-node-externals');
const importType = "commonjs";
module.exports = env => {
    // const entryDirs = fs.readdirSync(srcPath);
    // const entry = {};
    // entryDirs.map(d => {
    //     const isIndex = d === "index.ts";
    //     Object.assign(entry, {
    //         [isIndex ? 'index' : `${d}/index`]: [path.resolve(srcPath, isIndex ? d : `${d}/index.ts`)]
    //     });
    // });
    return {
        entry: {
            "index": path.resolve(srcPath, 'index.ts')
        },
        output: {
            filename: '[name].js',
            libraryTarget: importType,
            umdNamedDefine: true,

            path: buildPath,
        },
        resolve: {
            alias: {},
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            modules: ["node_modules"]
        },
        target: 'node',
        context: __dirname,
        devtool: env.NODE_ENV === "production" ? false : "source-map",
        externals: [nodeExternals({
            importType: importType,
        })],
        node: {
            fs: "empty",
            child_process: "empty",
            module: "empty",
            fsevents: "empty",
            __filename: false,
            __dirname: false
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env.NODE_ENV)
                }
            }),
        ],
        module: {
            rules: [{
                test: /\.(ts|tsx)$/,
                use: ["babel-loader", "ts-loader"],
                include: [srcPath],
                exclude: /node_modules/,
            }],
        },
    }
};
