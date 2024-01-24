import { Suspense } from "react";
import dynamic from "next/dynamic";
import Footer from "~/components/Footer";
import Messages from "~/components/Messages";
import Skeleton from "~/components/Skeleton";

const SigninButton = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-[34] w-[193px] rounded-md" />,
});

export default function HomePage() {
  return (
    <main className="mx-auto flex h-dvh w-full max-w-xl flex-col gap-4 px-4 sm:px-0">
      <div className="space-y-4">
        <h1 className="pt-6 text-3xl font-bold tracking-tighter">
          Sign my guestbook
        </h1>
        <SigninButton />
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
