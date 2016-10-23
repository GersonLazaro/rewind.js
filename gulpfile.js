var gulp = require('gulp'),
	babel = require('gulp-babel'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream')


gulp.task('compile-js', function () {
	return gulp.src('src/js/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/js/partials/'))
})

gulp.task('browserify', function () {
	return browserify('./dist/js/partials/init.js')
		.bundle()
		.pipe(source('rewind.js'))
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('compile-css', function () {
	return gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css/'))
})