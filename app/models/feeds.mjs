import data from '@begin/data'
import { validator } from '@begin/validator'
import { Feed } from './schemas/feed.mjs'

const deleteFeed = async function (key) {
  await data.destroy({ table: 'feeds', key })
  return { key }
}

const upsertFeed = async function (feed) {
  return data.set({ table: 'feeds', ...feed })
}

const getFeed = async function (key) {
  return data.get({ table: 'feeds', key })
}

const getFeeds = async function () {
  const databasePageResults = await data.page({
    table: 'feeds',
    limit: 25
  })

  let feeds = []
  for await (let databasePageResult of databasePageResults) {
    for (let feed of databasePageResult) {
      delete feed.table
      feeds.push(feed)
    }
  }

  return feeds
}

const validate = {
  shared (req) {
    return validator(req, Feed)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, feed: data } : { feed: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, feed: data } : { feed: data }
  }
}

export {
  deleteFeed,
  getFeed,
  getFeeds,
  upsertFeed,
  validate
}
