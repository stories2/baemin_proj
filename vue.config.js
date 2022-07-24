const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" && process.env.DEPLOY !== "firebase"
      ? "/baemin_proj/"
      : "/",
  chainWebpack: (config) => {
    config.plugin("copy").tap((options) => {
      // console.log("test", options[0].patterns[0].globOptions.ignore);
      options[0].patterns[0].globOptions.ignore.push("tests/unit/*.spec.ts");
      return options;
    });
  },
});
