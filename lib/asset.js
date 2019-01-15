const fs = require('fs');
const jimp = require('jimp');
const PDFImage = require("pdf-image").PDFImage;

const CONFIG =  require('../config.json');

module.exports = {
  makeImgThumb(path, dims, qual, name) {
    return new Promise( function(resolve, reject){
      console.log(`attempting to create thumb for ${path} in ${path.split('.')[0]}_${name}.jpg`);
      jimp.read(path)
      .then( img => {
        if (dims && dims.height && dims.width) img.cover(dims.width, dims.height);
        if (qual) img.quality(qual);
        if (path && (dims || qual)) {
          img.write(`${path.split('.')[0]}_${name}.jpg`);
          console.log(`thumb created for ${path} in ${path.split('.')[0]}_${name}.jpg`);
          resolve(path);
        }
        else reject(path);
      })
      .catch( err => {
        reject(err);
      });
    });
  },
  makePDFThumb(path, page) {
    return new Promise( function(resolve, reject) {
      let pdfImage = new PDFImage(path);
      pdfImage.convertPage(page)
      .then(function (imagePath) {
          resolve(imagePath);
      })
      .catch( err => {
        reject(err);
      });
    });
  },
}
