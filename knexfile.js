'use strict';

module.exports = { 
  development: { 
    client: 'pg', 
    connection: process.env.DATABASE_URL || 'postgress://localhost/soundful', 
    debug: true, 
    pool: {min: 1, max: 2}
  }, 
  production: { 
    client: 'pg', 
    connection: process.env.DATABASE_URL
  }, 
  test: { 
    client: 'pg', 
    connection: process.env.TEST_DATABASE_URL || 'postgress://localhost/soundful-test', 
    pool: { min: 1, max: 2}
  }
}; 