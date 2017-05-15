module.exports = {
  entry: './src/Index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 19823,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader'}
        ]
      }
    ]
  }
};