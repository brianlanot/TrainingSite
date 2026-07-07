"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  GraduationCap, 
  Layers, 
  PawPrint, 
  FlaskConical, 
  Sliders, 
  Award, 
  Settings, 
  HelpCircle, 
  Download,
  ChevronLeft 
} from "lucide-react";

import { curriculumData } from "./curriculumData";

const modules = [
  { label: "Introduction", icon: GraduationCap, href: "/modules/introduction", slug: "introduction" },
  { label: "Managing Ingredients", icon: Layers, href: "/modules/ingredients", slug: "managing-ingredients" },
  { label: "Learning Nutrients", icon: PawPrint, href: "/modules/nutrients", slug: "learning-nutrients" },
  { label: "Feed Formulation", icon: FlaskConical, href: "/modules/formulation", slug: "feed-formulation" },
  { label: "Advanced Features", icon: Award, href: "/modules/advanced", slug: "advanced-features" },
];

export default function Sidebar() {
  const pathname = usePathname() || "/";

  if (pathname === "/") {
    return null; 
  }

  const isModulesTab = pathname.startsWith("/modules");

  const parts = pathname.split("/");
  const currentModuleSlug = parts[2] || undefined;
  const currentLessonIdx = parts[3] ? parseInt(parts[3], 10) - 1 : undefined;

  const activeModule = currentModuleSlug
    ? curriculumData.find((m) => m.slug === currentModuleSlug)
    : undefined;

  const selectedModule = activeModule || curriculumData.find((m) => m.active) || curriculumData[0];

  return (
    <aside className="w-64 bg-[#1E5631] text-white flex flex-col justify-between p-6 h-[calc(100vh-4rem)] sticky top-16">
      <div className="space-y-6">
        {isModulesTab ? (
          <>
            {/* Back to Curriculum Button Block */}
            <div className="mb-2">
              <Link
                href="/curriculum" // Change this href if your main dashboard route is different (e.g., "/dashboard" or "/")
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200/80 hover:text-white transition-colors group"
              >
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                Back to Curriculum
              </Link>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Module {selectedModule.id}</h2>
              <div className="text-xs text-emerald-200/70 mt-1">{selectedModule.title}</div>
            </div>
  
            <nav className="mt-4 space-y-2">
              {selectedModule.lessons.map((lesson, idx) => {
                const isActiveLesson = currentLessonIdx === idx;
                return (
                  <Link
                    key={lesson.id}
                    href={`/modules/${selectedModule.slug}/${idx + 1}`}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800/50 transition-colors ${isActiveLesson ? 'bg-emerald-800/30' : ''}`}
                  >
                    <div className="w-5 h-5 shrink-0 rounded-md flex items-center justify-center text-xs font-bold bg-[#D2E4D6] text-[#1E5631]">
                      {idx + 1}
                    </div>
                    
                    <span className="font-medium text-sm text-emerald-50 whitespace-normal break-words">
                      {lesson.title || `Lesson ${idx + 1}`}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Curriculum</h2>
              <p className="text-xs text-emerald-200/70 mt-1">6 Modules • 20 Lessons</p>
            </div>
  
            <nav className="space-y-1">
              {modules.map((mod) => (
                <Link
                  key={mod.label}
                  href={mod.href}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800/50 transition-colors"
                >
                  <mod.icon className="w-4 h-4 text-emerald-200" />
                  <span>{mod.label}</span>
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
  
      <div className="space-y-4 pt-4 border-t border-emerald-800">
        <Link 
          href="/resources"
          className="w-full bg-[#A36A3B] hover:bg-[#8F5B30] text-white text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
        >
          <Download className="w-4 h-4" />
          Download Module
        </Link>
  
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
      </div>
    </aside>
  );
}
