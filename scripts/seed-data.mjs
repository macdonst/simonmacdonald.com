import db from '@begin/data'
async function main() {
  await db.set({
    table: 'links',
    key: 'link1',
    text: 'begin.com: Revolutionary web apps',
    url: 'https://begin.com'
  })

  await db.set({
    table: 'links',
    key: 'link2',
    text: 'enhance.dev: The HTML first full stack web framework',
    url: 'https://enhance.dev'
  })

  await db.set({
    table: 'links',
    key: 'link3',
    text: 'Enhance Movies: Bringing the sizzle',
    url: 'https://enhance-movies.com/'
  })

  await db.set({
    table: 'links',
    key: 'link4',
    text: 'arc.codes: a framework for building and delivering powerful web apps on AWS',
    url: 'https://arc.codes'
  })
}
main()
