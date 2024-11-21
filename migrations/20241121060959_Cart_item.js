/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable("Cart_item", (table) => {
        table.increments("id").primary()
        table.integer("cart_id").notNullable()
        table.integer("product_id").notNullable()
        table.integer("quantity").defaultTo(1)
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())

        // table
        //     .foreign("product_id")
        //     .references("id")
        //     .inTable("Product")
        //     .onDelete("CASCADE")
        // table
        //     .foreign("cart_id")
        //     .references("id")
        //     .inTable("Cart")
        //     .onDelete("CASCADE")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTableIfExists("Cart_item")
}
