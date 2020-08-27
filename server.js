'use strict';

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());

// Iniciando o banco de dados

mongoose.connect(
    'mongodb://localhost:27017/apib2w',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes/routes'));

app.listen(3001);