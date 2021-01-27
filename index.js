const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  return res.send("Nodejs with aws");
});
app.get("/home", (req, res) => {
    return res.send("This is homepage");
  });
app.listen(port, () => {
  console.log(`App listen on port 3000`);
});
