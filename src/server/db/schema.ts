import { sql } from "drizzle-orm";
import { integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * Using the multi-project schema feature of Drizzle ORM. Use the same database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
const mysqliteTable = sqliteTableCreator((name) => `guestbook_${name}`);

export const comments = mysqliteTable("posts", {
  id: integer("id", { mode: "number" })
    .primaryKey({ autoIncrement: true })
    .notNull(),
  username: text("username"),
  message: text("message").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_DATE`)
    .notNull(),
});
