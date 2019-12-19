const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 7000;
=======
const PORT = 80;
>>>>>>> f2c3d5ea371a0e81474e56691d86dfb686cf4449

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./dist")));

<<<<<<< HEAD
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
=======
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
>>>>>>> f2c3d5ea371a0e81474e56691d86dfb686cf4449
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
