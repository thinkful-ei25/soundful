'use strict';

const knex = require('../knex');

knex
  .select('id', 'frequency')
  .from('sounds')
  .then((results) => {
    console.log(JSON.stringify(results));
  })
  .catch(err => {
    console.log('error');
    //return next(err);
  });
