
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('compliments').del()
    .then(function () {
      // Inserts seed entries
      return knex('compliments').insert([
        {id: 1, text: 'Well done!', section_id: 1},
        {id: 2, text: 'You are doing great!', section_id: 2},
        {id: 3, text: 'Awesome!', section_id: 3},
        {id: 4, text: 'WOW! You are becoming a Math MASTER!', section_id: 4},
        {id: 5, text: 'Congratulations! You passed!', section_id: 5},
        {id: 6, text: 'Tu Meke!', section_id: 6}
      ])
    })
}
