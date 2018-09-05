
exports.up = (knex, Promise) => {
  return knex.schema.createTable('colours', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('hex_code')
  })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('colours')
}
