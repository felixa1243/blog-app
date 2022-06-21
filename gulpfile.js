const gulp=require('gulp')
const gulpsass=require('gulp-sass')

gulp.task('sass',()=>{
	gulp.src('./*.scss')
	.pipe(sass())
	.pipe(gulp.dest('.styles/style.css'))

})
gulp.task('watch',()=>{
	gulp.watch('./*.scss'),['sass']
})

gulp.task('default',['sass','watch'])
