import { type Viewport, type Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SITE } from "~/config";
import "~/styles/globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = SITE.name;
const description = SITE.description;
const url = SITE.url;
const image = SITE.image;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    "Sameer Jadav",
    "Web Development",
    "Programming",
    "Full-stack",
    "Next.js",
    "TypeScript",
    "Prisma",
    "Tailwind CSS",
    "Clerk",
    "Guestbook",
    "Supabase",
    "T3 Stack",
  ],
  applicationName: title,
  generator: "Next.js",
  authors: [{ name: SITE.author, url: SITE.authorUrl }],
  creator: SITE.author,
  publisher: SITE.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL(url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: SITE.twitterId,
    site: SITE.twitterId,
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
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.variable}>
          <Providers>
            <main className="mx-auto flex max-h-screen min-h-screen w-full max-w-xl flex-col px-4 md:p-0">
              {children}
            </main>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
