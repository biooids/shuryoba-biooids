import MainFooter from "@/components/mainComp/footer/MainFooter";
import MainHeader from "@/components/mainComp/header/MainHeader";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-amber-950 text-amber-100 flex flex-col gap-5">
      <MainHeader />
      {children}
      <MainFooter />
    </body>
  );
}
export default layout;
