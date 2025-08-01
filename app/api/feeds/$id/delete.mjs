// View documentation at: https://enhance.dev/docs/learn/starter-project/api
import { deleteFeed } from '../../../models/feeds.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  const { problems: removedProblems, feed: removed, ...newSession } = session
  try {
    const feed = await deleteFeed(id)
    return {
      session: newSession,
      json: { feed },
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
