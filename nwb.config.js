module.exports = {
  type: 'react-app',
  babel: {
      cherryPick: 'ramda'
  },
  webpack: {
      loaders: {
          graphics: {
              limit: 10000
          }
      },
      aliases: {
          'assets': path.resolve('src/assets'),
          'src': path.resolve('src')
      },
      compat: {
          moment: {
              locales: ['en']
          }
      }
  }
}
