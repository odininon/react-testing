var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
        {
            test: /\.js?$/,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }
      ]
    }
};

module.exports = config;
