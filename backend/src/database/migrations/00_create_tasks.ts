import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary();
    table.string('content').notNullable();
    table.boolean('done').notNullable().defaultTo(false);
  });
};

export async function down(knex: Knex){
  return knex.schema.dropTable('tasks');
};
