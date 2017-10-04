const getExif = require('../utils/local-exif')
const gpsToLatLng = require('../utils/gps-latlng')
module.exports = (req, res) => {
  getExif(req.file.path)
  .then(resp => {
    const [ lat, lng ] = gpsToLatLng(resp.gps)
    res.json({
      lat,
      lng
    })
  })
}
