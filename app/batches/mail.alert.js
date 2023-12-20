const sendMail = require("../services/mailgun-sender");
const mailTemp = require("../templates/email-template.json");

const mailAlert = () =>{
  //gia lap data trong controller, return ve json
  //loop record => lay email va add vao reciever[]

  let template = "templateB";
  let emailConfig = {
    sender: "mailgun <truongdv@hybrid-technologies.com.vn>",
    receiver: ["namnn@hybrid-technologies.com.vn"],
    subject: new Date() + mailTemp[template].Subject,
    html: mailTemp[template].Body,
  };
  sendMail(emailConfig);
}
module.exports = mailAlert;
