const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourceRoot = path.resolve(__dirname, 'src');

module.exports = {
    module:  {
        rules: [
            {
                test: /\.js$/,
                include: sourceRoot,
                use: {
                    loader: 'babel-loader'
		}
            },
            {
                test: /shadow\.css$/,
                include: sourceRoot,
                use: {
                    loader: 'css-loader'
                }
            },
            {
                test: /index\.css$/,
                include: sourceRoot,
                use: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ]
    }
};
