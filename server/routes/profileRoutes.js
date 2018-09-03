// 
// User profile routes configuration file.
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
router.get('/:id', (req, res) => {
    res.send('Profile page')
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