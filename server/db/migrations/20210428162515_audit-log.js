exports.up = (knex, Promise) => {
  return knex.schema.createTable('audit-log', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('order_id')
    table.string('description')
    table.string('action')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('audit-log')
}
