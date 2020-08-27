'use strict';

const mongoose = require('mongoose');
const axios = require('axios');

const Planet = mongoose.model('Planet');


async function getMovieApperances(movie){

    try{

        // Requesting data
        const response = await axios.get(`https://swapi.dev/api/planets/?search=${movie}`);
        
        //Destructuring reponse object and later, the result array
        const { results } = response.data;
        let planet = results[0];
        const { films } = planet;

        return films.length;

    } catch (error){
        console.log('Planeta não existe na base de dados.');
    }

}

module.exports = {

    async listPlanets(req, res){

        const planets = await Planet.find();
    
        return res.json(planets);
    },

    async searchPlanetById(req, res){

        const planet = await Planet.findById(req.params.id);
        
        return res.json(planet);
    },

    async searchPlanetByName(req, res){

        const planet = await Planet.find({ 'name': { $regex : new RegExp(req.query.planetName, "i")} });
        
        return res.json(planet);
    },

    async createPlanet(req,res){
        
        //Getting the number of movie appearances from Star Wars Public API      
        var planetName = req.body['name'];
        let movieAppearances = await getMovieApperances(planetName);
        req.body['movieAppearances'] = movieAppearances;

        const planet = await Planet.create(req.body);

        return res.json(planet);
    },

    async deletePlanet(req,res){
        
        await Planet.findByIdAndRemove(req.params.id);

        return res.json({message: 'Planeta removido com sucesso!'});
    }

}