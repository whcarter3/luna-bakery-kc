import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

interface Email {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

interface MyError extends Error {
  statusCode: number;
  message: string;
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fullname, email, subject, message }: Email = req.body;
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New message from Luna Bakery Website:  ${subject}`,
      html: `
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    await sendgrid.send(msg);
  } catch (error: unknown) {
    console.error(error);
    const myError = error as MyError;
    return res
      .status(myError.statusCode || 500)
      .json({ error: myError.message });
  }

  res.status(200).json({ error: '' });
}

export default sendEmail;
