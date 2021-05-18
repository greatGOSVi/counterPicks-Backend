const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const api = express();
api.use(cors());

const apiKey = "RGAPI-35a09d36-de8d-4b1b-8137-32534adfd528";

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

api.listen(3000, () => {
    console.log("Open Port 3000");
});