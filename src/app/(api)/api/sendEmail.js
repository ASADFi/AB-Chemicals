// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log("Fahad Req");
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;


      console.log("fahad req body: ", req.body);
      // Set up the nodemailer transporter with your email server configuration
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      // Compose the email content
      const mailOptions = {
        from: `"Contact Form" <${process.env.MAIL_USER}>`,
        to: 'recipient@example.com', // Replace with the email address where you want to receive messages
        subject: 'New Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the message.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
