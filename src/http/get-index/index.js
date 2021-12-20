const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Simon MacDonald', // ←  Start by adding your name!
    title: 'simonmacdonald.com',
    occupation: 'Head of Developer Experience - Begin',
    location: 'Ottawa, ON',
    bio: 'Coffee Lover and Human Goodreads.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'macdonst',
    linkedin: 'simonmacdonald',
    instagram: 'macdonst',

    /**
     * Layout
     */
    photographer: 'Michael Brooks',
    service: 'Unsplash',
    credit: 'https://michaelbrooks.ca',
    image: arc.static('hero.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
