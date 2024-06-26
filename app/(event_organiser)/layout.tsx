import SideBar from "@/components/sideBar";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <div className="flex w-full">
        <div className="flex flex-col  w-56">
          <SideBar />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </TooltipProvider>
  );
}
