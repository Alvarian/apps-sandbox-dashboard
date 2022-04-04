const path = require('path');

module.exports ={
  mode: "production",
  entry: {
    "projects/games/Mystic8/v3": "./public/projects/games/mystic8/versions/v3/main.js",
    "projects/games/Mystic8/v2": "./public/projects/games/mystic8/versions/v2/main.js",
    "projects/games/Rivalry/v3": "./public/projects/games/rivalry/versions/v3/main.js",
    "projects/games/Rivalry/v2": "./public/projects/games/rivalry/versions/v2/main.js"
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      "fs": false,
      "path": false,
      "constants": false,
      "assert": false,
      "stream": false,
      "util": false,
    },
  }
  // devServer: {
  //   static: path.join(__dirname, 'public'),
  //   hot: true,
  //   port: 9000
  // }
}