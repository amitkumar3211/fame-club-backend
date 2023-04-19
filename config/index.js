// index.js

const defaultConfig = require('./default');
const developmentConfig = require('./development');
const productionConfig = require('./production');
const testConfig = require('./test');

const env = process.env.NODE_ENV || 'development';

function getConfig() {
  switch (env) {
    case 'development':
      return Object.assign({}, defaultConfig, developmentConfig);
    case 'production':
      return Object.assign({}, defaultConfig, productionConfig);
    case 'test':
      return Object.assign({}, defaultConfig, testConfig);
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

module.exports = getConfig();
