const express = require("express");

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from HomePage.");
});

app.get("/about", (req, res) => {
  res.send("Hello from AboutPage.");
});
app.get("/users", (req, res) => {
  res.json({
    id: "1",
    name: "sandeep",
  });
});

app.get("/contacts", (req, res) => {
  res.send("Hello from ContactsPage.");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}...`);
});
