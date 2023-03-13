const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const paths = {
  scripts: {
    src: 'src/*.js',
    dest: 'dist/',
    example: 'example',
  },
};

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.basename += '.min';
        path.extname = '.js';
      })
    )
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(gulp.dest(paths.scripts.example));
}

function watchFile() {
  gulp.watch(paths.scripts.src, scripts);
}

exports.watch = watchFile;
exports.default = scripts;
