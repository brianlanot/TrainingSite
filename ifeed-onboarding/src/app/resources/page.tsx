// src/app/resources/page.tsx
"use client";

import { useState, Suspense } from "react";
import { Download, BookOpen } from "lucide-react";
import { useSearchParams } from "next/navigation";

const resourcesData = [
  {
    id: "res-module-1",
    title: "Module 1",
    description: "Essential introductory resources and guide to navigate the onboarding platform.",
    category: "Guides",
    fileSize: "1.2 MB",
    fileType: "PDF",
    icon: BookOpen,
    module: "introduction",
  },
  {
    id: "res-module-2",
    title: "Module 2",
    description: "Reference manual detailing how to manage feed ingredients and importing from Excel.",
    category: "Guides",
    fileSize: "2.4 MB",
    fileType: "PDF",
    icon: BookOpen,
    module: "managing-ingredients",
  },
  {
    id: "res-module-3",
    title: "Module 3",
    description: "Resource sheets outlining daily Dry Matter (DM) and Crude Protein (CP) demands.",
    category: "Guides",
    fileSize: "880 KB",
    fileType: "PDF",
    icon: BookOpen,
    module: "learning-nutrients",
  },
  {
    id: "res-module-4",
    title: "Module 4",
    description: "Technical guide explaining simplex formulation rules and Pearson Square techniques.",
    category: "Guides",
    fileSize: "1.1 MB",
    fileType: "PDF",
    icon: BookOpen,
    module: "feed-formulation",
  },
  {
    id: "res-module-5",
    title: "Module 5",
    description: "Manual for system configuration, validation tools, and advanced reporting dashboard.",
    category: "Guides",
    fileSize: "950 KB",
    fileType: "PDF",
    icon: BookOpen,
    module: "advanced-features",
  },
];

const modulesInfo = [
  { id: 1, name: "Module 1: Introduction", slug: "introduction" },
  { id: 2, name: "Module 2: Managing Ingredients", slug: "managing-ingredients" },
  { id: 3, name: "Module 3: Learning Nutrients", slug: "learning-nutrients" },
  { id: 4, name: "Module 4: Feed Formulation", slug: "feed-formulation" },
  { id: 5, name: "Module 5: Advanced Features", slug: "advanced-features" },
];

function ResourcesContent() {
  const searchParams = useSearchParams();
  const currentModule = searchParams.get("module") || "All";

  // const [searchQuery] = useState("");

  // Filter raw resources based on selection context
  const filteredResources = resourcesData.filter((resource) => {
    const matchesModule = currentModule === "All" || resource.module === currentModule;

    // Commented out search matching criteria logic
    // const matchesSearch =
    //   resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesModule; /* && matchesSearch */
  });

  const displayedModules = modulesInfo.filter((mod) => currentModule === "All" || mod.slug === currentModule);

  const hasResources = filteredResources.length > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Hero Header Card */}
      <div className="bg-[#1E5631] rounded-2xl p-8 text-white relative overflow-hidden shadow-sm">
        <div className="max-w-2xl space-y-3 z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight">Essential Resources Hub</h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Download blueprints, data worksheets, and documentation tools to assist your structural calculation pipelines offline in the field.
          </p>
        </div>
      </div>

      {/* Separated & Sorted Module Lists */}
      {hasResources ? (
        <div className="space-y-10 mt-8">
          {displayedModules.map((mod) => {
            const moduleResources = filteredResources.filter((item) => item.module === mod.slug);

            if (moduleResources.length === 0) return null;

            return (
              <div key={mod.slug} className="space-y-4">
                {/* Module Separator / Header */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
                  <h2 className="text-xl font-bold text-[#1E5631]">{mod.name}</h2>
                  <span className="bg-[#EAF2EA] text-[#1E5631] px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {moduleResources.length} {moduleResources.length === 1 ? "file" : "files"}
                  </span>
                </div>

                {/* Grid layout rendered directly on page context */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {moduleResources.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-200/60 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 relative overflow-hidden group"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="bg-[#EAF2EA] w-10 h-10 rounded-xl flex items-center justify-center text-[#1E5631]">
                              <IconComponent size={20} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#7C9B7B] bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
                              {item.fileType}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#1E5631] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-gray-400">
                            File size: {item.fileSize}
                          </span>
                          <button
                            onClick={() => alert(`Triggering mock download for: ${item.title}`)}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#A36A3B]/10 hover:bg-[#A36A3B]/20 text-[#8B5A2B] font-bold text-xs px-4 py-2.5 transition-colors cursor-pointer"
                          >
                            Download File
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-400 border border-dashed border-gray-200 text-sm">
          No matching documents found. Try modifying your filters!
        </div>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="text-center p-12 text-gray-500">Loading resources...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}