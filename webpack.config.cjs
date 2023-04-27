const path = require('path');

const mode = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

module.exports = {
  mode,
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
