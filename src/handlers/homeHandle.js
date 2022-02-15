const fs = require("fs");
const path = require("path");
const serverErrorHandle = require("./serverErorHandle");

const homeHandle = (res) => {
  const filePath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      serverErrorHandle(res);
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    }
  });
};

module.exports = homeHandle;
