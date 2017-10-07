const createUser = require('../utils/create-user')
module.exports = (req, res) => {
  console.log(req.body)
  createUser(req.body['name'], req.body['deviceId'])
    .then(user => {
      res.json(user)
    })
}