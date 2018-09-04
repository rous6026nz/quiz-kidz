
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hints').del()
    .then(function () {
      // Inserts seed entries
      return knex('hints').insert([
        {id: 1, hint_text: 'Draw 1 line on paper, then 1 more and count how many lines are on the paper?', equation_id: 1},
        {id: 2, hint_text: 'Draw 1 line on paper, then 2 more and count how many lines are on the paper?', equation_id: 2},
        {id: 3, hint_text: 'Draw 1 line on paper, then 3 more and count how many lines are on the paper?', equation_id: 3},
        {id: 4, hint_text: 'Draw 1 line on paper, then 4 more and count how many lines are on the paper?', equation_id: 4},
        {id: 5, hint_text: 'Draw 1 line on paper, then 5 more and count how many lines are on the paper?', equation_id: 5},
        {id: 6, hint_text: 'Draw 1 line on paper, then 6 more and count how many lines are on the paper?', equation_id: 6},
        {id: 7, hint_text: 'Draw 1 line on paper, then 7 more and count how many lines are on the paper?', equation_id: 7},
        {id: 8, hint_text: 'Draw 1 line on paper, then 8 more and count how many lines are on the paper?', equation_id: 8},
        {id: 9, hint_text: 'Draw 1 line on paper, then 9 more and count how many lines are on the paper?', equation_id: 9},
        {id: 10, hint_text: 'Draw 1 line on paper, then 10 more and count how many lines are on the paper?', equation_id: 10},
        {id: 11, hint_text: 'Draw 1 line on paper, then 11 more and count how many lines are on the paper?', equation_id: 11},
        {id: 12, hint_text: 'Draw 1 line on paper, then 12 more and count how many lines are on the paper?', equation_id: 12},
        {id: 13, hint_text: 'Draw 1 line on paper, then 13 more and count how many lines are on the paper?', equation_id: 13},
        {id: 14, hint_text: 'Draw 1 line on paper, then 14 more and count how many lines are on the paper?', equation_id: 14}
      ]);
    });
};
