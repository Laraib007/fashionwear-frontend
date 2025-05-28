// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var nodemailer = require('nodemailer');

export default function handler(req, res) {
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mylaptop2334@gmail.com',
    pass: 'tqpzpwpkfmfwqdcg'
  }
});

var mailOptions = {
  from: 'mylaptop2334@gmail.com',
  to: 'lrbkhan02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
