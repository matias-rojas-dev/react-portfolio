const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public/'),
        filename: 'bundle.js',
        public

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'sass-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false,
        maxEntrypointSize: 580000,
        maxAssetSize: 590000
    },
    //devtool: 'eval-cheap-module-source-map',
    devtool: 'sourcemap',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    },
}