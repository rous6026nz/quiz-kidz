// 
// Application database configuration file.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

/* 
    Database functions.
    ---------------------------------------------
*/
const getUsers = testConn => {
    const conn = testConn || connection
    return conn('users')
        .select()
}


/* 
    Export module.
    ---------------------------------------------
*/
module.exports = {}