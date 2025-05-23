import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/site";
import Analytics from "@/components/GoogleAnalytics";

const font = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Next Automations | AI & Automation Solutions for Smarter Business Growth",
    template: "%s | Next Automations"
  },
  description: "Transform your business with Next Automations - Leading provider of AI-powered automation solutions for enhanced efficiency, productivity, and growth",
  keywords: ["automation", "AI", "business automation", "workflow automation", "digital transformation", "business efficiency", "AI solutions"],
  authors: [{ name: "Victor Kituku" }],
  creator: "Victor Kituku",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    title: "Next Automations | AI & Automation Solutions",
    description: "Transform your business with Next Automations - Leading provider of AI-powered automation solutions for enhanced efficiency, productivity, and growth",
    siteName: site.name
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Automations | AI & Automation Solutions",
    description: "Transform your business with Next Automations - Leading provider of AI-powered automation solutions",
    creator: "@victorkituku"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
