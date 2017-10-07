const GasPlugin = require('gas-webpack-plugin');
const config = require('config');
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(__dirname, 'build/client.json'), JSON.stringify(config));

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      config: path.resolve(__dirname, 'build/client.json'),
    },
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
    ],
  },
  plugins: [
    new GasPlugin(),
  ],
};
