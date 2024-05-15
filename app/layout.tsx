import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "../styles/globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GooDev",
  description: "Your Web, Your Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
