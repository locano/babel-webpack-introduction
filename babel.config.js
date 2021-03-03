const presets = [
  "@babel/env",
  {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1",
    },
    useBuiltIns: "usage", //usage - verifica y utiliza los polifyll correspondientes.
    corejs: "3.6.5",
  },
];
const plugins = ["@babel/plugin-transform-arrow-functions"];

module.exports = { presets, plugins };
