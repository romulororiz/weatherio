const { src, dest, watch, series, task } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
	return src('./src/styles/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer())
		.pipe(dest('./src/styles/css'));
}

function watchTask() {
	watch(['./src/styles/scss/**/*.scss'], buildStyles);
}

task('default', series(buildStyles, watchTask));
