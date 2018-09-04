
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'elephant', img_filename: 'elephant.png', user_id: 1},
        {id: 2, name: 'zebra', img_filename: 'zebra.png', user_id: 2},
        {id: 3, name: 'lamb', img_filename: 'lamb.png', user_id: 3},
        {id: 4, name: 'cat', img_filename: 'cat.png', user_id: 4},
        {id: 5, name: 'bat', img_filename: 'bat.png', user_id: 5},
        {id: 6, name: 'pig', img_filename: 'pig.png', user_id: 6},
        {id: 7, name: 'panda', img_filename: 'panda.png', user_id: 7},
        {id: 8, name: 'hippopotamus', img_filename: 'hippopotamus.png', user_id: 8},
        {id: 9, name: 'goldfish', img_filename: 'goldfish.png', user_id: 9},
        {id: 10, name: 'cow', img_filename: 'cow.png', user_id: 10},
        {id: 11, name: 'dog', img_filename: 'dog.png', user_id: 11},
        {id: 12, name: 'lion', img_filename: 'lion.png', user_id: 12},
        {id: 13, name: 'shark', img_filename: 'shark.png', user_id: 13}
      ])
    })
}
