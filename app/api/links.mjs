// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getLinks, upsertLink, validate } from '../models/links.mjs'
import { checkAuth } from '../lib/checkAuth.mjs'

export const get = [checkAuth, listLinks]

/**
 * @type {EnhanceApiFn}
 */
export async function listLinks (req) {
  const links = await getLinks()
  if (req.session.problems) {
    let { problems, link, ...session } = req.session
    return {
      session,
      json: { problems, links, link }
    }
  }

  return {
    json: { links }
  }
}

export const post = [checkAuth, createLink]

/**
 * @type {EnhanceApiFn}
 */
export async function createLink (req) {
  const session = req.session
  // Validate
  let { problems, link } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, link },
      json: { problems, link },
      location: '/links'
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, link: removed, ...newSession } = session
  try {
    const result = await upsertLink(link)
    return {
      session: newSession,
      json: { link: result },
      location: '/links'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/links'
    }
  }
}
