module.exports = {
  entry: './src/Index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 19823,
    inline: true,
    hot: true
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