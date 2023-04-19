// development.js
username = 'amitkumar';
password = 'sKep0POThHWLf096';

module.exports = {

    databaseUrl: `mongodb+srv://${username}:${password}@fame-club.js3bszr.mongodb.net/?retryWrites=true&w=majority`,
    session: {
      secret: 'mysecret_dev',
    },
  };
  