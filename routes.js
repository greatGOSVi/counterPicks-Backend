/* const express = require('express');
const routes = express.Router();

routes.get('/summoner-db-info', async (req, res) => {
  connection.execute(
    'SELECT * FROM `users` WHERE `region` = ? AND `summonerName` = ?',
    [req.query.region, req.query.summonerName],
    (err, result, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = routes;
 */
