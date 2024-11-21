/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export  const up = async function (knex) {
    await knex.schema.createTable("Orders", (table) => {
        table.increments("id").primary()
        table.integer("user_id").notNullable()
        table.integer("cart_id").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())

        // table
        //     .foreign("user_id")
        //     .references("id")
        //     .inTable("users")
        //     .onDelete("CASCADE")

        // table
        //     .foreign("cart_id")
        //     .references("id")
        //     .inTable("cart")
        //     .onDelete("CASCADE")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTableIfExists("Orders")
}
