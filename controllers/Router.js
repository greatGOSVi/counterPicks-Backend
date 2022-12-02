const express = require('express');
const createTimeStamp = require('../models/ApiTimestamp.js');
const app = express.Router();
const apiRouter = express.Router();
const summonerRoutes = require('./summoner/Summoner.js');

apiRouter.use((req, res, next) => {
  createTimeStamp();

  next();
});

// apiRouter.use('/summoner', summonerRoutes);

apiRouter.use((req, res, next) => {
  console.log(`Status: ${req.statusCode}`);

  next();
});

app.use('/v1', apiRouter);

module.exports = app;
