const express = require("express");
const cors = require("cors");
const api = express();
api.use(cors());

api.get("/summoner-info", (req, res) => {
    //req.query.region
    res.send({data: "hey"});
});

api.get("/champions", (req, res) => {
    res.send("lo que quieras, champions");
});

api.listen(3000, () => {
    console.log("Open Port 3000");
})