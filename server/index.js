const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  res.setHeader("Access-Control-Allow-Origin", "*");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "your-email@gmail.com", // generated ethereal user
      pass: "your-password", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: "igbagboleye@gmail.com", // list of receivers
    subject: "New message from your website", // Subject line
    text: message, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
