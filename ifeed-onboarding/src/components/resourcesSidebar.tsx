// src/components/ResourcesSidebar.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Folder,
  GraduationCap,
  Layers,
  PawPrint,
  FlaskConical,
  Award,
  Settings,
  HelpCircle,
  ArrowLeft
} from "lucide-react";

const sortingModules = [
  { label: "All Modules", slug: "All", icon: Folder },
  { label: "Module 1: Intro", slug: "introduction", icon: GraduationCap },
  { label: "Module 2: Ingredients", slug: "managing-ingredients", icon: Layers },
  { label: "Module 3: Nutrients", slug: "learning-nutrients", icon: PawPrint },
  { label: "Module 4: Formulation", slug: "feed-formulation", icon: FlaskConical },
  { label: "Module 5: Advanced", slug: "advanced-features", icon: Award },
];

export default function ResourcesSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentModuleFilter = searchParams.get("module") || "All";

  return (
    <aside className="w-64 bg-[#1E5631] text-white flex flex-col justify-between p-6 h-[calc(100vh-4rem)] sticky top-16">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
          <p className="text-xs text-emerald-200/70 mt-1">Sort By Module</p>
        </div>

        <nav className="space-y-1">
          {sortingModules.map((mod) => {
            const isSelected = currentModuleFilter === mod.slug;
            const Icon = mod.icon;
            return (
              <button
                key={mod.slug}
                onClick={() => {
                  if (mod.slug === "All") router.push("/resources");
                  else router.push(`/resources?module=${mod.slug}`);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800/50 transition-colors text-left cursor-pointer ${isSelected ? "bg-emerald-800/30" : ""
                  }`}
              >
                <Icon className="w-4 h-4 text-emerald-200" />
                <span className="font-medium text-sm text-emerald-50">{mod.label}</span>
              </button>
            );
          })}
        </nav>
      </div>



      <div className="space-y-1 text-sm text-emerald-100">
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-emerald-800/50 rounded-lg transition-colors text-left">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-emerald-800/50 rounded-lg transition-colors text-left">
          <HelpCircle className="w-4 h-4" />
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
}