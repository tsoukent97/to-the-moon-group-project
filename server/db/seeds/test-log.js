
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('audit-log').del()
    .then(function () {
      // Inserts seed entries
      return knex('audit-log').insert([
        { id: 1, order_type: 'Add', created_at: '25 December 2012'},
        { id: 2, order_type: 'Cancel', created_at: '26 December 2012'},
        { id: 3, order_type: 'Add', created_at: '27 December 2012'}
      ]);
    });
};
