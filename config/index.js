// index.js

// const defaultConfig = require('./default');
// const developmentConfig = require('./development');
// const productionConfig = require('./production');
// const testConfig = require('./test');

// const env = process.env.NODE_ENV || 'development';

// function getConfig() {
//   switch (env) {
//     case 'development':
//       return Object.assign({}, defaultConfig, developmentConfig);
//     case 'production':
//       return Object.assign({}, defaultConfig, productionConfig);
//     case 'test':
//       return Object.assign({}, defaultConfig, testConfig);
//     default:
//       throw new Error(`Unknown environment: ${env}`);
//   }
// }
const mongoose = require('mongoose');
username = 'amitkumar';
password = 'sKep0POThHWLf096';
const uri = `mongodb+srv://${username}:${password}@fame-club.js3bszr.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: false,
//     deprecationErrors: true,
//   }
// });

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

  serverSelectionTimeoutMS: 5000, // how long to wait before timing out a connection attempt
  socketTimeoutMS: 45000, // how long to wait before timing out a socket connection
  connectTimeoutMS: 5000 // how long to wait before timing out a connection attempt
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error(err);
});


// module.exports = client;
