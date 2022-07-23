module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  // https://heropy.blog/2020/05/20/vue-test-with-jest/
  silent: true, // <-- for silent warning message
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["html"],
};
