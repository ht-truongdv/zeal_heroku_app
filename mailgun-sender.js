const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '037bcf051e34d5cd8735057d4ee11e2c-07f37fca-4152ab09'});

mg.messages.create('sandboxfcce36de2957458399fc1225fbaa65e0.mailgun.org', {
	from: "mailgun <truongdv@hybrid-technologies.com.vn>",
	to: ["truongdv@hybrid-technologies.com.vn"],
	subject: "Hello",
	text: "Testing some Mailgun awesomeness!",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error