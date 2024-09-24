import type { Metadata } from "next";
import dynamic from 'next/dynamic'

import "./globals.css";

const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "PWA with Next 13",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#a5b4fb" }],
  authors: [
    { name: "Bud Linville" },
    {
      name: "Bud Linville",
      url: "https://jayhawks.click",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/512.png" },
    { rel: "icon", url: "icons/512.png" },
  ],
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body style={{ height: '100vh', width: '100vw' }}>
        <Layout />
      </body>
    </html>
  );
}

export default RootLayout;
