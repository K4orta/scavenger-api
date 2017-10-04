const { Client } = require('pg')

function createTry(photoUrl, userPhone) {
  const client = new Client()
  client.connect()
  return client.query(`INSERT INTO tries(photo_url, user_phone, created_at) VALUES ($1 ,$2, NOW())`, [
    photoUrl,
    userPhone
  ])
    .then(res => {
      client.end()
    })
}

module.exports = createTry
