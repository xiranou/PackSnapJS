var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'packsnapjs'
    },
    port: 3000,
    db: 'mongodb://localhost/packsnapjs-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'packsnapjs'
    },
    port: 3000,
    db: 'mongodb://localhost/packsnapjs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'packsnapjs'
    },
    port: 3000,
    db: 'mongodb://localhost/packsnapjs-production'
  }
};

module.exports = config[env];
