const path = require("path");
const fs = require("fs");
const serverErrorHandle = require("./serverErorHandle");

const getPostsHandle = (res) => {
  const filePath = path.join(__dirname, "..", "posts.json");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      serverErrorHandle();
    } else {
      res.end(data);
    }
  });
};

module.exports = getPostsHandle;
