var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.ts',
        /*vendor: [            
            'jquery',
            'knockout'
        ]*/
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    /*plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js '})
    ],*/
    resolve: {
        extensions: ['.ts', '.js']
    }
};