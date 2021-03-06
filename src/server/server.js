require('dotenv/config');

const express = require('express');

const server = express();

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`BOT is running on port: ${port}.`);
});

module.exports = server;
