/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
    await knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.integer('category_id')
            .unsigned()
            // .references('id') 
            // .inTable('categories')
            // .onDelete('SET NULL') 
            // .onUpdate('CASCADE'); 
        table.string('title').notNullable(); 
        table.string('picture'); 
        table.string('summary');
        table.text('description'); 
        table.decimal('price', 10, 2).notNullable(); 
        table.enu('discount_type', ['percent', 'fixed']);
        table.decimal('discount_value', 10, 2); 
        table.specificType('tags', 'text ARRAY'); 
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('products');
};
