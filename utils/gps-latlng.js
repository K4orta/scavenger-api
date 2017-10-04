
function gpsToLatLng(input) {
  const latTime = input.GPSLatitude
  const lngTime = input.GPSLongitude
  const lat = ConvertDMSToDD(latTime[0], latTime[1], latTime[2], input.GPSLatitudeRef)
  const lng = ConvertDMSToDD(lngTime[0], lngTime[1], lngTime[2], input.GPSLongitudeRef)
  return [ lat, lng ]
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = degrees + minutes / 60 + seconds / (60*60);
  if (direction == "S" || direction == "W") {
      dd = dd * -1;
  }
  return dd;
}

module.exports = gpsToLatLng