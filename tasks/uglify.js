module.exports = {
  all: {
    options: {
      mangle: false,
      compress: false,
      beautify: false
    },
    files: {
      'dist/scripts/app.js': [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/knockout/build/output/knockout-latest.js',
        'scripts/utilities/*.js',
        'scripts/models/*.js',
        'scripts/view-models/*.js',
        'scripts/app.js'
      ]
    }
  }
};
