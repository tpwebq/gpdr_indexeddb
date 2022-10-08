const {src,dest,parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

function optimize(){
    return src(["js_gpdr/gpdr__bootstrap.js"])
    .pipe(concat("gpdr.min.js"))
    .pipe(uglify())
    .pipe(dest("out/"));
}

exports.optimize = optimize;
exports.default = parallel([optimize]);