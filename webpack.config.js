const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'node',
  mode: 'production',
}