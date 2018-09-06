// 
// User profile routes configuration file.
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
// Get all users.
router.get('/', (req, res) => {
    // Query the DB to get all users.
    db.getUsers()
        .then(users => {
            // Send response.
            res.send(users)
        })
        // Handle errors.
        .catch(err => {
            // Send error response.
            res.status(500).send('Oh no! ', err.message)
        })
})

// Get a user profile.
router.get('/:id', (req, res) => {
    // Get the user id from the request.
    const id = Number(req.params.id)
    // Query the DB passing the user ID.
    db.getUserProfile(id)
        .then(user => {
            // Send the respones.
            res.send(user)
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