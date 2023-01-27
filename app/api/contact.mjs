// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getContacts, upsertContact, validate } from '../models/contacts.mjs'


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

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, contact: removed, ...newSession } = session
  try {
    const result = await upsertContact(contact)
    return {
      session: newSession,
      json: { contact: result },
      location: '/contacts'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/contact'
    }
  }
}
