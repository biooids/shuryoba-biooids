import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/mainComp/header/MainHeader";
import MainFooter from "@/components/mainComp/footer/MainFooter";
import SideNav from "@/components/mainComp/sideNav/SideNav";

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
      <body className="bg-amber-950 text-amber-100 flex ">
        <SideNav />
        <section className="w-full bg-white">
          <MainHeader />
          {children}
          <MainFooter />
        </section>
      </body>
    </html>
  );
}
