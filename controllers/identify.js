const { Client } = require('pg')
const uuidv4 = require('uuid/v4')

module.exports = (req, res) => {
  if (!req.cookies.device_id) {
    res.cookie('device_id', uuidv4())
    res.json({"status": "ok"})
    return
  }
  res.json({"status": "ok"})
}