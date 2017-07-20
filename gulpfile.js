
//Require_______________________________________//

var gulp = require('gulp'),
    //uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    //cleanCSS = require('gulp-clean-css');
    browserSync = require('browser-sync'),
    reload = browserSync .reload,
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    //rename = require('gulp-rename'),
    nunjucksRender = require('gulp-nunjucks-render'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true }),
    data = require('gulp-data');

//Scripts Tasks_______________________________________//
// Transpiles, compiles, renames and Uglifies TypeScript.

gulp.task('scripts', function(){
  tsProject.src()
  .pipe(tsProject())
  .pipe(concat('main.js'))
  //.pipe(rename({suffix: '.min'}))
  //.pipe(uglify())
  .pipe(gulp.dest('./deploy/assets/js'))
  .pipe(reload({stream:true}));
});

//SCSS Task_______________________________________//
// Compiles SCSS and adds autoprefixer.

gulp.task('sass', function(){
  gulp.src('./site/scss/**/*.scss')
  .pipe(plumber(function (error) {
      console.log(error.message);
      this.emit('end');
    }))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  //.pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./deploy/assets/css'))
  .pipe(reload({stream:true}));
});

//HTML Task_______________________________________//
// Looks for changes in html files in the output folder.

gulp.task('html', function(){
  gulp.src('./deploy/**/*.html')
  .pipe(reload({stream:true}));
});

//NUNJUCKS Task_______________________________________//
// Renders compiles Numjucks files as .html

gulp.task('nunjucks', function() {
  // Gets nunjucks files in pages folder
  return gulp.src('./site/markup/pages/**/*.njk')

  // Snifs out ERRORS and keeps Gulp-Watch from breaking.
  .pipe(plumber(function (error) {
      console.log(error.message);
      this.emit('end');
    }))

  // Adds data from data.json to nunjucks pages
  .pipe(data(function() {
      return require('./site/data.json')
    }))

  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./site/markup/templates']
    }))

  // Renders html files in the output folder
  .pipe(gulp.dest('./deploy'))
  .pipe(reload({stream:true}));
});

//Watch Task_______________________________________//

gulp.task('watch', function(){
  gulp.watch('./site/ts/**/*.ts', ['scripts']);
  gulp.watch('./site/scss/**/*.scss', ['sass']);
  gulp.watch('./site/markup/**', ['nunjucks']);
  gulp.watch('./deploy/**/*.html', ['html']);
});

//browserSync Task_______________________________________//
// Serves the files from given folder to a local server, and live reloads on changes.

gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: "./deploy/"
    }
  });
});

//Default Task_______________________________________//
// Runs all the tasks defined inside the array, uses gulp command to execute.

gulp.task('default', ['scripts', 'sass', 'html', 'nunjucks', 'browser-sync', 'watch']);
