var gulp = require('gulp'),
    babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	lr = require('tiny-lr'),
	server = lr();

 
// -- WEBSERVER
gulp.task('webserver', function() {
  connect.server({
      port: 8888
    });
});

// -- CONCATENATE & MINIFY JS
gulp.task('scripts', function() {
	return gulp.src('js/*.js')
        .pipe(babel({presets: ['es2015']
        }))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// -- STYLES
gulp.task('styles', function() {
  return gulp.src('app/sass/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('app/css'))
	.pipe(notify({ message: 'Styles task complete' }));
});

// -- WATCH
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('app/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('img/**/*', ['images']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in dist/, reload on change
  gulp.watch(['css/**','js/**','img/**','*.html']).on('change', function(file) {
	server.changed(file.path);
  });

});


gulp.task('default', ['webserver', 'styles', 'scripts', 'watch']);