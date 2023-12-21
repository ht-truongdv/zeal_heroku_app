const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: "6eb83d4a6b328d348f46a331d680590d-5e3f36f5-907bf1e7"}); //process.env.KEY_MAILGUN

sendMail = function (email_Config) {
    const data = {
        "from": email_Config.sender,
        "to": email_Config.receiver,
        "subject": email_Config.subject,
		"html" : email_Config.html
    };
 
	mg.messages.create("sandboxbcbaed8e264c4099a494ec5fb10922c8.mailgun.org", data) //process.env.ORG_MAILGUN
	.then(msg => console.log(msg)) 	// logs response data
	.catch(err => console.log(err)); // logs any error
}
module.exports = sendMail;