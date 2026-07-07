import { Clock, Trophy } from "lucide-react";
import CurriculumList from "../../components/CurriculumList";

// The main curriculum landing page.
export default function CurriculumPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Hero Header Card */}
      {/* Welcome card */}
      <div className="bg-[#1E5631] rounded-2xl p-8 text-white relative overflow-hidden shadow-sm">
        <div className="max-w-xl space-y-3 z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight">iFeed V2 Onboarding Curriculum</h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Master the science of carabao nutrition across 6 modules and 20 lessons. Total time: ~3.5 hours.
          </p>
        </div>
      </div>

      {/* Expandable module list */}
      <CurriculumList />

    </div>
  );
}