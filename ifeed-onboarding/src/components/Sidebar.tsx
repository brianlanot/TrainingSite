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
  Download 
} from "lucide-react";
import { curriculumData } from "./curriculumData";

const modules = [
  { label: "Introduction", icon: GraduationCap, href: "/modules/1" },
  { label: "Managing Ingredients", icon: Layers, href: "/modules/2" },
  { label: "Learning Nutrients", icon: PawPrint, href: "/modules/3" },
  { label: "Feed Formulation", icon: FlaskConical, href: "/modules/4" },
  { label: "Advanced Features", icon: Award, href: "/modules/5" },
];

export default function Sidebar() {
  const pathname = usePathname() || "/";
  const isModulesTab = pathname.startsWith("/modules");

  const parts = pathname.split("/");
  const currentModuleId = parts[2] ? parseInt(parts[2], 10) : undefined;
  const currentLessonIdx = parts[3] ? parseInt(parts[3], 10) - 1 : undefined;

  const activeModule = curriculumData.find((m) => m.id === currentModuleId) || curriculumData.find((m) => m.active) || curriculumData[0];

  return (
    <aside className="w-64 bg-[#1E5631] text-white flex flex-col justify-between p-6 h-[calc(100vh-4rem)] sticky top-16">
      <div className="space-y-6">
        {isModulesTab ? (
          <>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Module {activeModule.id}</h2>
              <div className="text-xs text-emerald-200/70 mt-1">{activeModule.title}</div>
            </div>

            <nav className="mt-4 space-y-2">
              {activeModule.lessons.map((lesson, idx) => {
                const isActiveLesson = currentLessonIdx === idx;
                return (
                  <Link
                    key={lesson.id}
                    href={`/modules/${activeModule.id}/${idx + 1}`}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800/50 transition-colors ${isActiveLesson ? 'bg-emerald-800/30' : ''}`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold bg-[#D2E4D6] text-[#1E5631]`}>
                      {idx + 1}
                    </div>
                    <span className="font-medium text-sm text-emerald-50">Lesson {idx + 1}</span>
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
        <button className="w-full bg-[#A36A3B] hover:bg-[#8F5B30] text-white text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md">
          <Download className="w-4 h-4" />
          Download Templates
        </button>

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
