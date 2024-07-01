import SideBar from "@/components/sideBar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex w-full">
        <div className="flex flex-col  w-56">
          <SideBar />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
  );
}
