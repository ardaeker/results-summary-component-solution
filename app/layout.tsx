import "@/styles/tailwind.css";
import { font } from "@/assets/fonts/font";

import openGraphImage from "@/public/preview-og.png";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arda Eker - Result Summary Component Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the Result Summary Component challenge on Frontend Mentor.",
  authors: [{ name: "Arda Eker", url: "https://www.ardaeker.com" }],
  metadataBase: new URL("https://www.ardaeker.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: "Arda Eker - React Summary Component Solution",
    description:
      "Hello, I'm Arda Eker. This website showcases my solution to the Result Summary Component challenge on Frontend Mentor.",
    images: [
      {
        url: openGraphImage.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
