const { Client } = require('pg')

function createUser(userName, deviceId) {
  const client = new Client()
  client.connect()
  return client.query(`INSERT INTO users(name, device_id) VALUES ($1 ,$2) RETURNING id, name, device_id`, [
    userName,
    deviceId
  ]).then(res => {
      client.end()
      return res.rows[0]
  })
}

module.exports = createUser
