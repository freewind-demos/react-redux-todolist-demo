const webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry.jsx'
  ],
  output: {
    path: __dirname + '/public/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: "style!css!less"
    }]
  }
};
