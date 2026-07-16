"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResourcesSidebar from "../components/resourcesSidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const hideSidebar = pathname === "/homepage" || pathname === "/"; // Hide sidebar on homepage/root if needed

  // Check if we are on the resources page
  const isResourcesPage = pathname.startsWith("/resources");

  return (
    <html lang="en">
      <body
        className="bg-[#FAF9F5] dark:bg-[#FAF9F5] text-gray-800 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex flex-1">
          {/* Dynamically swap the sidebar depending on the route */}
          {!hideSidebar && (
            isResourcesPage ? (
              <Suspense fallback={<div className="w-64 bg-[#1E5631] text-white p-6 h-[calc(100vh-4rem)] sticky top-16" />}>
                <ResourcesSidebar />
              </Suspense>
            ) : <Sidebar />
          )}
          <main className={hideSidebar ? "flex-1 overflow-y-auto" : "flex-1 overflow-y-auto p-8 bg-[url('/bg-pattern.png')] bg-cover bg-no-repeat"}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
