export default function getHostname() {
  if ( process.env.SITE_URL ) {
    return process.env.SITE_URL
  }
  return 'http://localhost:3333'
}
