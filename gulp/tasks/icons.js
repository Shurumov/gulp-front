'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var svgSymbols = require('gulp-svg-symbols');
var gulpIf = require('gulp-if');
var rename = require('gulp-rename');
var config = require('../config.js');
var options = {
	plumber: config.plumber(),
	imagemin: config.imagemin(),
	svgSymbols: config.svgSymbols()
};

module.exports = function() {
	return function() {
		return gulp.src([ '**/*.svg', '!**/_*.svg' ], { cwd: 'source/static/icons' })
			.pipe(plumber(options.plumber))
			.pipe(imagemin(options.imagemin.icons))
			.pipe(svgSymbols(options.svgSymbols))
			.pipe(gulpIf(/\.styl$/, gulp.dest('tmp')))
			.pipe(gulpIf(/\.svg$/, rename('icons.svg')))
			.pipe(gulpIf(/\.svg$/, gulp.dest('dest/assets/images')));
	};
};