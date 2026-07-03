import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
