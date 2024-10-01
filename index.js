import express from "express";
const app = express();
const port = 3000;

// "/"-home page
app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Hello!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me Here</h1><p>Phone number: +13124 1422 14</p>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
