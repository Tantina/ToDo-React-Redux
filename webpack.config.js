module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    fileName: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      loader: 'babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './',
  },
  eslint: {
    configFile: './.eslintrc',
  },
}
