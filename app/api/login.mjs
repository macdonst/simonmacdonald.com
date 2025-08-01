export async function post (req) {
  const authorized = req.body.password === process.env.SECRET_PASSWORD

  return {
    location: '/',
    session: { authorized }
  }
}
