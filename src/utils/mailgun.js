const mailgunLoader = require("mailgun-js");
const config = require("../config");

let mailgun = mailgunLoader({
  apiKey: config.mailgun.api_key,
  domain: config.mailgun.domain,
});

const sendEmail = (name, from, subject, content) => {
  let data = {
    to: "brbryant2639@gmail.com",
    from,
    subject: name + " - " + subject,
    text: content,
  };
  return mailgun.messages().send(data);
};

module.exports = { sendEmail };
