import { ClerkProvider } from "@clerk/nextjs";
import type { AppType, AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Toaster position="bottom-center" reverseOrder={true} />
      <Component {...pageProps} />
      <Analytics />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
