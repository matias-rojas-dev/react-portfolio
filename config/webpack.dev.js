const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        static: '../dist',
    }
}

module.exports = merge(common, devConfig)