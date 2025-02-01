import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrawal Kush — Software Engineer - Frontend",
  description:
    "A dedicated Frontend Engineer with a knack for building innovative software solutions. I create intuitive user experiences that merge design and functionality, transforming concepts into polished digital products. Passionate about delivering seamless and engaging interfaces, I drive impact through thoughtful development and creative problem-solving.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "indian",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Agrawal Kush — Software Engineer - Frontend",
    description:
      "A dedicated Frontend Engineer with a knack for building innovative software solutions. I create intuitive user experiences that merge design and functionality, transforming concepts into polished digital products. Passionate about delivering seamless and engaging interfaces, I drive impact through thoughtful development and creative problem-solving.",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrawal Kush — Software Engineer",
    description:
      "A dedicated Frontend Engineer with a knack for building innovative software solutions. I create intuitive user experiences that merge design and functionality, transforming concepts into polished digital products. Passionate about delivering seamless and engaging interfaces, I drive impact through thoughtful development and creative problem-solving.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
