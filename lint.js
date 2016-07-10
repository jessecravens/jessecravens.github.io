var gulp = require("gulp");
var eslint = require("gulp-eslint");
var cache = require("gulp-cached");
var args = require("yargs").argv;

// lint
// can be passed a 'path' argument to override what it lints
// Examples:
// gulp lint --path=client/app/js/directives/**/*.{js,jsx}
// gulp lint --path=client/app/js/directives/**/*.js
gulp.task("lint", function() {
	var path = args.path || ["./gulp-tasks/**/*.js",
		"./src/**/*.js", "./*.js"];

	return gulp
		.src(path)
		.pipe(cache("linting"))
		.pipe(eslint())
		.pipe(eslint.format());
});
