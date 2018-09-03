// 
// Database test file.
// 

/* 
    File dependencies.
    ---------------------------------------------
*/
const db = require('../server/db')
const testEnv = require('./testEnvironment')

let testDb = null

// Before any tests.
beforeAll(() => {
    // Set test DB.
    testDb = testEnv.getTestDb()

    // Initialise the test environment.
    return testEnv.initialise(testDb)
})

// After any tests.
afterEach(() => {
    testEnv.cleanup(testDb)
})

// Setup test.
test('Application server test test', (req, res) => {
    expect(true).toBeTruthy()
})