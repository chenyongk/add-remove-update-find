const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const gulpConcat = require("gulp-concat");
const gulpClean = require("gulp-clean-css");
const webserver = require("gulp-webserver");
gulp.task("sass", () => {
    return gulp.src("./src/sass/*.scss")
        .pipe(gulpSass())
        .pipe(gulpClean())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 9999,
            open: true,
            livereload: true,
			proxies:[
				{source:"/api/data",target:"http://localhost:3000/api/data"},
				{source:"/api/dataDel",target:"http://localhost:3000/api/dataDel"},
				{source:"/api/dataUser",target:"http://localhost:3000/api/dataUser"},
				{source:"/api/addUser",target:"http://localhost:3000/api/addUser"},
				{source:"/api/dataUpdate",target:"http://localhost:3000/api/dataUpdate"},
				{source:"/api/search",target:"http://localhost:3000/api/search"}
			]
        }))
})

gulp.task("watchSass", () => {
    gulp.watch("./src/sass/*.scss", gulp.series("sass"))
})
gulp.task("dev",gulp.parallel("server","watchSass"))