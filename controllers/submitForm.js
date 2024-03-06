const express = require("express");
const router = express.Router();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const htmlContent = `
  New Help Request: \n
  Name: ${firstName} ${lastName} \n
  Email: ${email} \n
  Message: ${message}`;

  const msg = {
    to: "ariun.myagmar@gmail.com",
    from: "ariun.myagmar@gmail.com",
    subject: subject,
    html: `<p><strong>New Help Request:</strong><br/><strong>From:</strong> ${firstName} ${lastName}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong> -m "${message}</p>`,
  };
  
  sgMail
    .send(msg)
    .then(() => {
      res.json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error)
      if(error.response){
        console.error(error.response.body)
      }
      res.status(500).json({ error: 'Error sending email' });
    })
});






module.exports = router;