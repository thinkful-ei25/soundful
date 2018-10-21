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
    })
    .catch(err => {
      return next(err);
    });
});

router.post('/', (req, res, next) => {
  console.log('frequency: ', req.body.frequency, 'wavetype', req.body.wavetype);
  const newObject = {
    frequency : req.body.frequency, 
    wavetype : req.body.waveType
  }; 

  knex('sounds')
    .returning(['id', 'frequency', 'wavetype'])
    .insert(newObject)
    .then(result => { 
      res.json(result); 
    })
    .catch(err => { 
      return next(err); 
    }); 
}); 

module.exports = router;
