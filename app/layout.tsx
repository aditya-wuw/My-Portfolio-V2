import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Context_Provider_wrap } from "@/Context/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "< Adi />",
  description:
    "Full-Stack developer specializing in modern web applications and coding UI using React, TypeScript, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Context_Provider_wrap>
        <body className="min-h-full flex flex-col">{children}</body>
      </Context_Provider_wrap>
    </html>
  );
}
