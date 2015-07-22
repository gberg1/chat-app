module.exports = {
  entry: {
    app: './app/main.js'
  },
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx-loader', 'babel'] }
    ]
  }
}
