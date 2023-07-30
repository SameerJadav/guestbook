import { type Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/react"
import { SITE } from "~/config"
import "~/styles/globals.css"
import Providers from "./providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const title = SITE.name
const description = SITE.description
const url = SITE.url
const image = SITE.image

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  keywords: [
    "Sameer Jadav",
    "Web Developer",
    "Programming",
    "Full-stack",
    "Next.js",
    "TypeScript",
    "Prisma",
    "Tailwind CSS",
    "Clerk",
    "zod",
    "Guestbook",
    "Supabase",
    "T3 Stack",
  ],
  authors: [{ name: SITE.author, url: SITE.authorUrl }],
  creator: SITE.author,
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#151718" },
    { media: "(prefers-color-scheme: dark)", color: "#151718" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
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
  manifest: `${url}/site.webmanifest`,
  alternates: { canonical: url },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.variable}>
          <Providers>
            <main className="mx-auto flex max-h-screen w-full max-w-xl flex-col items-center justify-center px-4 md:p-0">
              {children}
            </main>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
