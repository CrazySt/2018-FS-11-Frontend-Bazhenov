var path = require('path');'

module.exports = {
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ],
        loaders: [
            {
            test: /\.js/,
            loader: 'babel-loader',
            include: __dirname + '/src',
            }
        ],
    }
};
