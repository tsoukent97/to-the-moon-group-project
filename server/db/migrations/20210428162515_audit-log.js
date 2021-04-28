exports.up = (knex, Promise) => {
  return knex.schema.createTable('audit-log', table => {
    table.increments('id')
    table.string('order_type')
    table.timestamp('created_at')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('audit-log')
}

