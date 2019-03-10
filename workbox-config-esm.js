module.exports = {
  globDirectory: "public",
  globPatterns: ["**/*.html", "js/esm/*.js"],
  swDest: "public/js/esm/sw.js",
  swSrc: "./src/sw.js",
  modifyURLPrefix: {
    "js/": "/js/",
    "index.": "/index."
  }
};
