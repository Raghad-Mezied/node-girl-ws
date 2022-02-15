const notFoundHandle = (res) => {
  res.writeHead(404);
  res.end("NOT FOUND");
};

module.exports = notFoundHandle;
