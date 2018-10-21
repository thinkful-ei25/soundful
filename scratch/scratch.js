'use strict';

const knex = require('../knex');

// knex
//   .select('id', 'frequency')
//   .from('sounds')
//   .then((results) => {
//     console.log(JSON.stringify(results));
//   })
//   .catch(err => {
//     console.log('error');
//     //return next(err);
//   });

const id = 1; 

knex 
  .returning(['id', 'frequency', 'wavetype'])
  .from('sounds')
  .insert({frequency : 200, wavetype : 'sine'})
  .then(result => { 
    console.log(JSON.stringify(result));
  }); 

