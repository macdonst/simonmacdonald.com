// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getFeed, upsertFeed, validate } from '../../models/feeds.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  if (req.session.problems) {
    const { problems, feed, ...session } = req.session
    return {
      session,
      json: { problems, feed }
    }
  }

  const id = req.pathParameters?.id
  const result = await getFeed(id)
  return {
    json: { feed: result }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  const { problems, feed } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, feed },
      json: { problems, feed },
      location: `/feeds/${feed.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  const { problems: removedProblems, feed: removed, ...newSession } = session
  try {
    const result = await upsertFeed({ key: id, ...feed })
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
