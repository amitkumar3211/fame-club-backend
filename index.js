const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());

app.post('/sign-up',[
  // Validate the 'name' field as a string with at least 2 characters
  body('name').isString().isLength({ min: 2 }),

  // Validate the 'email' field as an email address
  body('email').isEmail(),

  // Validate the 'password' field as a string with at least 6 characters
  body('password').isString().isLength({ min: 6 })
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return an error response if there are validation errors
    return res.status(422).json({ errors: errors.array() });
  }
    console.log(req.body);


    res.status(200).send({data: req.body});
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});