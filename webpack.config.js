const path = require('path');

module.exports = {
  entry: './src/components/shinzanmono/index.js',
  output: {
    // filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
