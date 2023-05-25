const http = require("node:http");
const testModule = require('./testModule');
const faker = require("faker");

const randomName = faker.name.firstName();

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (url === '/users') {
    res.end("hello user")
  } else {
    res.end(randomName);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
