import jimp from 'jimp'
import path from 'node:path'
import url from 'node:url'

export default async function render ({title, link, summary, author, published }) {

  const dir = path.dirname(url.fileURLToPath(import.meta.url));
  console.log(dir)
  const base = path.join(dir, 'og-image.jpg')
  const img = await jimp.read(base)
  const sansbold = await jimp.loadFont(path.join(dir, `HKGrotesk-72.fnt`))
  const sans = await jimp.loadFont(path.join(dir, `HKGrotesk-Regular-32.fnt`))
  const sansmol = await jimp.loadFont(path.join(dir, `HKGrotesk-Regular-16.fnt`))

  // write the title
  img.print(sansbold, 60, 60, title)

  // draw the summary; maybe doing a cheesy line wrap
  let tokens = summary.split(/\s+/)
  let max = 10
  let y = 180

  if (tokens.length > max) {
    let lines = []
    for (let i = 0; i < tokens.length; i += max) {
      lines.push(tokens.slice(i, i + max))
    }
    for (let line of lines) {
      img.print(sans, 60, y, line.join(' '))
      y += 32
    }
  }
  else {
    img.print(sans, 60, y, summary)
  }

  // draw the footer stuff
  img.print(sansbold, 320, 385, author)
  img.print(sansmol, 320, 470, published)
  img.print(sansmol, 320, 490, link)

  return img.getBufferAsync(jimp.MIME_JPEG)
}
