export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full h-12 bg-green-900">Event organiser navbar</div>
      {children}
    </div>
  );
}
