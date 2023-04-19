// production.js

module.exports = {
    port: process.env.PORT || 80,
    databaseUrl: process.env.DATABASE_URL,
    session: {
      secret: process.env.SESSION_SECRET,
      cookie: {
        secure: true,
      },
    },
  };
  