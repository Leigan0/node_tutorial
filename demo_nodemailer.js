// The Nodemailer module makes it easy to send emails from your computer.

var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail',
    pass: 'mypassword'
  }
})

var mailOptions = {
  from: 'myemail',
  to: 'altemail',
  subject: 'Sending Email using node.js was easy',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
