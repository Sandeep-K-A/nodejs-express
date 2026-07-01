const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.end("Hello from server.");
});

server.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
