const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  return res.send({
    name: "Nguyen Trong Nhan",
    email: "nhannt.se1905@gmail.com",
  });
});
app.get("/home", (req, res) => {
  return res.send("This is homepage");
});
app.listen(port, () => {
  console.log(`App listen on port 3000`);
});
