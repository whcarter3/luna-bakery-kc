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

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
    const { fullname, email, subject, message }: Email = req.body;
    await sendgrid.send({
      to: 'info@lunabakerykc.com',
      from: 'info@lunabakerykc.com',
      subject: `New message from ${subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
        <div style="font-size: 16px;">
        <p>Message:</p>
        <p>${message}</p>
        <br>
        </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error: unknown) {
    // console.error(error);
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message });
  }

  res.status(200).json({ error: '' });
}

export default sendEmail;
