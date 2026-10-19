import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Archivo, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, SITE_URL } from "@/lib/seo";
import { ChatAssistant } from "@/components/chat/ChatAssistant";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { StickyCta } from "@/components/layout/StickyCta";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  variable: "--font-serif",
  display: "swap",
});

// Italic is only used for short accent lines, so it loads as its own single weight.
const serifItalic = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif-italic",
  display: "swap",
  preload: false,
});

const sansFont = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0F11",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "iron’s irony | Architectural, Decorative & Custom Ironwork",
    template: "%s | iron’s irony",
  },
  description:
    "Gates, railings, balconies, staircases, grills and custom ironwork, designed around your space and made to become part of the building. Start a project with iron’s irony.",
  applicationName: "iron’s irony",
  keywords: [
    "iron’s irony",
    "ironwork",
    "iron gates",
    "iron railings",
    "balcony railings",
    "staircase balustrade",
    "window grills",
    "architectural ironwork",
    "custom iron fabrication",
  ],
  authors: [{ name: "Hycyon" }],
  creator: "Hycyon",
  publisher: "iron’s irony",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "iron’s irony",
    title: "iron’s irony | Architectural, Decorative & Custom Ironwork",
    description: "Gates, railings, balconies, staircases and custom ironwork, made to become part of the building.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iron’s irony | Architectural, Decorative & Custom Ironwork",
    description: "Gates, railings, balconies, staircases and custom ironwork, made to become part of the building.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${serifItalic.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-iron-950 text-iron-950 font-sans antialiased flex flex-col selection:bg-accent-bronze/30 selection:text-ink-primary">
        <JsonLd data={localBusinessSchema} />
        {/* Accessible Keyboard Navigation Skip Anchor */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-3 focus:bg-canvas-bg focus:text-iron-950 micro"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <StickyCta />
          <ChatAssistant />
        </MotionProvider>
      </body>
    </html>
  );
}
