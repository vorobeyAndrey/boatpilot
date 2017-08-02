const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: path.resolve('src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
       contentBase: path.resolve(__dirname, "dist"), 
       hot: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' },
            {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        },
            {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    },
    {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  }
        ]
    }

}