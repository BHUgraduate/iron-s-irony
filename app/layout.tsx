import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Archivo, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, SITE_URL } from "@/lib/seo";
import { ChatAssistant } from "@/components/chat/ChatAssistant";
import { StickyCta } from "@/components/layout/StickyCta";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
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
  alternates: { canonical: "/" },
  title: {
    default: "iron’s irony | Architectural, Decorative & Custom Ironwork in Varanasi",
    template: "%s — iron’s irony",
  },
  description:
    "Building, architectural, and decorative ironwork engineered for residential estates, architectural practices, and custom commissions. Precision ironwork by iron’s irony.",
  keywords: [
    "iron’s irony",
    "building ironwork",
    "architectural ironwork",
    "decorative ironwork",
    "custom iron fabrication",
    "wrought iron gates",
    "architectural railings",
    "custom balustrades",
    "structural ironwork",
  ],
  authors: [{ name: "hycyon" }],
  creator: "hycyon",
  publisher: "iron’s irony",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "iron’s irony",
    title: "iron’s irony — Building, Architectural & Decorative Ironwork",
    description:
      "Precision ironwork and bespoke metal fabrication engineered for permanence, character, and structural integrity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iron’s irony — Building, Architectural & Decorative Ironwork",
    description:
      "Bespoke architectural ironwork and custom metal fabrication engineered for permanence.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
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
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-canvas-bg text-ink-primary font-sans antialiased flex flex-col selection:bg-accent-bronze/20 selection:text-ink-primary">
        <JsonLd data={localBusinessSchema} />
        {/* Accessible Keyboard Navigation Skip Anchor */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink-primary focus:text-canvas-bg focus:border focus:border-border-structural focus:text-sm font-mono tracking-wider"
        >
          Skip to main content
        </a>
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <StickyCta />
        <ChatAssistant />
      </body>
    </html>
  );
}
