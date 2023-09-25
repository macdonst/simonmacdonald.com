import titlesByPath from './lib/titlesByPath.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'
import { dirname, join } from 'node:path'
import url from 'node:url'
import { readFileSync } from 'node:fs'
import getHostname from './lib/getHostname.mjs'

const { linkTag } = getStyles

export default function Head(state) {
  const { req, store } = state
  const { path, session } = req
  const hostname = getHostname()

  if (store.authorized === undefined) {
    store.authorized = session.authorized || false
  }
  if (store.path === undefined) {
    store.path = path
  }
  if (store.author === undefined) {
    store.author = {
      name: 'Simon MacDonald',
      title: 'Human Goodreads',
      githubUsername: 'macdonst',
    }
  }

  if (store.hCard === undefined) {
    let here = dirname(url.fileURLToPath(import.meta.url))
    let hCardPath = join(here, 'api', 'h-card.json')
    store.hCard = JSON.parse(readFileSync(hCardPath, 'utf-8'))
  }

  let description = `Portfolio for ${store.author.name}, ${store.author.title}`
  let image = '/_public/heroes/bg.jpg'

  let extraBlogMeta = []
  if (path.startsWith('/blog')) {
    description = store.post?.frontmatter?.description || description
    image = store.post?.frontmatter?.image || image

    extraBlogMeta.push(`<meta property="article:author" content="Simon MacDonald" />`)

    if (store.post?.frontmatter?.published) {
      let pubDate = new Date(store.post.frontmatter.published)
      pubDate.setHours(13)
      let dateString = pubDate.toISOString().replace('Z', '-0:00')
      extraBlogMeta.push(`<meta property="article:published_time" content="${dateString}" />`)
    }
    if (store.post?.frontmatter?.category) {
      store.post.frontmatter.category.split(',').forEach(item => extraBlogMeta.push(`<meta property="article:tag" content="${item.trim()}">`) )
    }

    store.post
      ? extraBlogMeta.push(`<link rel="canonical" href="${hostname}${req.path}" />`)
      : extraBlogMeta.push('<link rel="alternate" href="/blog/rss" title="Begin — Blog" type="application/rss+xml" />')
  }

  const title = titlesByPath[path] || ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="icon" href="/_public/favicon.svg">
      <title>${store.author.name}: ${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <meta name="description" content="${description}" />
      <meta name="image" content="${hostname}${image}" />
      ${extraBlogMeta.join('\n')}

      <!-- Open Graph -->
      <meta name="og:title" content="Simon MacDonald" />
      <meta name="og:description" content="${description}" />
      <meta name="og:image" content="${hostname}$${image}" />
      <meta name="og:url" content="${hostname}${req.path}" />
      <meta name="og:site_name" content="SimonMacDonald.com" />
      <meta name="og:type" content="website" />

      <meta property="og:title" content="Simon MacDonald" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${hostname}$${image}" />
      <meta property="og:url" content="${hostname}${req.path}" />
      <meta property="og:site_name" content="SimonMacDonald.com" />
      <meta property="og:type" content="website" />

      <link href="https://mastodon.online/@macdonst" rel="me">
      ${linkTag()}

      ${(req.path === '/resume') ? '<link rel="stylesheet" href="/_public/print-resume.css">' : ''}

      <style>
        @font-face {
          font-family: "HK Grotesk";
          font-weight: 300;
          src: url("/_public/fonts/HKGrotesk-Light.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 400;
          src: url("/_public/fonts/HKGrotesk-Regular.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 600;
          src: url("/_public/fonts/HKGrotesk-SemiBold.woff2") format("woff2")
        }

        body {
          color: var(--dark);
          background-color: var(--light);
          text-rendering: optimizeLegibility;
        }

        a {
          text-decoration: underline;
          text-decoration-thickness: 0.0625em;
          text-underline-offset: 0.0625em;
        }
      </style>
    </head>
    <body class='font-sans'>
`
}
