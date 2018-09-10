
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('compliments').del()
    .then(function () {
      // Inserts seed entries
      return knex('compliments').insert([
        {id: 44401, text: 'Well done!', section_id: 1},
        {id: 44402, text: 'You are doing great!', section_id: 2},
        {id: 44403, text: 'Awesome!', section_id: 3},
        {id: 44404, text: 'WOW! You are becoming a Math MASTER!', section_id: 4},
        {id: 44405, text: 'Congratulations! You passed!', section_id: 5},
        {id: 44406, text: 'Tu Meke!', section_id: 6}
      ])
    })
}
