const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'MAILGUN_API_KEY'});

mg.messages.create(process.env.MAILGUN_DOMAIN, {
	from: "mailgun <truongdv@hybrid-technologies.com.vn>",
	to: ["truongdv@hybrid-technologies.com.vn"],
	subject: "Hello",
	text: "Testing some Mailgun awesomeness!",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error