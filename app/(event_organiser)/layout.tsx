import SideBar from "@/components/sideBar";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <div className="flex">
        <div className="w-60">
          <SideBar />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </TooltipProvider>
  );
}
