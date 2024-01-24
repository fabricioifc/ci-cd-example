const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    fallback: { 
        path: require.resolve("path-browserify"),
        fs: false,
        stream: false,
        crypto: false,
        http: false,
        https: false,
        os: false,
        zlib: false,
        net: false,
        buffer: false,
        assert: false,
        string_decoder: false,
        util: false,
        url: false,
        querystring: false,
    },
    
  }
}