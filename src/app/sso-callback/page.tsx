"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import { type HandleOAuthCallbackParams } from "@clerk/types";
import { Icons } from "~/components/Icons";

export const runtime = "edge";

export default function SSOCallback(props: {
  searchParams: HandleOAuthCallbackParams;
}) {
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    void handleRedirectCallback(props.searchParams);
  }, [props.searchParams, handleRedirectCallback]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Icons.loader className="h-10 w-10 animate-spin" />
    </div>
  );
}
