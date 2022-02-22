const http = require("http");
require('env2')('.env')
const router = require("./router.js");


const server = http.createServer(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
