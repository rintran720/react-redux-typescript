const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin } = require('webpack');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

require('dotenv').config({ path: isProd ? 'devops/.env.production' : 'devops/.env.development' });

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dr.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      inject: 'body',
    }),
  ],
};

if (isProd) {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/maskable_icon.png' },
        { from: 'public/logo16.png' },
        { from: 'public/logo32.png' },
        { from: 'public/logo192.png' },
        { from: 'public/logo512.png' },
        { from: 'public/manifest.json' },
        { from: 'public/robots.txt' },
        { from: 'public/serve.json' },
      ],
    }),
    new CompressionPlugin({
      filename: '[path][name].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './public/sw.js',
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 25 * 1024 * 1024, // 25 MB
    }),
    new CspHtmlWebpackPlugin(
      {
        'base-uri': "'self'",
        'object-src': "'none'",
        'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'", 'https://vitals.vercel-insights.com'],
        'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'", 'https://fonts.googleapis.com'],
      },
      {
        enabled: true,
        hashingMethod: 'sha256',
        hashEnabled: {
          'script-src': true,
          'style-src': true,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': true,
        },
      },
    ),
    // new BundleAnalyzerPlugin(), // View bundle.js stat
  );

  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // stats: "errors-only",
    // overlay: true,
  };
}

module.exports = config;
