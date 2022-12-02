/* const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConnection');

router.get('/by-name', async (req, res) => {
  connection.execute(
    'SELECT * FROM `users` WHERE `region` = ? AND `summonerName` = ?',
    [req.query.region, req.query.summonerName],
    (err, result, fields) => {
      if (err) {
        console.error(err);
      }

      if (result.length > 0) {
        res.status(200);
        console.log('Status:', res.statusCode);
        console.log('User retrieved:', result[0]);
        res.send(result[0]);
      } else {
        res.status(404);
        console.log('Status: ' + res.statusCode);
        console.log('Msg: User not found');
        res.send(result[0]);
      }
    }
  );
});

router.post('/new', async (req, res) => {
  connection.query(
    'INSERT INTO `users` SET ?',
    [req.body],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        res.send(err);
      }

      console.log('User created:', req.body);
      res.status(200);
      res.send(req.body);
    }
  );
});

module.exports = router;
 */
