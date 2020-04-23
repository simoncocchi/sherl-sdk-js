const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    'sherl-sdk': './src/index.ts',
    'sherl-sdk.min': './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        sourceMap: true,
      }),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '_bundles'),
    libraryTarget: 'umd',
    library: 'sherl',
    umdNamedDefine: true,
  },
};
