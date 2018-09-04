
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Zaine', score: 0, level: 0},
        {id: 2, name: 'Levi', score: 0, level: 0},
        {id: 3, name: 'Avalon', score: 0, level: 0},
        {id: 4, name: 'Mkenzi', score: 0, level: 0}
      ]);
    });
};
