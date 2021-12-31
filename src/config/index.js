const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) throw new Error("ENV variables not found!");

module.exports = {
  port: process.env.PORT,
  mailgun: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
