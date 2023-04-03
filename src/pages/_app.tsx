import { ClerkProvider } from "@clerk/nextjs";
import type { AppType, AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Analytics />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
