const { Client } = require('pg')


function createTry(photoUrl, userPhone) {
  const client = new Client()
  client.connect()
  return client.query(`INSERT INTO tries(photo_url, user_phone, created_at) VALUES ($1 ,$2, NOW()) RETURNING id, photo_url, user_phone`, [
    photoUrl,
    userPhone
  ])
  .then(res => {
    client.end()
    const twl = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_SECRET);
    
    twl.messages
      .create({
        to: `+${process.env.ADMIN_PHONE}`,
        from: `+${process.env.SELF_PHONE}`,
        body: `ID: ${res.rows[0].id}`,
        mediaUrl: res.rows[0].photo_url,
      })
    return res.rows
  })
}

module.exports = createTry
