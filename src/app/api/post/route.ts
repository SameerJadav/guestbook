import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

interface PostSchema {
  authorName: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { authorName, message } = (await req.json()) as PostSchema;

    const result = await db.insert(posts).values({
      authorName,
      message,
    });

    return Response.json(result);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return Response.error();
  }
}
