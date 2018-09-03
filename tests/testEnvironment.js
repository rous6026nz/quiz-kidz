// 
// Database test environment file.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const knex = require('knex')
const config = require('../knexfile').test


/* 
    Test environment functions.
    ---------------------------------------------
*/

// Initiate a new test DB connection.
const getTestDb = () => knex(config) 


// Initialise the test environment.
const initialise = db => {
    return db.migrate.latest()
        .then(() => db.seed.run())
}


// Clear test environment.
const cleanup = db => db.destroy()

/* 
    Export module.
    ---------------------------------------------
*/
module.exports = {
    getTestDb, initialise, cleanup
}