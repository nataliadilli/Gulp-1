const g = require('gulp')
const min = require('gulp-cssmin')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const jscript = require('gulp-uglify')
const image = require('gulp-image')
const stripcoment = require('gulp-strip-comments')
const stripcsscoment = require('gulp-strip-css-comments')
const uglify = require("gulp-uglify-es").default;




function tarefascss(cb) {

    return g.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/font-awesome/css/font-awesome.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './assets/css/style.css',
    ])
        .pipe(concat('libs.css'))
        .pipe(stripcsscoment())
        .pipe(min())
        .pipe(rename({ suffix: '.min' }))
        .pipe(g.dest('./dist/css'))
}

function tarefasjs(cb) {

    return g.src(['./node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './assets/js/custom.js'])
        .pipe(concat('libs.js'))
        .pipe(stripcoment())
        .pipe(jscript())
        .pipe(rename({ suffix: '.min' }))
        .pipe(g.dest('./dist/js'))
}


function tarefasimage(cb) {

    return g.src('./assets/imagensNovas/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(g.dest('./dist/images'))
}

exports.styles = tarefascss
exports.scripts = tarefasjs
exports.images = tarefasimage