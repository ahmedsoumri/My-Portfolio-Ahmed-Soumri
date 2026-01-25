import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { portfolioData } from "@/data/portfoliodata";

const inter = Inter({ subsets: ["latin"] });

const { seo } = portfolioData;

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: seo.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author, url: seo.siteUrl }],
  creator: seo.author,
  publisher: seo.author,
  
  // Canonical URL
  metadataBase: new URL(seo.siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/",
      "ar-SA": "/",
    },
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
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
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
    creator: seo.twitterHandle,
    site: seo.twitterHandle,
  },
  
  // Robots
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
  
  // Verification (add your verification codes here)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Theme color
  other: {
    "theme-color": seo.themeColor,
    "msapplication-TileColor": seo.themeColor,
  },
};

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personalInfo.name,
  url: seo.siteUrl,
  image: seo.ogImage,
  jobTitle: "Full Stack Developer",
  description: seo.description,
  email: `mailto:${portfolioData.personalInfo.email}`,
  sameAs: [
    portfolioData.personalInfo.github,
    portfolioData.personalInfo.linkedin,
    portfolioData.personalInfo.twitter,
    portfolioData.personalInfo.threads,
  ],
  knowsAbout: [
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Blockchain",
    "Web3",
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
        {/* JSON-LD Structured Data */}
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
              <footer className="py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                   © {new Date().getFullYear()} {portfolioData.personalInfo.name} - Full Stack Developer & Blockchain Enthusiast. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
