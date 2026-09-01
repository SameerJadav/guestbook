import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

interface PostSchema {
  message: unknown;
}

const MAX_MESSAGE_LENGTH = 500;

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { message } = (await req.json()) as PostSchema;

    if (typeof message !== "string" || message.trim() === "") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.trim().length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: `Message must be at most ${MAX_MESSAGE_LENGTH} characters` },
        { status: 400 },
      );
    }

    await db.insert(posts).values({
      authorName: session.user.name,
      message: message.trim(),
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
