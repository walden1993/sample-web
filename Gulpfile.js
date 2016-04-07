var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
  
// �﷨���
gulp.task('jshint', function () {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
  
// �ϲ��ļ�֮��ѹ������
gulp.task('minify', function (){
     return gulp.src('src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist'));
});
  
// �����ļ��ı仯
gulp.task('watch', function () {
    gulp.watch('src/*.js', ['jshint', 'minify']);
});
  
// ע��ȱʡ����
gulp.task('default', ['jshint', 'minify', 'watch']);

