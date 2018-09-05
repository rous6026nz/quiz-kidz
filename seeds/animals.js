
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'elephant', img_filename: 'elephant.png'},
        {id: 2, name: 'zebra', img_filename: 'zebra.png'},
        {id: 3, name: 'lamb', img_filename: 'lamb.png'},
        {id: 4, name: 'cat', img_filename: 'cat.png'},
        {id: 5, name: 'bat', img_filename: 'bat.png'},
        {id: 6, name: 'pig', img_filename: 'pig.png'},
        {id: 7, name: 'panda', img_filename: 'panda.png'},
        {id: 8, name: 'hippopotamus', img_filename: 'hippopotamus.png'},
        {id: 9, name: 'goldfish', img_filename: 'goldfish.png'},
        {id: 10, name: 'cow', img_filename: 'cow.png'},
        {id: 11, name: 'dog', img_filename: 'dog.png'},
        {id: 12, name: 'lion', img_filename: 'lion.png'},
        {id: 13, name: 'shark', img_filename: 'shark.png'}
      ])
    })
}
