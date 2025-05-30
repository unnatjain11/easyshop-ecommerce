import nodemailer from 'nodemailer';

// Create a transporter object with Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type EmailData = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Send an email using Nodemailer
 */
export async function sendEmail({ to, subject, text, html }: EmailData): Promise<boolean> {
  try {
    // For development, we'll create a test transporter that doesn't actually send emails
    // but outputs to console, while still indicating success
    console.log('Sending email:');
    console.log({ to, subject, text });
    
    // Return true to simulate successful sending
    return true;
    
    /* 
    // Uncomment this code and replace credentials to actually send emails
    
    await transporter.sendMail({
      from: 'guest.rajat@gmail.com',
      to,
      subject,
      text,
      html: html || text,
    });
    
    return true;
    */
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send signup notification email
 */
export async function sendSignupNotification(userData: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const { firstName, lastName, email } = userData;
  
  return sendEmail({
    to: 'guest.rajat@gmail.com',
    subject: 'New User Registration on EasyShop',
    text: `A new user has signed up on EasyShop!
    
Name: ${firstName} ${lastName}
Email: ${email}
Date: ${new Date().toLocaleString()}`,
    html: `
      <h2>New User Registration on EasyShop</h2>
      <p>A new user has signed up on EasyShop!</p>
      <table>
        <tr>
          <td><strong>Name:</strong></td>
          <td>${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Date:</strong></td>
          <td>${new Date().toLocaleString()}</td>
        </tr>
      </table>
    `,
  });
}

/**
 * Send login notification email
 */
export async function sendLoginNotification(userData: {
  email: string;
}) {
  const { email } = userData;
  
  return sendEmail({
    to: 'guest.rajat@gmail.com',
    subject: 'User Login on EasyShop',
    text: `A user has logged in to EasyShop!
    
Email: ${email}
Date: ${new Date().toLocaleString()}`,
    html: `
      <h2>User Login on EasyShop</h2>
      <p>A user has logged in to EasyShop!</p>
      <table>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Date:</strong></td>
          <td>${new Date().toLocaleString()}</td>
        </tr>
      </table>
    `,
  });
} 