import type { Metadata, Viewport } from "next";
import localfont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Providers from "~/app/providers";
import { cn } from "~/utils/cn";
import { site } from "~/config";
import "~/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const geist = localfont({
  src: [
    {
      path: "../assets/fonts/Geist-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/Geist-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/Geist-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-geist",
});

const title = `${site.name} - ${site.author.name}`;
const description = site.description;
const url = site.url;
const author = site.author;

export const metadata: Metadata = {
  title,
  description,
  applicationName: title,
  generator: "Next.js",
  authors: [{ name: author.name, url: author.web }],
  creator: author.name,
  publisher: author.name,
  metadataBase: new URL(url),
  keywords: [
    "Sameer Jadav",
    "Guestbook",
    "Typescript",
    "Full-stack Developer",
    "Next.js",
  ],
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: title,
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: title,
    },
    creator: author.twitterId,
    site: author.twitterId,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${url}/site.webmanifest`,
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans text-gray-12 antialiased", geist.variable)}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
