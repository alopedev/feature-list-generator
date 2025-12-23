import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

// Primary font - Noto Serif JP - Elegant, readable, Japanese-designed
// Used for headlines, body text, and primary content
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

// Secondary font - Inter - Minimal usage for small UI elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feature List Generator - Transform Technical Documents into Structured Lists",
  description:
    "Extract features from technical proposals with precision. Upload documents, review with AI assistance, export to your preferred format. Simple, elegant, effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifJP.variable} ${inter.variable} font-serif antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
