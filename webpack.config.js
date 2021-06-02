const path = require('path')
module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'import-html-entry.js',
    library: 'importHTML',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: 'babel-loader',
      }
    ]
  }
}