const { Client } = require('pg')

function judgeTry(id, matchId) {
  const client = new Client()
  client.connect()
  return client.query(`UPDATE tries
  SET completed_at = NOW(),
  matched_to = $2
  WHERE id = $1 RETURNING id;`, [
    id,
    matchId
  ])
}

module.exports = judgeTry