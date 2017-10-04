const ExifImage = require('exif').ExifImage

function getLocalExif(filePath) {
  return new Promise((resolve, reject) => {
    try {
      new ExifImage({ image : filePath }, function (error, exifData) {
          if (error)
              reject('Error: '+error.message);
          else
              resolve(exifData); // Do something with your data!
      });
    } catch (error) {
        reject('Error: ' + error.message);
    }
  })
}

module.exports = getLocalExif
