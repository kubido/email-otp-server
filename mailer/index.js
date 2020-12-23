const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_API_DOMAIN
});

async function send(recipient, subject, text) {
  const data = {
    from: 'Rifki Fauzi <rifki@bukawa.xyz>',
    to: recipient,
    subject,
    text
  }
  mg.messages().send(data)
    .then(resp => console.log('---1', mg))
    .catch(error => console.log('---2', mg, error))
  // .then(res => console.log(res))
  // .catch(err => console.log(err))

}

module.exports = {
  send
}


