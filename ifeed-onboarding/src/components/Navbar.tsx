"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Modules", href: "/modules" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="h-16 bg-[#FAF9F5] border-b border-gray-100 flex items-center px-12 justify-between sticky top-0 z-50">
      {/* Brand Logo */}
      <div className="text-xl font-bold text-[#1E5631]">iFeed V2</div>
      
      {/* Nav Items */}
      <nav className="flex items-center gap-8 pr-12">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors pb-1 ${
                active ? "text-[#1E5631]" : "text-gray-500 hover:text-[#1E5631]"
              }`}
            >
              {item.label}
              {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1E5631] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
      {/* Empty div */}
      <div className="w-16"></div>
    </header>
  );
}