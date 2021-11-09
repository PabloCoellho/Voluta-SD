
exports.up = function(knex) {
  return knex.schema.createTable('forms', function(table) {
      table.string ('nome').notNullable();
      table.string('email').notNullable();
      table.string('veiculo').notNullable();
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('forms');
};
