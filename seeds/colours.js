
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colours').del()
    .then(function () {
      // Inserts seed entries
      return knex('colours').insert([
        {id: 1, name: 'yellow', hex_code: '#FFFF00'},
        {id: 2, name: 'orange', hex_code: '#FFA500'},
        {id: 3, name: 'red', hex_code: '#FF0000'},
        {id: 4, name: 'gold', hex_code: '#FFD700'},
        {id: 5, name: 'green', hex_code: '#008000'},
        {id: 6, name: 'cyan', hex_code: '#00FFFF'},
        {id: 7, name: 'turquoise', hex_code: '#40E0D0'},
        {id: 8, name: 'blue', hex_code: '#0000FF'},
        {id: 9, name: 'navy', hex_code: '#000080'},
        {id: 10, name: 'magenta', hex_code: '#FF00FF'},
        {id: 11, name: 'pink', hex_code: '#FFC0CB'},
        {id: 12, name: 'grey', hex_code: '#808080'}
      ])
    })
}
