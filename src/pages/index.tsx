import { useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

import LoadingSpinner from "~/components/LoadigSpinner";
import { toast } from "react-hot-toast";
import clsx from "clsx";

// Fetching data from the tRPC API
type postWithUser = RouterOutputs["post"]["getAll"][number];

// Create post wizard
const CreatePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    // Clear the input field and invalidate the cache when the mutation is done
    onSuccess: () => {
      setInput("");
      void ctx.post.getAll.invalidate();
    },
    onError: () => {
      toast.error("Failed to post! Try again later.");
    },
  });

  // console.log(user);

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-1 text-start">
      <div className="mb-2 flex items-center gap-2 rounded-md bg-zinc-900 p-1.5">
        <input
          type="text"
          name="message"
          id="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (input !== "") mutate({ content: input });
            }
          }}
          disabled={isPosting}
          placeholder="Leave a message"
          className="w-full bg-transparent outline-none placeholder:text-zinc-400"
        />
        {input !== "" && (
          <button
            onClick={() => mutate({ content: input })}
            className={clsx("rounded-md bg-zinc-700 px-2", {
              "cursor-not-allowed bg-zinc-500": isPosting,
            })}
            disabled={isPosting}
          >
            Post
          </button>
        )}
      </div>
      <div className="flex w-max items-center gap-1 text-base">
        <SignOutButton>⇒ Sign out</SignOutButton>
      </div>
    </div>
  );
};

// Individual post view
const PostView = (props: postWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="mb-2 flex gap-1">
      <p className="w-max text-zinc-400">
        {author.firstName} {author.lastName}:
      </p>
      <p>{post.content}</p>
    </div>
  );
};

// Feed of posts
const Feed = () => {
  const { data, isLoading: postsLoading } = api.post.getAll.useQuery();

  if (postsLoading) return <LoadingSpinner />;

  if (!data) return <div>Something went wrong!</div>;

  return (
    <div>
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const { isSignedIn, isLoaded: userLoaded } = useUser();

  // Start fetching ASAP
  api.post.getAll.useQuery();

  // User will be loaded fast so don't show a loading spinner
  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Guestbook</title>
        <meta
          name="description"
          content="Welcome to my guestbook app! Keep memories alive with user-friendly platform. Share experiences and connect with loved ones. Join the fun today!"
        />
        <meta
          name="keywords"
          content="Guestbook, Modern guestbook, Portfolio project, Next.js, Next.js 13, Next.js 13 appDir, Clerk, Create t3 app, tRPC, Prisma, Supabase, Upstash, Clerk Authentication, User management, Authentication, React, Modern web apps, UI, UX, UI/UX, APIs, Full-stack application, Full-stack web application"
        />

        <meta name="application-name" content="Guestbook" />
        <meta name="author" content="Sameer Jadav" />
        <link rel="author" href="https://sameerjadav.me" />

        <meta name="robots" content="noindex, follow, nocache" />
        <meta
          name="googlebot"
          content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        <meta property="og:title" content="Guestbook" />
        <meta
          property="og:description"
          content="Welcome to my guestbook app! Keep memories alive with user-friendly platform. Share experiences and connect with loved ones. Join the fun today!"
        />
        <meta property="og:url" content="http://guestbook.sameerjadav.me" />
        <meta property="og:site_name" content="Guestbook" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta property="og:image:url" content="/og-guestbook.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guestbook" />
        <meta
          name="twitter:description"
          content="Welcome to my guestbook app! Keep memories alive with user-friendly platform. Share experiences and connect with loved ones. Join the fun today!"
        />
        <meta name="twitter:creator" content="@SameerJadav_" />
        <meta name="twitter:image" content="/og-guestbook.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen max-w-2xl px-4 py-10">
        <h1 className="mb-6 text-center font-serif text-6xl md:text-8xl">
          Guestbook
        </h1>
        <div className="mb-6 border-b border-dashed border-zinc-400 py-4 text-xl">
          {/* User is not signed in */}
          {!isSignedIn && <SignInButton mode="modal" />}
          {/* User is signed in */}
          {isSignedIn && <CreatePostWizard />}
        </div>
        <Feed />
      </main>
    </>
  );
};

export default Home;
