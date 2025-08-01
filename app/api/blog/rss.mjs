import { readFileSync } from 'node:fs'
import path from 'node:path'
import url from 'node:url'

export async function get(req) {
  const here = path.dirname(url.fileURLToPath(import.meta.url))

  const acceptEncoding = (req.headers?.['accept-encoding'] ||
                        req.headers?.['Accept-Encoding'])
  const returnCompressed = acceptEncoding?.includes('br')

  const resp = {
    statusCode: 200,
    headers: {
      'content-type': 'application/rss+xml; charset=UTF-8',
    },
  }

  if (returnCompressed) {
    const postsFilePath = path.join(here, '..', 'rss.br')
    resp.body = readFileSync(postsFilePath, 'utf-8')
    resp.isBase64Encoded = true
    resp.headers['content-encoding'] = 'br'
  } else {
    const postsFilePath = path.join(here, '..', 'rss.xml')
    resp.body = readFileSync(postsFilePath, 'utf-8')
  }

  return resp
}
