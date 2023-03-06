import { NextApiRequest, NextApiResponse } from 'next'
import { mailOptions, transporter } from '../../config/nodemailer'

interface ContactMessageFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_MESSAGE_FIELDS: Record<keyof ContactMessageFields, string> = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message'
}

const generateEmailContent = (data: ContactMessageFields) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key as keyof ContactMessageFields]}: \n${val} \n \n`),
    ''
  )

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<p align="left"><b>${CONTACT_MESSAGE_FIELDS[key as keyof ContactMessageFields]}</b> <span>${val}</span></p>`)
  }, '')

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: #f1f5f7;" bgcolor="#F1F5F7">
        <div
          style="
            color: rgba(4, 49, 43, 1);
            font-family: Helvetica, 'iA Writer Original', 'Maison Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            font-size: 16px;
            font-weight: 400;
            border-radius: 4px;
            line-height: 24px;
          "
        >
          <div style="border-bottom: 1px solid rgba(15, 38, 35, 0.1); padding: 24px; display: flex;">
            <div style="width: 40%;">
              <img
                src="https://i.ibb.co/CnCdF5y/logo.png"
                height="32"
                width="116"
                class="CToWUd"
                data-bit="iit"
              />
            </div>
            <div style="width: 60%; font-weight: 500; text-align: end; padding: 6px 0;"></div>
          </div>
          <div style="padding: 24px;">
            <div
              style="color: #202121; font-family: Helvetica, 'Maison Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 14px; font-weight: 400; line-height: 22px; text-align: center;"
            ></div>
            <div style="font-weight: 700; font-size: 24px; line-height: 26px; text-align: center; margin-bottom: 24px;">Gracias por suscribirte!</div>
            <div style="background-color: #f7fafa; border-radius: 8px; padding: 24px; text-align: center; margin-bottom: 24px;">
              <div style="margin-bottom: 8px;">${htmlData}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; success?: boolean }>
) => {
  if (req.method === 'POST') {
    const data = req.body

    if (!data) {
      return res.status(400).send({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject
      })

      return res.status(200).json({ success: true })
    } catch (err) {
      console.log(err)
      return res.status(400).json({ message: (err as Error).message })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}

export default handler
