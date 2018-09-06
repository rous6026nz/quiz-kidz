
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Zaine', username: 'zZaineRd', score: 0, level: 0, colour_id: 1, animal_id: 1, section_id: 1},
        {id: 2, name: 'Levi', username: 'lLeviPk', score: 0, level: 0, colour_id: 2, animal_id: 2, section_id: 1},
        {id: 3, name: 'Avalon', username: 'cAvalonCn', score: 0, level: 0, colour_id: 3, animal_id: 3, section_id: 1},
        {id: 4, name: 'Mkenzi', username: 'sMkenziMa', score: 0, level: 0, colour_id: 4, animal_id: 4, section_id: 1}
      ])
    })
}
