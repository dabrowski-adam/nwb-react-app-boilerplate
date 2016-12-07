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
  },
  karma: {
    frameworks: ['mocha', 'chai', 'chai-as-promised'],
    plugins: [
        require('karma-chai-plugins') // Provides chai, chai-as-promised, ...
    ]
  }
}
