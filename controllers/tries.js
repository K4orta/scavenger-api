const { Client } = require('pg')

function get(req, res) {
  const client = new Client()
  client.connect()

  client.query(`SELECT * FROM tries WHERE user_phone = '+${req.query.phone}';`).then(resp => {
    res.json(resp.rows)
    client.end()
  }).catch(err => {
    console.log(err)
    client.end()
  })
}

module.exports = get