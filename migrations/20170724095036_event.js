
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', (table) => {
    table.increments().primary();
    table.text('title').notNullable();
    table.text('date').notNullable();
    table.text('time').notNullable();
    table.integer('manager_id').references('manager.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event');
};
