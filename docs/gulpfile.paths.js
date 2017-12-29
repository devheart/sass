/**
 * Define paths for gulpfile.
 */

let fileGlobs = {
  images: '**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)',
  sass: '**/*.scss'
};

let src = {};
src.baseDir = 'src/';
src.imagesDir = src.baseDir + 'img/';
src.stylesDir = src.baseDir + 'styles/';
src.sassFilesGlob = src.stylesDir + fileGlobs.sass;
src.imageFilesGlob = src.imagesDir + fileGlobs.images;

let dist = {};
dist.baseDir = '';
dist.stylesDir = dist.baseDir + 'assets/css/';
dist.imagesDir = dist.baseDir + 'assets/img/';
dist.includesDir = dist.baseDir + '_includes/';

dist.imageFilesGlob = dist.imagesDir + fileGlobs.images;

// All
let paths = {
  src,
  dist
};

module.exports = paths;
