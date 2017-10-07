const { Client } = require('pg')
class User {
  static create(deviceId, name) {
    
  }
  static findDevice(deviceId) {
    const client = new Client()
    client.connect()
    return client.query(`SELECT * FROM users WHERE device_id = '${deviceId}' LIMIT 1`)
      .then(resp => {
        return resp.rows[0] ? resp.rows[0] : undefined
      })
  }
}

module.exports = User