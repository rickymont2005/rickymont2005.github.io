import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://rickymont2005.github.io"),
    applicationName: "Ricardo Montano | Mechanical Engineering Portfolio",
    title: "Ricardo Montano | Mechanical Engineering Portfolio",
    description: "Mechanical engineering portfolio of Ricardo Montano, UC Irvine student focused on aerospace hardware, CAD, manufacturing, fabrication, test, and integration.",
    keywords: ["Ricardo Montano", "mechanical engineer", "aerospace engineering", "SolidWorks", "manufacturing", "UC Irvine"],
    authors: [{ name: "Ricardo Montano" }],
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
      shortcut: "/favicon.png",
      apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      title: "Ricardo Montano | Mechanical Engineering Portfolio",
      description: "CAD, manufacturing, aerospace hardware, test, and integration.",
      type: "website",
      siteName: "Ricardo Montano | Mechanical Engineering Portfolio",
      images: [{ url: "/og-gears.png", width: 1200, height: 630, alt: "Ricardo Montano | Mechanical Engineering Portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ricardo Montano | Mechanical Engineering Portfolio",
      description: "CAD, manufacturing, aerospace hardware, test, and integration.",
      images: ["/og-gears.png"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
