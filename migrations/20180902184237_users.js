
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('username')
    table.integer('score')
    table.integer('level')
    table.integer('colour_id').references('colours.id')
    table.integer('animal_id').references('animals.id')
    table.integer('section_id').references('sections.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
