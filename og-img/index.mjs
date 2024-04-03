import arc from '@architect/functions'
import render from './render.mjs'
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export let handler = arc.http(fn)

async function fn (req) {

  console.log('i got here')
  console.log(req)

  let title = req.params.title
  let data = require("@architect/views/api/posts.json")
  console.log(data)
  // let data = await preflight(req)
  let meta = data.find(e => e.href === `/blog/posts/${ title }`)

  console.log(meta)

  if (!meta) return {
    code: 404,
    html: `Could not find: ${ title }`
  }

  let out = await render({
    title: meta.frontmatter.title,
    link: `https://simonmacdonald.com${ meta.href }`,
    summary: meta.frontmatter.description,
    author: 'Simon MacDonald',
    published:  'Posted on ' + new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(new Date(meta.frontmatter.published)),
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'image/jpeg',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    isBase64Encoded: true,
    body: out.toString('base64')
  }
}
