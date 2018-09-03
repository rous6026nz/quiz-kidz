// 
// Home routes configuration file.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const express = require('express')

const router = express.Router()


/* 
    GET routes.
    ---------------------------------------------
*/
// GET /
router.get('/', (req, res) => {
    res.send('Hello')
})

// GET /sign-up
router.get('/sign-up', (req, res) => {
    res.send('Sign Up')
})

// GET /login
router.get('/login', (req, res) => {
    res.send('Login')
})


/* 
    POST routes.
    ---------------------------------------------
*/



/* 
    PUT routes.
    ---------------------------------------------
*/



/* 
    DELETE routes.
    ---------------------------------------------
*/



/* 
    Export module.
    ---------------------------------------------
*/
module.exports = router