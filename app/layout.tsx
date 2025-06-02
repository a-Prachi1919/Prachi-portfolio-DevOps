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
  title: "Prachi .a — DevOps Engineer",
  description:
    "A DevOps Engineer passionate about building scalable cloud infrastructure and seamless CI/CD pipelines. Skilled in automation, monitoring, and infrastructure as code, I enable fast, secure, and reliable software delivery.",
  keywords: [
    "devops",
    "cloud",
    "automation",
    "infrastructure",
    "ci/cd",
    "terraform",
    "kubernetes",
    "portfolio",
    "prachi a",
    "software delivery",
  ],
  openGraph: {
    title: "Prachi .a — DevOps Engineer",
    description:
      "DevOps Engineer skilled in cloud infrastructure, automation, and CI/CD pipelines. Dedicated to delivering efficient and secure software solutions.",
    url: "https://github.com/a-Prachi1919/Prachi-portfolio-DevOps",
    siteName: "Prachi .a Portfolio",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
        width: 1200,
        height: 630,
        alt: "Prachi .a — DevOps Engineer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Prachi .a — DevOps Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
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

