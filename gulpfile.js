var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var autoprefixerOptions = {
  browsers: ['last 20 versions', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};

gulp.task('sass', function () {
  return gulp
    .src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream: true}));
});

gulp.task('js', function () {
  var b = browserify({
    entries: './app/js/main.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['es2015','react']
    })]
  });

  return b.bundle()
    .pipe(source('./index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
    .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['sass','js'], function () {
  browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });

gulp.watch('app/scss/**/*.scss', ['sass']);
gulp.watch('app/js/**/*.js', ['js']);
gulp.watch('app/index.html', reload);
});

gulp.task('images', function(){
  return gulp.src('app/img/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(gulp.dest(dist+'/img'))
});
