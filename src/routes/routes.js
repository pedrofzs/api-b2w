'use strict';

const express = require('express');
const routes = express.Router();

const PlanetController = require('../controllers/PlanetController');

routes.get('/planet/list', PlanetController.listPlanets);
routes.get('/planet/search/:id', PlanetController.searchPlanetById);
routes.get('/planet/search', PlanetController.searchPlanetByName);
routes.post('/planet/create', PlanetController.createPlanet);
routes.delete('/planet/delete/:id', PlanetController.deletePlanet);

module.exports = routes;