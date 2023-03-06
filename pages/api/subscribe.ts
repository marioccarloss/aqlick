import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface SubscribeRequestBody {
  email: string;
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email }: SubscribeRequestBody = req.body

  if (!email) {
    return res.status(400).json({ error: 'Missing email' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: process.env.SENDGRID_SENDER_EMAIL,
      pass: process.env.SENDGRID_API_KEY
    }
  })

  const info = await transporter.sendMail({
    from: process.env.SENDGRID_SENDER_EMAIL,
    to: email,
    subject: '¡Gracias por suscribirte!',
    text: 'Gracias por suscribirte a nuestro boletín. Recibirás noticias y actualizaciones sobre nuestra empresa pronto.'
  })

  console.log(`Email sent: ${info.messageId}`)

  return res.status(200).json({ message: 'Subscription successful' })
}
