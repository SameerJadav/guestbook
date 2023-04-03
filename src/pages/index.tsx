import { useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

import LoadingSpinner from "~/components/LoadigSpinner";

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
  });

  console.log(user);

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
          disabled={isPosting}
          placeholder="Leave a message"
          className="w-full bg-transparent outline-none placeholder:text-zinc-400"
        />
        <button
          onClick={() => mutate({ content: input })}
          className="rounded-md bg-zinc-700 px-2"
        >
          Post
        </button>
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
    <div key={post.id} className="mb-1 flex gap-1 text-lg">
      <p className="text-zinc-300">{author.userName}:</p>
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
        <title>Guestbook</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen max-w-xl p-4">
        <h1 className="mb-4 text-center font-serif text-4xl font-bold text-white md:mb-6 md:text-5xl">
          Guestbook
        </h1>
        <div className="mb-4 border-b border-dashed border-zinc-400 py-4 text-xl text-white">
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
