
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hints').del()
    .then(function () {
      // Inserts seed entries
      return knex('hints').insert([
        {id: 66601, hint_text: 'Draw 1 line on paper, then 1 more and count how many lines are on the paper?', equation_id: 1},
        {id: 66602, hint_text: 'Draw 1 line on paper, then 2 more and count how many lines are on the paper?', equation_id: 2},
        {id: 66603, hint_text: 'Draw 1 line on paper, then 3 more and count how many lines are on the paper?', equation_id: 3},
        {id: 66604, hint_text: 'Draw 1 line on paper, then 4 more and count how many lines are on the paper?', equation_id: 4},
        {id: 66605, hint_text: 'Draw 1 line on paper, then 5 more and count how many lines are on the paper?', equation_id: 5},
        {id: 66606, hint_text: 'Draw 1 line on paper, then 6 more and count how many lines are on the paper?', equation_id: 6},
        {id: 66607, hint_text: 'Draw 1 line on paper, then 7 more and count how many lines are on the paper?', equation_id: 7},
        {id: 66608, hint_text: 'Draw 1 line on paper, then 8 more and count how many lines are on the paper?', equation_id: 8},
        {id: 66609, hint_text: 'Draw 1 line on paper, then 9 more and count how many lines are on the paper?', equation_id: 9},
        {id: 66610, hint_text: 'Draw 1 line on paper, then 10 more and count how many lines are on the paper?', equation_id: 10},
        {id: 66611, hint_text: 'Draw 1 line on paper, then 11 more and count how many lines are on the paper?', equation_id: 11},
        {id: 66612, hint_text: 'Draw 1 line on paper, then 12 more and count how many lines are on the paper?', equation_id: 12},
        {id: 66613, hint_text: 'Draw 1 line on paper, then 13 more and count how many lines are on the paper?', equation_id: 13},
        {id: 66614, hint_text: 'Draw 1 line on paper, then 14 more and count how many lines are on the paper?', equation_id: 14}
      ])
    })
}
