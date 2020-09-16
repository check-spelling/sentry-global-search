const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: ['./src/index.ts'],
  },
  output: {
    library: '@sentry-internal/sentry-global-search',
    libraryTarget: 'umd',
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
