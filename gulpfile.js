var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    cleanCSS        = require('gulp-clean-css'),
    autoprefixer    = require('gulp-autoprefixer'),
    rename          = require("gulp-rename"),
    inject          = require('gulp-inject'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    plumber         = require('gulp-plumber'),
    babel           = require('gulp-babel'),
    htmlmin         = require('gulp-html-minifier'),
    browserify      = require('gulp-browserify'),
    sourcemaps      = require('gulp-sourcemaps');

var projekt = "./src";

// ######################################
// fonts
gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/fonts/'));
});

// ######################################
// IMG
gulp.task('img', function() {
    gulp.src('./src/img/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/img/'));
});

// ######################################
// TS
gulp.task('ts', function() {
    gulp.src('./src/ts/**/*.ts')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/ts/'));
});

// ######################################
// HTML
gulp.task('html', function() {
    gulp.src('./src/html/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/html/'));
});

// ######################################
// PARTIALS
gulp.task('partials', function() {
    gulp.src('./src/partials/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/partials/'));
});

// ######################################
// CONTENT
gulp.task('content', function() {
    gulp.src('./src/content/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/content/'));
});

// ######################################
// SASS RENDER FUNKTION
gulp.task('sass',function(){
    gulp.src(projekt + '/sass/*.sass')
        .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(rename({ suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

// ######################################
// JS RENDER FUNKTION

gulp.task('js',function(){
    gulp.src(projekt + '/js/*.js')
        .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(concat('global.js'))
            .pipe(babel({
                presets: ['es2015'] }))
            .pipe(browserify({
                insertGlobals: true,
                debug: !gulp.env.production }))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

// ######################################
// FILE WATCH

gulp.task('default',function(){
    gulp.watch(['./src/img/*.*'],['img']);
    gulp.watch(['./src/ts/**/*.ts'],['ts']);
    gulp.watch(['./src/sass/*.sass'],['sass']);
    gulp.watch(['./src/html/*.html'],['html']);
    gulp.watch(['./src/partials/*.html'],['partials']);
    gulp.watch(['./src/content/*.html'],['content']);
    gulp.watch(['./src/js/*.js'],['js']);
    gulp.watch(['./src/fonts/*.*'],['fonts']);
});

gulp.task('build',function(){
    gulp.start(['img','ts','sass','partials','content','js','html','fonts']);
});
