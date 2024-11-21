/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
    await knex.schema.createTable('reviews', (table) => {
      table.increments('id').primary();
      table.integer('user_id')
        .unsigned()
        // .references('id')
        // .inTable('users')
        // .onDelete('CASCADE')
        // .onUpdate('CASCADE'); 
      table.integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
      table.smallint('rating') 
        .notNullable()
        .checkBetween([1, 5]);
      table.text('comment');
      table.timestamps(true, true);
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('reviews');
};
