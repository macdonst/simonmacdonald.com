// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getContacts, validate } from '../models/contacts.mjs'
import arc from '@architect/functions'

/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const contacts = await getContacts()
  if (req.session.problems) {
    let { problems, contact, ...session } = req.session
    return {
      session,
      json: { problems, contacts, contact }
    }
  }

  return {
    json: { contacts }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const session = req.session
  // Validate
  let { problems, contact } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, contact },
      json: { problems, contact },
      location: '/contact'
    }
  }

  console.log(contact)

  await arc.events.publish({
    name: 'send-email',
    payload: contact,
  })

  return {
    location: '/contact'
  }
}
