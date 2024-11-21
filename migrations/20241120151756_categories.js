/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
    await knex.schema.createTable('categories', (table) => {
        table.increments('id').primary(),
            table.string('name').notNullable(),
            table.string('description'),
            table.string('tag'),
            table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('categories');
};
