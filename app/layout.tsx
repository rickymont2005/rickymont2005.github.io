import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardo-montano-engineering.com"),
  title: "Ricardo Montano | Mechanical Engineering Portfolio",
  description: "Mechanical engineering portfolio of Ricardo Montano, UC Irvine student focused on aerospace hardware, CAD, manufacturing, fabrication, test, and integration.",
  keywords: ["Ricardo Montano", "mechanical engineer", "aerospace engineering", "SolidWorks", "manufacturing", "UC Irvine"],
  authors: [{ name: "Ricardo Montano" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Ricardo Montano | Mechanical Engineering Portfolio",
    description: "CAD, manufacturing, aerospace hardware, test, and integration.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ricardo Montano mechanical engineering portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Ricardo Montano | Mechanical Engineering Portfolio", description: "CAD, manufacturing, aerospace hardware, test, and integration.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
