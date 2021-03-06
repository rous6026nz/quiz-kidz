
exports.up = (knex, Promise) => {
  return knex.schema.createTable('sections', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('difficulty_level')
      table.boolean('is_completed')
      table.integer('section_score')
      table.string('section_reward')
  })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('sections')
}
