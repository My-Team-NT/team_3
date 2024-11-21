import knex from "knex"
import { config } from "dotenv"
config()

const db = knex({
    client: "pg",
    connection: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
    },
})

export default db
