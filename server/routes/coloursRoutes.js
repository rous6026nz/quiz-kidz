// 
// Colours routes configuration file.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const express = require('express')
const db = require('../db')

const router = express.Router()


/* 
    GET routes.
    ---------------------------------------------
*/
// Get all colours.
router.get('/', (req, res) => {
    // Query the DB to get all colours.
    db.getColours()
        .then(colours => {
            // Send response.
            res.send(colours)
        })
        // Handle errors.
        .catch(err => {
            // Send error response.
            res.status(500).send(err.message)
        })
})

// Get colour by ID.
router.get('/:id', (req, res) => {
    // Get the colour id from the request.
    const id = Number(req.params.id)
    // Query the DB table passing the colour id.
    db.getColourById(id)
        .then(colour => {
            // Send response.
            res.send(colour)
        })
        // Handle errors.
        .catch(err => {
            // Send error response.
            res.status(500).send(err.message)
        })
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