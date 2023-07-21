"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

const transport = nodemailer.createTransport({
  service:"Gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
    // Aminetaamine931@...
  }
});

module.exports.sendConfirmationMailer = (email, token) => {
  const link1 = `http://localhost:5173/client/confirm/${token}`;
  const mailOptions = {
    from: process.env.SOURCE_MAIL,
    to: email,
    subject: 'Confirmation account',
    text: `To confir your account, click on the following link: ${link1}`,
  };

  return transport
    .sendMail(mailOptions)
    .then((info) => {
      console.log('Message sent: %s', info.messageId);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.sendResetMailer = (email,token) => {
  const link = `http://localhost:5173/reset/${token}`;
  const mailOptions = {
    from: process.env.SOURCE_MAIL,
    to: email,
    subject: 'Password Reset',
    text: `To reset your password, click on the following link: ${link}`,
  };

  return transport
    .sendMail(mailOptions)
    .then((info) => {
      console.log('Message sent: %s', info.messageId);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.sendContactMailer = (email,subject) => {

  const mailOptions = {
    from: email ,
    to: process.env.SOURCE_MAIL,
    subject: 'Contact mail',
    text: `mail:${email}, subjecct:${subject} `,
  };

  return transport
    .sendMail(mailOptions)
    .then((info) => {
      console.log('Message sent: %s', info.messageId);
    })
    .catch((err) => {
      console.log(err);
    });
};