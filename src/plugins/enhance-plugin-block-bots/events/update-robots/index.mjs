/* eslint-disable no-undef */
import arc from '@architect/functions'
import data from '@begin/data'
import http from 'http'
import https from 'https'

const handler = arc.events.subscribe(async (event) => {
  const { lastUpdated } = event

  // Get the most up to date robots.txt
  const robotsTxtUrl = new URL('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt')
  const robotsTxt = await getRobotsTxt(robotsTxtUrl)

  // If we succeed update the robots.txt and last updated in our DB
  if (robotsTxt) {
    await data.set([
      {
        table: 'ai-robots-txt',
        key: 'updated',
        lastUpdated,
      }, {
        table: 'ai-robots-txt',
        key: 'agents',
        robotsTxt
      }
    ])
  }

  return
})

function getRobotsTxt (feed) {
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


export { handler }
