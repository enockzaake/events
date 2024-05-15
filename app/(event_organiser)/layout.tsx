import SideBar from "@/components/sideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-60">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
