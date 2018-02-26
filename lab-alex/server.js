'use strict';

const http = require('http');
const Game = require('./model/game.js');
const Router = require('./lib/router.js');
const gameRouter = require('./route/game-route.js');
const storage = require('./lib/storage.js');
const PORT = process.env.PORT || 3000;
const router = new Router();

gameRouter(router);
const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log(`serve up: ${PORT}`);
});