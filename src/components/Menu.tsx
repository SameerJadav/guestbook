"use client";

import type { ComponentPropsWithoutRef } from "react";
import { Close, Content, Root, Trigger } from "@radix-ui/react-dialog";
import Icons from "~/components/Icons";
import { site } from "~/config";

export default function Menu() {
  return (
    <Root>
      <Trigger asChild>
        <button>
          <Icons.HamburgerMenu className="size-8 md:hidden" />
          <span className="sr-only">Menu</span>
        </button>
      </Trigger>
      <Content asChild className="fixed left-4 top-4">
        <div className="z-50 h-[calc(100dvh-32px)] w-[calc(100dvw-32px)] animate-fade-in rounded-md border border-gray-6 bg-gray-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Sign my Guestbook</p>
            <Close asChild>
              <button>
                <Icons.Cross className="size-8" />{" "}
                <span className="sr-only">Menu</span>
              </button>
            </Close>
          </div>
          <div className="mt-4 space-y-2">
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
            <ExternalLink href={site.repo}>
              <Icons.Code className="size-5" />
              <span>Source code</span>
            </ExternalLink>
            <div className="flex items-center gap-2">
              <div className="size-5 animate-pulse rounded-full bg-green-9" />
              <p className="text-lg font-medium">Avaliable for work</p>
            </div>
          </div>
        </div>
      </Content>
    </Root>
  );
}

interface ExternalLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  children: React.ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="flex items-center gap-2 text-lg font-medium"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
