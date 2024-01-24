import { db } from "~/server/db";

export default async function Messages() {
  const messages = await db.query.posts.findMany();
  return messages.map(({ id, message, authorName }) => (
    <p key={id}>
      <span className="text-gray-11">{authorName}:</span> <span>{message}</span>
    </p>
  ));
}
