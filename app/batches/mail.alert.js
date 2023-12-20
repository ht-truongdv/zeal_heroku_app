const sendMail = require("../services/mailgun-sender");
const mailTemp = require("../services/email-template.json");

const mailAlert = () =>{
  let template = "templateA";

  let emailConfig = {
  sender: process.env.MAILGUN_SENDER,
  receiver: [process.env.MAILGUN_RECIEVER],
  subject: new Date() + mailTemp[template].Subject,
  text: mailTemp[template].Body,
  };
  sendMail(emailConfig);
}
module.exports = mailAlert;
