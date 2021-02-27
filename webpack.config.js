const path = require("path");

module.exports = {
  entry: "./src/start.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    //   Incluyo los loaders para css
    // 1. Utilizo css-loader para transformar a js
    // 2. Utilizao style-loader para inyectar el css en js al DOM.
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
