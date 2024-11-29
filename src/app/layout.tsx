import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/mainComp/header/MainHeader";
import MainFooter from "@/components/mainComp/footer/MainFooter";

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
      <body className="bg-amber-950 text-amber-100 flex flex-col gap-5">
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
