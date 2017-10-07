const MessageResponse = require('twilio').twiml.MessagingResponse
const createTry = require('../utils/create-try')
const judgeTry = require('../utils/judge-try')

function webhook(req, res) {
  let i = 0;
  if (req.body.Body && req.body.Body.toLowerCase().replace(/\./g, '') === 'start') {
    const twiml = new MessageResponse();
    twiml.message(`Welcome to Katie's 30th Birthday scavenger hunt! Here's your list of items to find: https://katie30.fun?from=${req.body.From.replace('+', '')}`)
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString());
    return
  }

  if (req.body.Body && req.body.Body.match(/^judge/i)) {
    const sp = req.body.Body.trim().split(' ')
    judgeTry(sp[1], sp[2])
    const twiml = new MessageResponse();
    twiml.message(`Done`)
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString());
    return
  }

  while (req.body[`MediaUrl${i}`]) {
    createTry(req.body[`MediaUrl${i}`], req.body.From)
    i += 1
  }
  
  const twiml = new MessageResponse();
  twiml.message(`Great, keep hunting for more!`)
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString());
}

module.exports = webhook