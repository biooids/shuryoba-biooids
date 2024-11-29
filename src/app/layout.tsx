import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/mainComp/MainHeader";
import MainFooter from "@/components/mainComp/MainFooter";

export const metadata: Metadata = {
  title: "Shuryoba",
  description: "e-learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
