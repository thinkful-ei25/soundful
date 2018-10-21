'use strict';

const knexConfig = require('./knexfile'); 

const environmnet = process.env.NODE_ENV || 'development'; 

module.exports = require('knex')(knexConfig[environmnet]); 
