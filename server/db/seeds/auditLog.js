exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('audit-log').del()
    .then(function () {
      // Inserts seed entries
      return knex('audit-log').insert([
        { id: 1, user_id: '123', order_id: '1', description: 'Order', action: 'ADD' },
        { id: 2, user_id: '1234', order_id: '2', description: 'Order', action: 'CANCEL' },
        { id: 3, user_id: '12345', order_id: '3', description: 'Order', action: 'ADD' }
      ])
    })
}
