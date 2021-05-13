const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("lo que quieras");
});

app.listen(3000, () => {
    console.log("Open Port 3000");
})