import { useUser, SignOutButton } from "@clerk/nextjs";

export default function PostWizard() {
  const { user } = useUser();

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
          placeholder="Leave a message"
          className="w-full bg-transparent outline-none placeholder:text-zinc-400"
        />
        <button className="rounded-md bg-zinc-700 px-2">Post</button>
      </div>
      <div className="flex w-max items-center gap-1 text-base">
        <SignOutButton>⇒ Sign out</SignOutButton>
      </div>
    </div>
  );
}
