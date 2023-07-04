import { Metadata } from "next"
import { Inter, Noto_Serif_Display } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const noto = Noto_Serif_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "TypeScript", "Next.js Template"],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.authorUrl,
    },
  ],
  creator: siteConfig.author,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#161618" },
    { media: "(prefers-color-scheme: dark)", color: "#161618" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterId,
    site: siteConfig.twitterId,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "flex flex-col bg-slate1 text-slate12 antialiased",
            inter.className
          )}
        >
          <main className="mx-auto w-full max-w-xl flex-1 px-4 py-6 md:p-0">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
