module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: ["scss/**/*"],
    tasks: ["scsslint:all", "sass"]
  },
  scripts: {
    files: ["scripts/**/*"],
    tasks: ["uglify:all"]
  },
  images: {
    files: ["images/**/*"],
    tasks: ["copy:images"]
  }
};
