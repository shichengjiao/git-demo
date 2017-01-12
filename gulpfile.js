var gulp = require('gulp');

gulp.task('copy',function(){
	//console.log('hello world');
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('dist',function(){
	gulp.watch('src/index.html',['copy']);	//监视index.html文件，一旦改变执行copy任务
});