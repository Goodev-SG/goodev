import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "../styles/globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GooDev",
  description: "Whatever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-5 py-5 sm:px-36 sm:py-10">{children}</body>
    </html>
  );
}
