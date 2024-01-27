import { Suspense } from "react";
import dynamic from "next/dynamic";
import { auth } from "~/server/auth";
import Footer from "~/components/Footer";
import Messages from "~/components/Messages";
import Skeleton from "~/components/Skeleton";

const CreatePostWizard = dynamic(
  () => import("~/components/CreatePostWizard"),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-end gap-1">
        <Skeleton className="h-11 w-full rounded-md" />
        <Skeleton className="h-5 w-[61.42px] rounded-md" />
      </div>
    ),
  },
);

const SigninButton = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-[34px] w-[193px] rounded-md" />,
});

export default async function HomePage() {
  const session = await auth();
  return (
    <main className="mx-auto flex h-dvh w-full max-w-xl flex-col gap-4 px-4 sm:px-0">
      <div className="space-y-4">
        <h1 className="pt-6 text-3xl font-bold tracking-tighter">
          Sign my guestbook
        </h1>
        {session?.user ? (
          <CreatePostWizard authorName={session.user.name} />
        ) : (
          <SigninButton />
        )}
      </div>
      <div className="flex-1 space-y-1">
        <Suspense fallback={<p>Just a sec, summoning the memories...</p>}>
          <Messages />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
