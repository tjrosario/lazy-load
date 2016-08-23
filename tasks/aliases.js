module.exports = {
  "default": [],
  lint: ['scsslint:all'],
  build: [
    "lint",
    "sass",
    "uglify",
    "copy",
    "notify"
  ],
  dev: [
    "build",
    "watch"
  ]
};
