
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Zaine', username: 'zZaineRd', score: 0, level: 0, colour_id: 'red', animal_id: 'zebra', section_id: 1},
        {id: 2, name: 'Levi', username: 'lLeviPk', score: 0, level: 0, colour_id: 'pink', animal_id: 'lamb', section_id: 1},
        {id: 3, name: 'Avalon', username: 'cAvalonCn', score: 0, level: 0, colour_id: 'cyan', animal_id: 'cow', section_id: 1},
        {id: 4, name: 'Mkenzi', username: 'sMkenziMa', score: 0, level: 0, colour_id: 'magenta', animal_id: 'shark', section_id: 1}
      ])
    })
}
