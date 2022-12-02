require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const api = express();
const app = require('./controllers/Router');
const createTimeStamp = require('./models/ApiTimestamp');

api.set('port', process.env.PORT);
api.use(cors());
api.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
api.use(bodyParser.json());

api.get('/summoner-info', async (req, res) => {
  const summInfoResponse = await fetch(
    `https://${req.query.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.sumName}?api_key=${process.env.RIOT_API_KEY}`
  );
  const summInfo = await summInfoResponse.json();
  res.send(summInfo);
});

api.get('/summoner-league', async (req, res) => {
  const summLeagueResponse = await fetch(
    `https://${req.query.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.sumID}?api_key=${process.env.RIOT_API_KEY}`
  );
  const summLeague = await summLeagueResponse.json();
  res.status(200).send(summLeague);
});

api.get('/match-list', async (req, res) => {
  const matchListResponse = await fetch(
    `https://${req.query.region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids?type=${req.query.matchType}&start=0&count=${req.query.count}&api_key=${process.env.RIOT_API_KEY}`
  );
  const matchList = await matchListResponse.json();
  res.send(matchList);
});

api.get('/match-info', async (req, res) => {
  const matchInfoResponse = await fetch(
    `https://${req.query.region}.api.riotgames.com/lol/match/v5/matches/${req.query.matchId}?api_key=${process.env.RIOT_API_KEY}`
  );
  const matchInfo = await matchInfoResponse.json();
  res.send(matchInfo);
});

// ----------------------------------------------------------------------------------------------------------------------

// api.use('/api', app);

// ----------------------------------------------------------------------------------------------------------------------

api.listen(api.get('port'), () => {
  createTimeStamp();
  console.log('Server running on port', api.get('port'));
});
