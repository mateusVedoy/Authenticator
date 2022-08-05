import { Client } from "pg";

export const PGClient = new Client({
    host: "db",
    user: "authenticator",
    password: "authenticator",
    database: "authenticator"
});
