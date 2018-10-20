'use strict';

const express = require('express'); 
const morgan = require('morgan'); 
const cors = require('cors'); 

const { PORT } = require('./config'); 
const app = express(); 

app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(cors()); 
app.use(express.json()); 

app.use((req, res, next) => { 
  const err = new Error('Not Found'); 
  err.status = 404; 
  next(err); 
}); 

app.use((err, req, res) => { 
  if (err.status) { 
    const errBody = Object.assign({}, err, {message : err.message}); 
    res.status(err.status).json(errBody); 
  } else { 
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({message: 'Internatl Server Error'}); 

  }
}); 

if (require.main === module) { 
  app.listen(PORT, function(){ 
    // eslint-disable-next-line no-console
    console.info(`Server listening on ${this.address().port}`); 
  }).on('error', err => { 
    console.err(err);
  });
}

module.exports = app; 