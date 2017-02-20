var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream,
        inject = require('gulp-inject'),
        injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js'], {read: false}),
        injectOptions = {
            ignorePath: '/public'
        },
        options = {
            bowerJson : require('./bower.json'),
            directory : './public/lib',
            ignorePath : '../../public'
        };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});