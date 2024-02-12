import type { ComponentPropsWithoutRef } from "react";
import dynamic from "next/dynamic";
import { auth } from "~/server/auth";
import Icons from "~/components/Icons";
import Messages from "~/components/Messages";
import Skeleton from "~/components/Skeleton";
import { site } from "~/config";

const CreatePostWizard = dynamic(
  () => import("~/components/CreatePostWizard"),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-end gap-1">
        <Skeleton className="h-[46px] w-full rounded-md" />
        <Skeleton className="h-5 w-[61.42px] rounded-md" />
      </div>
    ),
  },
);

const SigninButton = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-[34px] w-[193px] rounded-md" />,
});

const Menu = dynamic(() => import("~/components/Menu"), {
  ssr: false,
  loading: () => <Skeleton className="size-8 rounded-md" />,
});

export default async function page() {
  const session = await auth();
  return (
    <main className="h-dvh max-h-dvh bg-gray-2 p-4 md:p-6 lg:p-8">
      <section className="flex h-full rounded-md border border-gray-6 bg-gray-1">
        <div className="hidden h-full w-[40%] border-r  border-gray-6 md:flex md:flex-col md:justify-between lg:w-[20%]">
          <div>
            <p className="border-b border-gray-6 p-4 text-2xl font-bold">
              Contacts
            </p>
            <div className="py-4 text-lg">
              <ExternalLink href={site.author.web}>
                <Icons.Link className="size-5" />
                <span>Website</span>
              </ExternalLink>
              <ExternalLink href={site.author.github}>
                <Icons.Github className="size-5" />
                <span>GitHub</span>
              </ExternalLink>
              <ExternalLink href={site.author.mail}>
                <Icons.Mail className="size-5" />
                <span>Mail</span>
              </ExternalLink>
              <ExternalLink href={site.author.twitter}>
                <Icons.Twitter className="size-5" />
                <span>Twitter</span>
              </ExternalLink>
              <ExternalLink href={site.author.linkedin}>
                <Icons.LinkedIn className="size-5" />
                <span>LinkedIn</span>
              </ExternalLink>
            </div>
          </div>
          <div className="space-y-2 border-t border-gray-6 p-4">
            <a
              className="flex items-center gap-2"
              href={site.repo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icons.Code className="size-4" />
              <span>Source code</span>
            </a>
            <div className="flex items-center gap-2">
              <div className="size-4 animate-pulse rounded-full bg-green-9" />
              <p>Avaliable for work</p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Sign my Guestbook</p>
            <Menu />
          </div>
          {session?.user ? (
            <CreatePostWizard authorName={session.user.name} />
          ) : (
            <div>
              <SigninButton />
            </div>
          )}
          <div className="flex-grow overflow-y-scroll">
            <Messages />
          </div>
        </div>
      </section>
    </main>
  );
}

interface ExternalLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  children: React.ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="flex items-center gap-2 px-4 py-1 font-medium text-gray-11 transition-colors ease-in hover:bg-gray-5 hover:text-gray-12"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
