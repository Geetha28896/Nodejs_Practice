const nodemailer=require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'geethabhuvi28896@gmail.com',
      pass: '9025449071'
    }
  });
  
  var mailOptions = {
    from: 'geethabhuvi28896@gmail.com',
    to: 'geethabts08.sightspectrum@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Welcome to Quinnox!!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });