
const gulp =  require('gulp')
const sass = require('gulp-sass')
const autoprefixer =  require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

// File path variables
const paths = {
    src: {
        basePath: './src',
        sass: './src/sass/*.scss',
        js: './src/js/**/*.js',
        imgs: './src/img/**/*.+(png|jpg|gif|svg)'
    },
    dist: {
        css: './assets/css/',
        js: './assets/js',
        imgs: './assets/img'
    }
}


// Compile Sass paths into css paths
function styleTask(){
    return gulp.src([
        './src/js/tiny-slider/tiny-slider.css',
        paths.src.sass
    ])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.css))
}

function jsTask(){
    return gulp.src([
            './src/js/tiny-slider/tiny-slider.helper.ie8.js',
            './src/js/tiny-slider/tiny-slider.js',
            paths.src.js
        ])
            .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.dist.js))
}

function watch() {
    gulp.watch([paths.src.sass, paths.src.js], gulp.parallel(styleTask, jsTask));
}


gulp.task('build', gulp.series(styleTask, jsTask));

exports.watch = watch;