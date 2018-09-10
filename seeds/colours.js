
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colours').del()
    .then(function () {
      // Inserts seed entries
      return knex('colours').insert([
        {id: 22201, name: 'yellow', hex_code: '#FFFF00'},
        {id: 22202, name: 'orange', hex_code: '#FFA500'},
        {id: 22203, name: 'red', hex_code: '#FF0000'},
        {id: 22204, name: 'gold', hex_code: '#FFD700'},
        {id: 22205, name: 'green', hex_code: '#008000'},
        {id: 22206, name: 'cyan', hex_code: '#00FFFF'},
        {id: 22207, name: 'turquoise', hex_code: '#40E0D0'},
        {id: 22208, name: 'blue', hex_code: '#0000FF'},
        {id: 22209, name: 'navy', hex_code: '#000080'},
        {id: 22210, name: 'magenta', hex_code: '#FF00FF'},
        {id: 22211, name: 'pink', hex_code: '#FFC0CB'},
        {id: 22212, name: 'grey', hex_code: '#808080'}
      ])
    })
}
