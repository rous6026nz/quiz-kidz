
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colours').del()
    .then(function () {
      // Inserts seed entries
      return knex('colours').insert([
        {id: 1, name: 'yellow', hex_code: '#FFFF00', user_id: 1},
        {id: 2, name: 'orange', hex_code: '#FFA500', user_id: 2},
        {id: 3, name: 'red', hex_code: '#FF0000', user_id: 3},
        {id: 4, name: 'gold', hex_code: '#FFD700', user_id: 4},
        {id: 5, name: 'green', hex_code: '#008000', user_id: 5},
        {id: 6, name: 'cyan', hex_code: '#00FFFF', user_id: 6},
        {id: 7, name: 'turquoise', hex_code: '#40E0D0', user_id: 7},
        {id: 8, name: 'blue', hex_code: '#0000FF', user_id: 8},
        {id: 9, name: 'navy', hex_code: '#000080', user_id: 9},
        {id: 10, name: 'magenta', hex_code: '#FF00FF', user_id: 10},
        {id: 11, name: 'pink', hex_code: '#FFC0CB', user_id: 11},
        {id: 12, name: 'grey', hex_code: '#808080', user_id: 12}
      ])
    })
}
