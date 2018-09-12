
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 33301, name: 'elephant', img_filename: 'elephant.png'},
        {id: 33302, name: 'zebra', img_filename: 'zebra.png'},
        {id: 33303, name: 'lamb', img_filename: 'lamb.png'},
        {id: 33304, name: 'cat', img_filename: 'cat.png'},
        {id: 33305, name: 'bat', img_filename: 'bat.png'},
        {id: 33306, name: 'pig', img_filename: 'pig.png'},
        {id: 33307, name: 'panda', img_filename: 'panda.png'},
        {id: 33308, name: 'hippopotamus', img_filename: 'hippopotamus.png'},
        {id: 33309, name: 'goldfish', img_filename: 'goldfish.png'},
        {id: 33310, name: 'cow', img_filename: 'cow.png'},
        {id: 33311, name: 'dog', img_filename: 'dog.png'},
        {id: 33313, name: 'shark', img_filename: 'shark.png'}
      ])
    })
}
