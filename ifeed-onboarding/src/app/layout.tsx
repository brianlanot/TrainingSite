"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/homepage";

  return (
    <html lang="en">
      <body
        className="bg-[#FAF9F5] dark:bg-[#FAF9F5] text-gray-800 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex flex-1">
          {!hideSidebar && <Sidebar />}
          <main className="flex-1 overflow-y-auto p-8 bg-[url('/bg-pattern.png')] bg-cover bg-no-repeat">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}