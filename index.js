const express = require('express');
const app = express();
app.use(express.json());
app.post('/sign-up', (req, res) => {
    console.log(req.body);
    res.status(200).send({data: req.body});
});

app.listen(4000, () => {
  console.log('Server listening on port 3000');
});