
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('score')
    table.integer('level')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
