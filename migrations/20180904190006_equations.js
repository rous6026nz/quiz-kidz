
exports.up = (knex, Promise) => {
    return knex.schema.createTable('equations', table => {
        table.increments('id').primary()
        table.string('equation')
        table.string('answer')
        table.boolean('is_completed')
        table.boolean('is_correct')
        table.integer('section_id').references('sections.id')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('equation')
}
