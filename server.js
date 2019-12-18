const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 80;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
