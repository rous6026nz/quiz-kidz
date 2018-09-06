// 
// Animals routes configuration file.
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
// Get all animals.
router.get('/', (req, res) => {
    // Query the DB table to get all animals.
    db.getAnimals()
        .then(animals => {
            // Send response.
            res.send(animals)
        })
        // Handle errors.
        .catch(err => {
            // Send error response.
            res.status(500).send(err.message)
        })
})

// Get animal by ID.
router.get('/:id', (req, res) => {
    // Get the animal id from the request.
    const id = Number(req.params.id)
    // Query the DB table passing the animal id.
    db.getAnimalById(id)
        .then(animal => {
            // Send response.
            res.send(animal)
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