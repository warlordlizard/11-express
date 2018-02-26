'use strict';

const storage = require('../lib/storage.js');
const response = require('../lib/response.js');
const Game = require('../model/game.js');

module.exports = function(router) {
  router.get('/api/game', function (req, res) {
    if (req.url.query.id) {
      storage.fetchItem('game', req.url.query.id)
        .then( game => {
          response.sendJSON(res, 200, game);
        })
        .catch( err => {
          console.error(err);
          response.sendText(res, 404, 'route not found');
        });
      return;
    }

    storage.listItems('game')
      .then( (game) =>{
        res.writeHead(300, {
          'Content-Type': 'application/json',
        });
        res.write('List of Games');

        res.write(JSON.stringify(game) + '\n'); 
        res.end();
      });
  });

  router.delete('/api/game', function (req, res) {
    if (req.url.query.id) {
      storage.deleteItem('game', req.url.query.id)
        .then(() => {
          response.sendText(res, 204, '');
        })
        .catch(err => {
          console.error(err);
          response.sendText(res, 404, 'route not found');
        });
      return;
    }
    response.sendText(res, 400, 'bad request');
  });

  router.post('/api/game', function (req, res) {
    try {
      var game = new Game(req.body.name, req.body.desc, req.body.genre);
      storage.createItem('game', game);
      response.sendJSON(res, 200, game);
    } catch (err) {
      console.error(err);
      response.sendText(res, 400, 'bad request');
    }
  });
};