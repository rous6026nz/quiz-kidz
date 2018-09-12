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

// 
// USER QUERIES:
// 
// Get all users.
const getUsers = testConn => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the users DB table.
    return conn('users')
        // Get all table records.
        .select()
}

// Get user by ID.
const getUserById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the users DB table.
    return conn('users')
        // Get the first user record where id matches the users id.
        .where('users.id', id)
        .first()
}

// 
// COLOUR QUERIES:
// 
// Get all colours.
const getColours = testConn => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the colours DB table.
    return conn('colours')
        // Get all table records.
        .select()
}

// Get colour by ID.
const getColourById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the colours DB table.
    return conn('colours')
        // Get the first colour where the id matches the colour id.
        .where('colours.id', id)
        .first()
}

// 
// ANIMAL QUERIES:
// 
// Get all animals.
const getAnimals = testConn => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the animals table.
    return conn('animals')
        // Get all table records.
        .select()
}

// Get animal by ID.
const getAnimalById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the animals DB table.
    return conn('animals')
        // Get the first animal where the id matches the animal id.
        .where('animals.id', id)
        .first()
}

// 
// SECTION QUERIES:
// 
// Get all sections.
const getSections = testConn => {
    // Establish the DB connection.
    const conn = testDb || connection
    // Return the DB table.
    return conn('sections')
        // Get all table records.
        .select()
}

// Get a section by ID.
const getSectionById = (sectionId, testConn) => {
    // Establish the DB connection.
    const conn = testDb || connection
    // Return the DB table.
    return conn('sections')
        // Get the first record where the id matches the section id.
        .where('sections.id', sectionId)
        .first()
}

// 
// EQUATION QUERIES:
// 
// Get all equations.
const getEquations = testConn => {
    // Establish the DB connection.
    const conn = testDb || connection
    // Return the DB table.
    return conn('equations')
        // Get all table records.
        .select()
}

// Get all equations by section.
const getEquationsBySection = (sectionId, testConn) => {
    // Establish the DB connection.
    const conn = testDb || connection
    // Return the DB table.
    return conn('equations')
        // Select all records where sectionId matches section id.
        .where('equations.section_id', sectionId)
        .select()
}

// Get an equation by ID.
const getEquationById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testDb || conncection
    // Return the DB table.
    return conn('equations')
        // Select the record where id matches the equation id.
        .where('equations.id', id)
        .first()
}

// 
// HINT QUERIES:
// 
// Get all hints.
const getHints = testConn => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table.
    return conn('hints')
        // Get all table records.
        .select()
}

// Get hint by ID.
const getHintById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table.
    return conn('hints')
        // Select the record where id matches the hint id.
        .where('hints.id', id)
        .first()
}

// 
// COMPLIMENT QUERIES:
// 
// Get all compliments.
const getCompliments = testConn => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table.
    return conn('compliments')
        // Get all table records.
        .select()
}

// Get compliment by ID.
const getComplimentById = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table.
    return conn('compliments')
        // Select the record where the id matches the compliment id.
        .where('compliments.id', id)
        .first()
}


/* 
    PROFILE QUERIES:
    ==============================================
    DESC:The profile page requires information
    from the following tables:    
    - Colour from the colour table
    - Animal from the animal table
    - Section name, level, score, section reward 
    and current progress from the section table
*/
// Get user profile.
const getUserProfile = (id, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table for users.
    return conn('users')
        // Join the colour table where users.colour_id matches colours.id.
        .join('colours', 'colours.id', 'users.colour_id')
        // Join the animals table where users.animal_id matches animals.id.
        .join('animals', 'animals.id', 'users.animal_id')
        // Join the sections table where users.section_id matches sections.id.
        .join('sections', 'sections.id', 'users.section_id')
        .where('users.id', id)
        // Select name, username, colour, animal, section name, level, score, section reward and current progress.
        .select(
            'users.name as usName',
            'users.username',
            'users.score',
            'users.level',
            'animals.name as aniName',
            'animals.img_filename as animalImg',
            'colours.name as colName',
            'colours.hex_code as hexCode',
            'sections.name as secName',
            'sections.difficulty_level as diffLevel',
            'sections.section_score as sectionScore',
            'sections.section_reward as sectionReward'
        )
        .first()
}
      


/* 
    DATABASE POST QUERIES.

*/
// Insert new user.
const insertNewUser = (user, testConn) => {
    // Establish the DB connection.
    const conn = testConn || connection
    // Return the DB table for users.
    return conn('users')
        // Insert the new user data.
        .insert({
            'name': user.name,
            'username': user.username,
            'score': 0,
            'level': 0,
            'colour_id': user.colour_id,
            'animal_id': user.animal_id,
            'section_id': 77701
        })
}


/* 
    Export module functions.
    ---------------------------------------------
*/
module.exports = {
    getUsers,
    getUserById,
    getColours,
    getColourById,
    getAnimals,
    getAnimalById,
    getSections,
    getSectionById,
    getEquations,
    getEquationsBySection,
    getEquationById,
    getUserProfile,
    getHints,
    getHintById,
    getCompliments,
    getComplimentById,
    insertNewUser
}