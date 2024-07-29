const { join } = require('path')

module.exports = {
  set: {
    http () {
      let robotsSrcDir = join(__dirname, 'http', 'get-robots')
      return [
        {
          method: 'get',
          path: '/robots.txt',
          src: robotsSrcDir,
          config: {
            views: false,
          }
        },
      ]
    },
    events () {
      let src = join(__dirname, 'events', 'update-robots')
      return [
        {
          name: 'update-robots',
          src
        }
      ]
    },
    scheduled () {
      let src = join(__dirname, 'scheduled', 'check-robots-txt-feed')
      return [
        {
          name: 'check-robots-txt-feed',
          rate: '1 day',
          src,
        }
      ]
    },
  }
}
