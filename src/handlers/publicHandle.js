const fs = require("fs");
const path = require("path");
const serverErrorHandle = require("./serverErorHandle");

const contentType = {
  css: "text/css",
  jpg: "image/jpg",
  png: "image/png",
  js: "text/javascript",
  ico: "image/x-icon",
};

const publicHandle = (res, url) => {
  const extenion = url.split(".")[1];
  const filePath = path.join(__dirname, "..", "..", url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      serverErrorHandle(res);
    } else {
      res.writeHead(200, { "Content-Type": contentType[extenion] });
      res.end(data);
    }
  });
};

module.exports = publicHandle;
