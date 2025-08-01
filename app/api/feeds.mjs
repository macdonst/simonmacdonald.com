// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getFeeds, upsertFeed, validate } from '../models/feeds.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const feeds = await getFeeds()
  if (req.session.problems) {
    const { problems, feed, ...session } = req.session
    return {
      session,
      json: { problems, feeds, feed }
    }
  }

  return {
    json: { feeds }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const session = req.session
  // Validate
  const { problems, feed } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, feed },
      json: { problems, feed },
      location: '/feeds'
    }
  }

  // eslint-disable-next-line no-unused-vars
  const { problems: removedProblems, feed: removed, ...newSession } = session
  try {
    const result = await upsertFeed(feed)
    return {
      session: newSession,
      json: { feed: result },
      location: '/feeds'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/feeds'
    }
  }
}
