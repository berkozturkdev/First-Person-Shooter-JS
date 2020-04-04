
const { task, src, watch, series, dest } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

task('bundle-libs', function () {
    return src(
        [
            "libs/three.js",
            "libs/jquery-1.9.0.js",
            "libs/stats.js",
            "libs/dat.gui.js",
            "libs/PointerLockControls.js",
            "libs/OBJLoader.js",
            "libs/MTLLoader.js",
            "libs/physi.js",
            "libs/howler.js",
        ])
        .pipe(concat('libs.bundle.js'))
        .pipe(minify({
            ext: {
                src: '',
                min: '.min.js'
            },
        }))
        .pipe(dest('dist'));
});

task('bundle-src', function () {
    return src(
        [
            "src/Map.js",
            "src/Enemies.js",
            "src/Skybox.js",
            "src/Crosshair.js",
            "src/avatar.js",
            "src/Bullets.js",
            "src/TheScene.js",
            "src/script.js",
        ])
        .pipe(concat('src.bundle.js'))
        .pipe(minify({
            ext: {
                src: '',
                min: '.min.js'
            },
        }))
        .pipe(dest('dist'));
});

task('watch-src', function () {
    console.log("I am watching for you baby <3");
    watch(['src/*.js', 'index.html'], series('bundle-src'));
});

exports.default = series('bundle-libs', 'bundle-src', 'watch-src');
