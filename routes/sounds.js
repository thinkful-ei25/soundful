/* global */

'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  knex
    .select('id', 'frequency')
    .from('sounds')
    .then(results => {
      res.json(results); 
      //console.log(JSON.stringify(results));
    })
    .catch(err => {
      return next(err);
    });

});

module.exports = router;
