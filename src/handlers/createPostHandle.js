const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const serverErrorHandle = require("./serverErorHandle");

const createPostHandle = (req, res) => {
  let allData = "";
  req.on("data", (chunkOfData) => {
    allData += chunkOfData;
  });

  req.on("end", () => {
    const convertedData = querystring.parse(allData);
    const jsonPath = path.join(__dirname, "..", "posts.json");

    fs.readFile(jsonPath, (err, file) => {
      if (err) {
        serverErrorHandle(res);
      } else {
        const obj = JSON.parse(file);
        obj[Date.now()] = convertedData.post;
        fs.writeFile(jsonPath, JSON.stringify(obj), (err) => {
          if (err) {
            serverErrorHandle(res);
          } else {
            res.writeHead(303, { Location: "/" });
            res.end();
          }
        });
      }
    });
  });
};

module.exports = createPostHandle;
