import arc from '@architect/functions'
import data from '@begin/data'
import { readFileSync } from 'node:fs'

async function get() {
  let robots = await data.get({
    table: 'ai-robots-txt',
    key: 'agents'
  })

  if (!robots) {
    robots = readFileSync('./default-robots.txt', 'utf-8')
  }

  return {
    // cache for 1 day
    headers: { 'Cache-Control': 'public, max-age=86400' },
    text: robots.trim(),
  }
}

export const handler = arc.http(get)
