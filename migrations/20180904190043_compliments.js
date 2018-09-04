
exports.up = (knex, Promise) => {
    return knex.schema.createTable('compliments', table => {
        table.increments('id').primary()
        table.string('text')
        table.integer('section_id').references('section.id')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('compliments')
}
