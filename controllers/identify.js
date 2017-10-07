const { Client } = require('pg')
const uuidv4 = require('uuid/v4')
const User = require('../models/user')

module.exports = (req, res) => {
  if (!req.cookies.device_id) {
    User.findDevice('req.cookies.device_id')
    res.cookie('device_id', uuidv4(), { domain: 'localhost', expires: new Date(Date.now() + 9000000) })
    res.json({"status": "ok?"})
    return
  }
  User.findDevice(req.cookies.device_id)
  res.json({"status": "ok"})
}