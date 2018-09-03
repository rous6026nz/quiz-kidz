// 
//  Application server configuration. 
// 

// File dependencies.
const server = require('./server')

// Server port settings.
const port = process.env.PORT || 3000

// Start the server.
server.listen(port, function () {
  console.log('Listening on port', port)
})
