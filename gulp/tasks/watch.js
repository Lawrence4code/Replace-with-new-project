var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload('./app/index.html');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function () {
    'use strict';
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});