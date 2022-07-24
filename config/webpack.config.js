const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-polyfill")

const createDevServer = (paths) => {
  const env = paths.env || {};
  const port = env.PORT || 3000;
  const mode = env.MODE || "development";

  return {
    entry: paths.gameIndexJs,
    mode,
    output: {
      path: paths.build,
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": { "browsers": ["> 4%", "safari 10", "ie 11", "iOS 9"] },
                  "modules": false,
                }]
              ],
              plugins: [
                [
                  "@babel/plugin-transform-react-jsx",
                  {
                    "throwIfNamespace": false,
                    "runtime": "automatic",
                    "importSource": "@371digital/gengine-babel-transform-jsx"
                  }
                ]
              ]
            }
          }],
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.gameHtml,
        inject: 'body',
        title: "Output Manegment"
      }),
    ],
    devServer: {
      static: paths.gamePublic,
      port: port,
      hot: true,
      compress: true,
    }
  }
};
module.exports = createDevServer;