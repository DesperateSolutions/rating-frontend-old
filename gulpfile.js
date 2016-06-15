var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

var appPath = './app/js/App.jsx';
var outPath = './app/build/';

function buildScript(file, watch) {
    function rebundle() {
        var stream = bundler.bundle();
        return stream.pipe(source('App.jsx'))
            .pipe(gulp.dest(outPath));
    }

    var bundler = browserify({
        entries: [file],
        extensions: ['.jsx', '.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    bundler.on('update', function() {
        rebundle();
    });

    bundler.on('log', gutil.log);

    if (watch) {
        bundler = watchify(bundler);
    }

    bundler.transform('babelify', {presets: ['es2015', 'react']});

    return rebundle();
}

gulp.task('build', function() {
    return buildScript(appPath, false);
});

gulp.task('watch', function() {
    return buildScript(appPath, true);
});

gulp.task('default', ['build'], function() {
    return buildScript('main.js', true);
});
