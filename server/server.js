const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree", "userFour","userFive"] });
});

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
