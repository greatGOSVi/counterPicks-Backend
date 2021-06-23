const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const api = express();
api.use(cors());

const apiKey = "SI LA NECESITAS DIME";

api.get("/summoner-info", async (req, res) => {
    const summInfoResponse = await fetch(`https://${req.query.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.sumName}?api_key=${apiKey}`);
    const summInfo = await summInfoResponse.json();
    res.send(summInfo);
});

api.get("/summoner-league", async (req, res) => {
    const summLeagueResponse = await fetch(`https://${req.query.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.sumID}?api_key=${apiKey}`);
    const summLeague = await summLeagueResponse.json();
    res.send(summLeague);
});

api.get("/match-list", async (req, res) => {
    const matchListResponse = await fetch(`https://${req.query.region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids?start=0&count=${req.query.count}&api_key=${apiKey}`);
    const matchList = await matchListResponse.json();
    res.send(matchList);
});

api.get("/match-info", async (req, res) => {
    const matchInfoResponse = await fetch(`https://${req.query.region}.api.riotgames.com/lol/match/v5/matches/${req.query.matchId}?api_key=${apiKey}`);
    const matchInfo = await matchInfoResponse.json();
    res.send(matchInfo);
});

api.listen(3000, () => {
    console.log("Open Port 3000");
});