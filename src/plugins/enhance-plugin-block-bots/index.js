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
  }
}
