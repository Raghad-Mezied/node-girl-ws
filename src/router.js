const createPostHandle = require("./handlers/createPostHandle");
const getPostsHandle = require("./handlers/getPostsHandle");
const homeHandle = require("./handlers/homeHandle");
const notFoundHandle = require("./handlers/notFoundHandle");
const publicHandle = require("./handlers/publicHandle");

const router = (req, res) => {
  const url = req.url;

  if (url === "/") {
    homeHandle(res);
  } else if (url.includes("public")) {
    publicHandle(res, url);
  } else if (url === "/create-post") {
    if (req.method === "POST") {
      createPostHandle(req, res);
    } else {
      notFoundHandle(res);
    }
  } else if (url === "/posts") {
    getPostsHandle(res);
  } else {
    notFoundHandle(res);
  }
};

module.exports = router;
