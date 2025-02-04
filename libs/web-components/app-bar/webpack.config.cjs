const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/app-bar.ts'),
config.output = {
    filename: 'fds-app-bar.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;