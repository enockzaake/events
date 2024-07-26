import Navbar from "@/components/navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar bg_color="bg-cyan-900" />
      {children}
    </div>
  );
}
