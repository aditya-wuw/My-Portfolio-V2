import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContextProviderWrap } from "@/Context/AppContext";
import Nav from "@/Components/Nav";
import { ThemeProvider } from "next-themes";
import { MusicContextProvider } from "@/Context/MusicContext";

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
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ContextProviderWrap>
          <MusicContextProvider>
            <ThemeProvider attribute={"class"} defaultTheme="system">
              <div className="w-full bg-white dark:bg-black grid-pattern transition duration-200 pop-in">
                <div className="max-w-4xl mx-auto px-4 pb-4 ">
                  <Nav />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </MusicContextProvider>
        </ContextProviderWrap>
      </body>
    </html>
  );
}
