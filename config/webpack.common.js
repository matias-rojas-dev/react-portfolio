const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$|jsx/,
                exclude: /node_modules/,
            },
            {
                use: ["style-loader", "css-loader"],
                test: /.(css|sass|scss)$/,
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
            {
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }


        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }

}