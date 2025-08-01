export async function get () {
  const env = process.env.ARC_ENV
  if (env !== 'staging' && env !== 'production') {
    return {
      session: {},
      location: '/'
    }
  }
  return {
    code: 404
  }
}


export async function post () {
  return {
    session: {},
    location: '/'
  }
}
