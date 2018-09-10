
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('sections').insert([
        {id: 77701, name: 'addition', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77702, name: 'addition', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77703, name: 'addition', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77704, name: 'addition', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77705, name: 'subtraction', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77706, name: 'subtraction', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77707, name: 'subtraction', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77708, name: 'subtraction', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77709, name: 'multiplication', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77710, name: 'multiplication', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77711, name: 'multiplication', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77712, name: 'multiplication', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77713, name: 'division', difficulty_level: 1, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77714, name: 'division', difficulty_level: 2, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77715, name: 'division', difficulty_level: 3, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'},
        {id: 77716, name: 'division', difficulty_level: 4, is_completed: false, section_score: 0, section_reward: 'gold-reward.png'}
      ])
    })
}
