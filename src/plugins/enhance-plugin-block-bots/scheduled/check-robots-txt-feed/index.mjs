/* eslint-disable no-undef */
import arc from '@architect/functions'
import http from 'http'
import https from 'https'
import { parseStringPromise } from 'xml2js'
import data from '@begin/data'

export async function handler () {
  // check the release feed from https://github.com/ai-robots-txt/ai.robots.txt
  const updated = await getFeedUpdated()

  // get the last time we checked
  let result = await data.get({
    table: 'ai-robots-txt',
    key: 'updated',
  })

  let lastUpdated = result?.lastUpdated || ''

  // If there is a new release request the updated robots.txt
  if (updated !== lastUpdated) {
    await arc.events.publish({
      name: 'update-robots',
      payload: {
        lastUpdated: updated,
      },
    })

  }

  return
}

async function getFeedUpdated () {
  const feed = new URL('https://github.com/ai-robots-txt/ai.robots.txt/releases.atom')
  const response = await getFeed(feed)
  const result = await parseStringPromise(response)
  const updated = result?.feed?.updated[0] || ''
  return updated
}

function getFeed (feed) {
  const client = feed.protocol === 'http:' ? http : https
  return new Promise((resolve, reject) => {
    const req = client.request({ hostname: feed.host,
      port: feed.port,
      path: feed.pathname,
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' } }, (res) => {
      let responseBody = ''
      res.on('data', (chunk) => {
        responseBody += chunk
      })
      res.on('end', () => {
        resolve(responseBody)
      })
    })
    req.on('error', (err) => {
      reject(err)
    })
    req.end()
  })
}
