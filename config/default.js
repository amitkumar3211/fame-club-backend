// default.js

module.exports = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/mydatabase',
    session: {
      secret: process.env.SESSION_SECRET || 'mysecret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    },
  };