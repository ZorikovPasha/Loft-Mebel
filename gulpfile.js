var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin');


// сбор css фалов библиотек в один файл 

gulp.task('cssLibsMinify', function() {
  return gulp.src([
    // 'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
    // 'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
    'node_modules/rateyo/lib/cjs/rateyo.css',
    // 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    // 'node_modules/select2/dist/css/select2.min.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
});

// сбор js фалов библиотек в один файл

gulp.task('jsLibsMinify', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
    // 'node_modules/mixitup/dist/mixitup.min.js',
    // 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    // 'node_modules/inputmask/dist/jquery.inputmask.min.js',
    // 'node_modules/dotdotdot-js/dist/dotdotdot.js',
    // 'node_modules/wowjs/dist/wow.min.js',
    // 'node_modules/select2/dist/js/select2.min.js'
    'node_modules/jquery-validation/dist/jquery.validate.min.js'

  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});



// задача перезгрузки страницы

gulp.task('browsersync', function() {
  browserSync.init({
      server: {
          baseDir: "dist/"
      }
  });
});

// конвертация scss файлов в css с их сжатием в итоговую папку и перезагрузкой страницы

gulp.task('sassConvert', function() {
  return gulp.src('#src/scss/style.scss')
      .pipe(sass( {outputStyle: "compressed"} ))
      .pipe(rename({suffix: ".min"}))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
      }))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload( {stream: true} ))
});

// обновление html и передача его в папку итоговую

gulp.task('refreshHtml', function() {
  return gulp.src('dist/*.html')
    .pipe(browserSync.reload( {stream: true} ))
});

// обновление? js файла, его сжатие и передача его в папку проекта 

gulp.task('refreshJs', function() {
  return gulp.src('#src/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload( {stream: true} ))
});


gulp.task('imageMin', function() {
  return gulp.src('#src/images/**/*')
      .pipe(imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 3
      }))
      .pipe(gulp.dest('dist/images'))
      .pipe(browserSync.reload( {stream: true} ))
})

// Перенос файлов шрифтов

gulp.task('carryFonts', function() {
  return gulp.src('#src/fonts/*')
      .pipe(gulp.dest('dist/fonts'))
      .pipe(browserSync.reload( {stream: true} ))
})

// эта задача - следит за изменениями в файлах style.scss, .html, .js и одновременно обновляет страницу

gulp.task('watch', function() {
  gulp.watch('#src/scss/*.scss', gulp.parallel('sassConvert'));
  gulp.watch('dist/*.html', gulp.parallel('refreshHtml'));
  gulp.watch('#src/js/*.js', gulp.parallel('refreshJs'));
  gulp.watch('#src/images/**/*', gulp.parallel('imageMin'));
  gulp.watch('#src/fonts/*', gulp.parallel('carryFonts'));
})

gulp.task('minifyAllLibs', gulp.parallel('cssLibsMinify', 'jsLibsMinify'))

gulp.task('default', gulp.parallel('sassConvert', 'imageMin', 'carryFonts', 'watch', 'browsersync'));