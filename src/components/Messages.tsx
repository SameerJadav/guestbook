import { desc } from "drizzle-orm";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function Messages() {
  const messages = await db.query.posts.findMany({
    limit: 100,
    orderBy: [desc(posts.createdAt)],
  });
  return messages.map(({ id, message, authorName }) => (
    <p key={id}>
      <span className="font-medium text-gray-11">
        {authorName || "Some guy/girl"}:
      </span>{" "}
      <span>{message}</span>
    </p>
  ));
}
