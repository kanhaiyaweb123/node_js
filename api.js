const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/datareturen', (req, res) => {
  const userValue = req.body;

  res.json({ returenAllPostValue: userValue });});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
