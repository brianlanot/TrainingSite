// src/app/resources/page.tsx
"use client";

import { useState } from "react";
import { Download, FileText, Table, BookOpen, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock Data for iFeed resources
const resourcesData = [
  {
    id: "res-1",
    title: "Inventory Excel Template",
    description: "A pre-formatted spreadsheet to track your available raw materials, storage quantities, and local market prices.",
    category: "Templates",
    fileSize: "142 KB",
    fileType: "XLSX",
    icon: Table,
  },
  {
    id: "res-2",
    title: "Local Ingredient & Nutrient Guide",
    description: "Comprehensive breakdown of common Philippine forage, crop by-products, and concentrated feeds for Carabaos.",
    category: "Guides",
    fileSize: "2.4 MB",
    fileType: "PDF",
    icon: BookOpen,
  },
  {
    id: "res-3",
    title: "Nutrient Cheat Sheet",
    description: "Quick reference tables outlining daily Dry Matter (DM), Total Digestible Nutrients (TDN), and Crude Protein (CP) demands.",
    category: "Cheatsheets",
    fileSize: "880 KB",
    fileType: "PDF",
    icon: FileText,
  },
  {
    id: "res-4",
    title: "Simplex Algorithm Handout",
    description: "An educational background document detailing how the linear programming formula optimizes feed costs.",
    category: "Guides",
    fileSize: "1.1 MB",
    fileType: "PDF",
    icon: BookOpen,
  },
];

const categories = ["All", "Templates", "Guides", "Cheatsheets"];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic based on search and selected tab category
  const filteredResources = resourcesData.filter((resource) => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Toolbar controls (Search and Tabs) */}
      {/* <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-xs border border-gray-100"> */}
      {/* Category Tabs */}
      {/* <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                ? "bg-[#1E5631] text-white shadow-xs"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

      {/* Search Bar Input */}
      {/* <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 pl-9 pr-4 py-2 rounded-xl text-xs outline-none border border-transparent focus:border-[#D0E1D2] focus:bg-white transition-all text-gray-700"
          />
        </div> */}
      {/* </div> */}

      {/* Grid Items List Layout */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200/60 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 relative overflow-hidden group"
              >
                <div className="space-y-4">
                  {/* Dynamic Type Badge Icon wrapper */}
                  <div className="flex items-center justify-between">
                    <div className="bg-[#EAF2EA] w-10 h-10 rounded-xl flex items-center justify-center text-[#1E5631]">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#7C9B7B] bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
                      {item.fileType}
                    </span>
                  </div>

                  {/* Resource text specifics */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#1E5631] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer download baseline */}
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
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-400 border border-dashed border-gray-200 text-sm">
          No matching documents found. Try modifying your filters!
        </div>
      )}

    </div>
  );
}