// 
// Application server configuration.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const path = require('path')
const express = require('express')
const server = express()


// Route importing.
const homeRoutes = require('./routes/homeRoutes')
const profileRoutes = require('./routes/profileRoutes')
const colourRoutes = require('./routes/coloursRoutes')
const animalRoutes = require('./routes/animalsRoutes')


/* 
    Configure Express to serve static files from
    the 'public' folder.
    ---------------------------------------------
*/
server.use(express.static(path.join(__dirname, '../public')))


/* 
    Express configuration.
    ---------------------------------------------
*/
server.use(express.urlencoded({extended: true}))
server.use(express.json())


/* 
    Set application routing configuration.
    ---------------------------------------------
*/
server.use('/', homeRoutes)
server.use('/profile', profileRoutes)
server.use('/colours', colourRoutes)
server.use('/animals', animalRoutes)


/* 
    Export module.
    ---------------------------------------------
*/
module.exports = server
