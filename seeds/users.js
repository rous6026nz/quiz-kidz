
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 99901, name: 'Zaine', username: 'zZaineRd', score: 0, level: 0, colour_id: 22201, animal_id: 33301, section_id: 77701},
        {id: 99902, name: 'Levi', username: 'lLeviPk', score: 0, level: 0, colour_id: 22202, animal_id: 33302, section_id: 77701},
        {id: 99903, name: 'Avalon', username: 'cAvalonCn', score: 0, level: 0, colour_id: 22203, animal_id: 33303, section_id: 77701},
        {id: 99904, name: 'Mkenzi', username: 'sMkenziMa', score: 0, level: 0, colour_id: 22204, animal_id: 33304, section_id: 77701}
      ])
    })
}
