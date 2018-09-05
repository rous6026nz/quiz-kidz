
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('sections').insert([
        {id: 1, name: 'addition', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 2, name: 'addition', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 3, name: 'addition', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 4, name: 'addition', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 5, name: 'subtraction', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 6, name: 'subtraction', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 7, name: 'subtraction', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 8, name: 'subtraction', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 9, name: 'multiplication', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 10, name: 'multiplication', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 11, name: 'multiplication', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 12, name: 'multiplication', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 13, name: 'division', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 14, name: 'division', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 15, name: 'division', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 16, name: 'division', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'}
      ])
    })
}
