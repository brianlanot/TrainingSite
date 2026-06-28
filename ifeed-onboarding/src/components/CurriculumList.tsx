"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle2, Lock } from "lucide-react";
import { curriculumData } from "./curriculumData";
import Link from "next/link";


export default function CurriculumList() {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleModule = (id: number) => {
    if (expandedModules.includes(id)) {
      setExpandedModules(expandedModules.filter((mId) => mId !== id));
    } else {
      setExpandedModules([...expandedModules, id]);
    }
  };

  return (
    <div className="space-y-4 pt-2">
      {curriculumData.map((item) => {
        const isExpanded = expandedModules.includes(item.id);

        return (
          <div 
            key={item.id}
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs relative transition-all duration-200`}
          >
            {/*Dark Green Left Accent Border*/}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E5631]" />

            {/*Header Accordion Row*/}
            <div 
              onClick={() => toggleModule(item.id)}
              className={`p-5 pl-7 flex items-start justify-between gap-4 cursor-pointer select-none transition-colors ${
                isExpanded ? "bg-[#F9ECE7]/40" : "hover:bg-gray-50/50"
              }`}
            >
              <div className="flex gap-4">
                {/*Module Icon Container*/}
                <div className="mt-0.5">
                  
                    <div className="w-6 h-6 rounded-md bg-[#D2E4D6] flex items-center justify-center text-xs font-bold text-[#1E5631]">
                      {item.id}
                    </div>
                  
                </div>

                {/*Module Details*/}
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-800 text-base">
                  {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm font-small text-gray-500">
                    <span>{item.lessonsCount} lessons</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                    <span>•</span>
                    <span className="text-gray-500">Objective: {item.objective}</span>
                  </div>
                </div>
              </div>

              {/*Status & Toggle Controls*/}
              <div className="flex items-center gap-4 pl-4" onClick={(e) => e.stopPropagation()}>

                <button 
                  onClick={() => toggleModule(item.id)}
                  className="text-xs font-bold text-[#A36A3B] hover:text-[#8F5B30] flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  View Lessons
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/*Expanded Content Panel*/}
            <div 
              className={`transition-all duration-300 ease-in-out border-t border-gray-100 overflow-hidden ${
                isExpanded ? "max-h-[600px] opacity-100 bg-[#F9ECE7]/40 p-5 pl-7 pr-5" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="space-y-4">
                {/*Lessons Stack List*/}
                <div className="space-y-1">
                  {item.lessons.map((lesson, idx) => (
                    <Link 
                      key={lesson.id} 
                      href={`/modules/${item.slug}/${idx + 1}`}
                      className="flex items-center justify-between bg-[#F1E8E4]/40 hover:bg-[#F1E8E4]/80 px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-1 group"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 transition-transform duration-200 group-hover:scale-110" />
                        <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                          Lesson {idx + 1}: {lesson.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors">{lesson.duration}</span>
                    </Link>
                  ))}
                </div>

                {/*Start Module Button*/}
                <div className="pt-2">
                  <Link 
                    href={`/modules/${item.slug}`} 
                    className="block w-full bg-[#A36A3B] hover:bg-[#8F5B30] text-white text-center font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-xs tracking-wide"
                  >
                    Start Module
                  </Link>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}