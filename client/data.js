import request from 'superagent'

// Get all colours.
const getColours = () => (
    request
        .get('http://localhost:3000/colours')
        .catch(err => {
            console.error(err)
        })
)

// Get all animals.
const getAnimals = () => (
    request
        .get('http://localhost:3000/animals')
        .catch(err => {
            console.error(err)
        })
)

// Insert new user.
const createNewUser = (userData) => {
    request
        .post('http://localhost:3000/profile')
        .catch(err => {
            console.error(err)
        })
}

export default {
    getColours,
    getAnimals,
    createNewUser
}