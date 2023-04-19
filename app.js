const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const apiRoutes = require('./routes/api/users');
// const webRoutes = require('./routes/web/');

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
// app.use('/', webRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
