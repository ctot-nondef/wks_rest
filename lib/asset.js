const fs = require('fs');
const jimp = require('jimp');
const PDFImage = require("pdf-image").PDFImage;

const CONFIG =  require('../config.json');
 
module.exports = {
  makeImgThumb(imgname, dims, qual, thumbname) {
    return new Promise( function(resolve, reject){
      console.log(`attempting to create thumb for ${imgname} in ${CONFIG.assets.thumbs}/${imgname.split('.')[0]}_${thumbname}.jpg`);
      jimp.read(`${CONFIG.assets.dir}/${imgname}`)
      .then( img => {
        if (dims && dims.height && dims.width) img.cover(dims.width, dims.height);
        if (qual) img.quality(qual);
        if (imgname && (dims || qual)) {
          img.write(`${CONFIG.assets.thumbs}/${imgname.split('.')[0]}_${thumbname}.jpg`, () => {
            console.log(`thumb created for ${imgname} in ${CONFIG.assets.thumbs}/${imgname.split('.')[0]}_${thumbname}.jpg`);
            resolve(`${CONFIG.assets.thumbs}/${imgname.split('.')[0]}_${thumbname}.jpg`);
          })
          .catch( err => {
            reject(err);
          });
        }
        else reject(`${CONFIG.assets.thumbs}/${imgname.split('.')[0]}_${thumbname}.jpg`);
      })
      .catch( err => {
        reject(err);
      });
    });
  },
  makePDFThumb(pdfname, page, dims, qual, thumbname) {
    return new Promise( function(resolve, reject) {
      let pdfImage = new PDFImage(`${CONFIG.assets.dir}/${pdfname}`,
        {
          convertOptions: {
            "-resize": `${dims.width}x${dims.height}`,
            "-quality": `${qual}`,
            "-write": `${CONFIG.assets.thumbs}/${pdfname.split('.')[0]}_${thumbname}.jpg`
          }
        }
      );
      pdfImage.convertPage(page)
      .then(function (imagePath) {
        resolve(imagePath);
      })
      .catch( err => {
        console.log(err);
        reject(err);
      });
    });
  },
}
