import { Client } from "pg";

export const PGClient = new Client({
    host: "pgdb",
    user: "postgres",
    password: "postgres",
    database: "postgres"
});