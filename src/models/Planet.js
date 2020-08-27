'use strict';

const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    climate:{
        type: String,
        required: true
    },
    terrain:{
        type: String,
        required: true
    },
    movieAppearances:{
        type: String,
        default: 0
    },    
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Planet', PlanetSchema);