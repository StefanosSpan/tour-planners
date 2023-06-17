const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the POST endpoint for sending emails
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Replace with your SMTP configuration
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'spanoudakis.stf@gmail.com',
      pass: 'nobodies2@',
    },
  });

  // Configure the email options
  const mailOptions = {
    from: 'spanoudakis.stf@gmail.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
