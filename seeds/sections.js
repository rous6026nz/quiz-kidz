
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('sections').insert([
        {id: 1, name: 'addition', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: '', user_id: 1},
        {id: 2, name: 'addition', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: '', user_id: 2},
        {id: 3, name: 'addition', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: '', user_id: 3},
        {id: 4, name: 'addition', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: '', user_id: 4},
        {id: 5, name: 'subtraction', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: '', user_id: 5},
        {id: 6, name: 'subtraction', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: '', user_id: 6},
        {id: 7, name: 'subtraction', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: '', user_id: 7},
        {id: 8, name: 'subtraction', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: '', user_id: 8},
        {id: 9, name: 'multiplication', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: '', user_id: 8},
        {id: 10, name: 'multiplication', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: '', user_id: 9},
        {id: 11, name: 'multiplication', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: '', user_id: 10},
        {id: 12, name: 'multiplication', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: '', user_id: 11},
        {id: 13, name: 'division', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: '', user_id: 12},
        {id: 14, name: 'division', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: '', user_id: 13},
        {id: 15, name: 'division', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: '', user_id: 14},
        {id: 16, name: 'division', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: '', user_id: 15}
      ])
    })
}
