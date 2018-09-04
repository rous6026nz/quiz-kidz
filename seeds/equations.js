
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('equations').del()
    .then(function () {
      // Inserts seed entries
      return knex('equations').insert([
        {id: 1, equation: '1 + 1', answer: '2', is_complete: false, is_correct: false, section_id: 1},
        {id: 2, equation: '1 + 2', answer: '3', is_complete: false, is_correct: false, section_id: 1},
        {id: 3, equation: '1 + 3', answer: '4', is_complete: false, is_correct: false, section_id: 1},
        {id: 4, equation: '1 + 4', answer: '5', is_complete: false, is_correct: false, section_id: 1},
        {id: 5, equation: '1 + 5', answer: '6', is_complete: false, is_correct: false, section_id: 1},
        {id: 6, equation: '1 + 6', answer: '7', is_complete: false, is_correct: false, section_id: 1},
        {id: 7, equation: '1 + 7', answer: '8', is_complete: false, is_correct: false, section_id: 1},
        {id: 8, equation: '1 + 8', answer: '9', is_complete: false, is_correct: false, section_id: 1},
        {id: 9, equation: '1 + 9', answer: '10', is_complete: false, is_correct: false, section_id: 1},
        {id: 10, equation: '1 + 10', answer: '11', is_complete: false, is_correct: false, section_id: 1},
        {id: 11, equation: '1 + 11', answer: '12', is_complete: false, is_correct: false, section_id: 1},
        {id: 12, equation: '1 + 12', answer: '13', is_complete: false, is_correct: false, section_id: 1},
        {id: 13, equation: '1 + 13', answer: '14', is_complete: false, is_correct: false, section_id: 1},
        {id: 14, equation: '1 + 14', answer: '15', is_complete: false, is_correct: false, section_id: 1}
      ])
    })
}
