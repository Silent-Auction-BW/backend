require("dotenv").config()
const server = require("./api/server.js");

// const PORT = process.env.PORT;

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API!!",
  });
});
// server.listen(PORT, () => {
//   console.log(`\n** Server listening on port ${PORT} **\n`);
// });

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
