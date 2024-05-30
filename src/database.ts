import { knex as setupKnex } from "knex";

export const knex = setupKnex({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./tmp/app.db",
  },
});
