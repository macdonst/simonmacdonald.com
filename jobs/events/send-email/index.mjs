import arc from '@architect/functions'
import nodemailer from 'nodemailer'
import { OAuth2Client } from 'google-auth-library'

const authenticate = async function ({
  clientId,
  clientSecret,
  refresh_token
}) {
  const oauth2Client = new OAuth2Client(
    clientId,
    clientSecret,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({ refresh_token })

  const { Authorization } = await oauth2Client.getRequestHeaders()
  const accessToken =
    Authorization?.split(' ')[0] === 'Bearer'
      ? Authorization.split(' ')[1]
      : null

  return { accessToken, oauth2Client }
}

export const handler = arc.events.subscribe(sendEmail)

async function sendEmail({ first_name, last_name, email, subject, message }) {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refresh_token = process.env.GOOGLE_REFRESH_TOKEN
  const mailUser = process.env.MAIL_USER

  const { accessToken } = await authenticate({
    clientId,
    clientSecret,
    refresh_token
  })
  console.log('got access token', accessToken)

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: mailUser,
      clientId,
      clientSecret,
      refreshToken: refresh_token,
      accessToken: accessToken
    }
  })
  console.log('created nodemailer')

  const sendResponse = await smtpTransport.sendMail({
    from: mailUser,
    to: mailUser,
    replyTo: email,
    subject: subject,
    html: `${first_name} ${last_name} ${message}`,
    generateTextFromHTML: true
  })
  console.log('sent', sendResponse)
  await smtpTransport.close()
}
