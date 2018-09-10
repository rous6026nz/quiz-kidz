
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('equations').del()
    .then(function () {
      // Inserts seed entries
      return knex('equations').insert([
        {id: 55501, equation: '1 + 1', answer: '2', is_completed: false, is_correct: false, section_id: 1},
        {id: 55502, equation: '1 + 2', answer: '3', is_completed: false, is_correct: false, section_id: 1},
        {id: 55503, equation: '1 + 3', answer: '4', is_completed: false, is_correct: false, section_id: 1},
        {id: 55504, equation: '1 + 4', answer: '5', is_completed: false, is_correct: false, section_id: 1},
        {id: 55505, equation: '1 + 5', answer: '6', is_completed: false, is_correct: false, section_id: 1},
        {id: 55506, equation: '1 + 6', answer: '7', is_completed: false, is_correct: false, section_id: 1},
        {id: 55507, equation: '1 + 7', answer: '8', is_completed: false, is_correct: false, section_id: 1},
        {id: 55508, equation: '1 + 8', answer: '9', is_completed: false, is_correct: false, section_id: 1},
        {id: 55509, equation: '1 + 9', answer: '10', is_completed: false, is_correct: false, section_id: 1},
        {id: 55510, equation: '1 + 10', answer: '11', is_completed: false, is_correct: false, section_id: 1},
        {id: 55511, equation: '1 + 11', answer: '12', is_completed: false, is_correct: false, section_id: 1},
        {id: 55512, equation: '1 + 12', answer: '13', is_completed: false, is_correct: false, section_id: 1},
        {id: 55513, equation: '1 + 13', answer: '14', is_completed: false, is_correct: false, section_id: 1},
        {id: 55514, equation: '1 + 14', answer: '15', is_completed: false, is_correct: false, section_id: 1}
      ])
    })
}
