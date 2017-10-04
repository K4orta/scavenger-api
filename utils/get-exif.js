const ExifImage = require('exif').ExifImage
const { get } = require('axios')

function getExif(url) {
  get(url, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    try {
      new ExifImage({ image : new Buffer(response.data, 'binary') }, function (error, exifData) {
          if (error)
              console.log('Error: '+error.message);
          else
              console.log(exifData); // Do something with your data!
      });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
  })
}

module.exports = getExif
