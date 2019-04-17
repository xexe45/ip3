const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    gulp.src('assets/scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['assets/scss']
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', ['sass'], () => {
    gulp.watch(['assets/scss/*.scss'], ['sass']);
});