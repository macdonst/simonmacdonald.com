import { getLinks } from "../models/links.mjs"

export async function get() {
  const links = await getLinks()
  return {
    json: {
      page: {
        title: 'Simon MacDonald',
        description: 'Useful links'
      },
      links
    }
  }
}
