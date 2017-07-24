
exports.up = function(knex, Promise) {
  return knex.schema.createTable('manager', (table) => {
    table.increments().primary();
    table.text('email').unique();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('manager');
};
