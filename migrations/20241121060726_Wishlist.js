/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable("Wishlist", (table) => {
        table.increments("id").primary()
        table.integer("user_id").notNullable()
        table.integer("product_id").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())

        // table
        //     .foreign("user_id")
        //     .references("id")
        //     .inTable("users")
        //     .onDelete("CASCADE")

        // table
        //     .foreign("product_id")
        //     .references("id")
        //     .inTable("product")
        //     .onDelete("CASCADE")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTableIfExists("Wishlist")
}
