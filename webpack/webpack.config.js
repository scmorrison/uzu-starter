const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    // webpack folder’s entry js — excluded from uzu’s build process.
    entry: "./webpack/entry.js",
    output: {
        // we’re going to put the generated file in the assets folder so jekyll will grab it.
        // if using GitHub Pages, use the following:
        // path: "assets/javascripts"
        path: path.resolve(__dirname, 'build', 'js'),
        filename: "bundle.js"
    },
    module : {
       rules: [
           {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
           },
       ]
    }
};
