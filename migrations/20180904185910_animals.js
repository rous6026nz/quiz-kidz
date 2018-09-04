
exports.up = (knex, Promise) => {
  return knex.schema.createTable('animals', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('img_filename')
      table.integer('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('animals')
}
