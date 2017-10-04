const MessageResponse = require('twilio').twiml.MessagingResponse
const createTry = require('../utils/create-try')

function webhook(req, res) {
  let i = 0;
  while (req.body[`MediaUrl${i}`]) {
    createTry(req.body[`MediaUrl${i}`], req.body.From)
    i += 1
  }
  
  const twiml = new MessageResponse();
  twiml.message(`Message from ${req.body.From}`)
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString());
}

module.exports = webhook