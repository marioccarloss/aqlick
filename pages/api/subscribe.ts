import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
    return
  }

  const { email } = req.body

  const msg = {
    to: email,
    from: 'marioccarloss@outlook.com',
    subject: '¡Gracias por suscribirte!',
    text: '¡Bienvenido/a! Gracias por suscribirte a nuestro boletín de noticias.',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Correo enviado con éxito' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error al enviar el correo' })
  }
}
