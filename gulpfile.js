// including plugins

var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gulp_rename = require('gulp-rename')
var gulp_uglify = require('gulp-uglify')
var path = require('path')

gulp.task('css-main', function(){
	return gulp.src(
            [
                './public/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
                './public/css/main.css',
                './public/css/animate.css'
            ]
	    )
	    .pipe(minifyCSS())
	    .pipe(autoprefixer('last 2 version', 'safari t', 'ie 8', 'ie 9'))
	    .pipe(gp_concat('style.min.css'))
	    .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
	return gulp.src(
            ['./public/fonts/**']
		)
	    .pipe(gulp.dest('./public/dist/fonts/'))
})

gulp.task('style', ['css-main', 'copy-fonts'], function(){})