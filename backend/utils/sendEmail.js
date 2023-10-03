const nodemailer = require("nodemailer");
const fs= require("fs");
const sendEmail = async (options) => {
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD
    }
});
  const mailOptions = {
    from:process.env.SMTP_MAIL,
    to:options.email ,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;