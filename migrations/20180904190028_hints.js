
exports.up = (knex, Promise) => {
    return knex.schema.createTable('hints', table => {
        table.increments('id').primary()
        table.string('hint_text')
        table.integer('equation_id').references('equations.id')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('hints')
}
