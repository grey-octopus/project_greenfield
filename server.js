const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 7000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
