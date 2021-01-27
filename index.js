const express = require("express");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  return res.send("Nodejs with aws");
});
app.listen(port, () => {
  console.log(`App listen on port 3000`);
});
