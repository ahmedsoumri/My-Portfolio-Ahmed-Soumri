import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { portfolioData } from "@/data/portfoliodata";

const inter = Inter({ subsets: ["latin"] });

const { seo, profile } = portfolioData;

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author, url: seo.siteUrl }],
  creator: seo.author,
  publisher: seo.author,
  metadataBase: new URL(seo.siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/",
      "ar-SA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${seo.author} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
    creator: seo.twitterHandle,
    site: seo.twitterHandle,
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
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": seo.themeColor,
    "msapplication-TileColor": seo.themeColor,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: seo.siteUrl,
  image: seo.ogImage,
  jobTitle: "Full Stack Developer",
  description: seo.description,
  email: `mailto:${profile.email}`,
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.twitter,
    profile.links.threads,
  ].filter(Boolean),
  knowsAbout: [
    "Full Stack Development",
    "SaaS",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "Web3 Integration",
    "Smart Contracts",
    "Solidity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTopButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
