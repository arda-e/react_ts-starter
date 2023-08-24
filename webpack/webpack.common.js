const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  /* if entry file is not found, webpack will look for a 
  file with the extensions listed in resolve.extensions
  */
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    /*
      Use babel-loader to transpile ts and js files 
      */
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src', to: 'public' }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new Dotenv(),
  ],
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
