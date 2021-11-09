
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.string ('nome').notNullable();
        table.string('idade').notNullable();
        table.string('cpf').notNullable();
        table.string ('numero').notNullable();
        table.string('email').notNullable();
               
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('user');
  };