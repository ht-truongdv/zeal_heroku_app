const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_KEY});

sendMail = function (email_Config) {
    const data = {
        "from": email_Config.sender,
        "to": email_Config.receiver,
        "subject": email_Config.subject,
		"html" : email_Config.text
    };
 
	mg.messages.create(process.env.MAILGUN_ORG, data)
	.then(msg => console.log(msg)) 	// logs response data
	.catch(err => console.log(err)); // logs any error
}
module.exports = sendMail;