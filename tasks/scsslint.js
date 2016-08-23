module.exports = {
  all: ["scss/**/*.scss", "!node_modules/**/*.scss"],
  options: {
    config: "config/scss-lint.yml",
    reporterOutput: "reports/scss-lint-report.xml",
    colorizeOutput: true
  }
};
