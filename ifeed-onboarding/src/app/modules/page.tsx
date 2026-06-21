import { Clock, Download, ChevronLeft, ChevronRight } from "lucide-react";

export default function ModulesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 relative">

      <div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
        {/* faint background image overlay like the design */}
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.png')] bg-cover bg-center pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-[#1E5631]">Lesson 1: Lesson Title</h1>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column (timeline) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <div className="text-sm font-bold text-[#1E5631]">1</div>
                  </div>
                  <div className="w-px flex-1 bg-gray-200 mt-3" />
                </div>

                <div className="flex-1">
                  <div className="font-bold">1. Step 1</div>
                  <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <div className="h-44 bg-gray-200 rounded flex items-center justify-center text-gray-400">Screenshot / Media</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <div className="text-sm font-bold text-[#1E5631]">2</div>
                  </div>
                  <div className="w-px flex-1 bg-gray-200 mt-3" />
                </div>

                <div className="flex-1">
                  <div className="font-bold">2. Step 2</div>
                  <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <div className="h-60 bg-gray-200 rounded flex items-center justify-center text-gray-400">Screenshot / Media</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <div className="text-sm font-bold text-[#1E5631]">3</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-bold">3. Step 3</div>
                  <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              {/* Bottom nav (prev/next) */}
              <div className="flex items-center justify-between pt-8">
                <button className="flex items-center gap-2 border border-[#1E5631] text-[#1E5631] px-4 py-3 rounded-full">
                  <ChevronLeft className="w-4 h-4" />
                  Previous Lesson
                </button>

                <button className="flex items-center gap-2 bg-[#E79258] text-white px-6 py-3 rounded-full">
                  Next Lesson
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right column (cards) */}
            <aside className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700">Essential Documents</div>
                  </div>
                </div>

                <div className="mt-3 space-y-3">
                  <button className="w-full flex items-center justify-between gap-3 bg-[#A36A3B]/10 hover:bg-[#A36A3B]/20 text-[#8F5B30] px-3 py-2 rounded-lg">
                    <div className="text-sm">Inventory Excel Template</div>
                    <Download className="w-4 h-4" />
                  </button>

                  <button className="w-full flex items-center justify-between gap-3 bg-[#A36A3B] px-3 py-2 rounded-lg text-white hover:bg-[#8F5B30]">
                    <div className="text-sm">Local Ingredient Guide</div>
                    <Download className="w-4 h-4" />
                  </button>

                  <button className="w-full flex items-center justify-between gap-3 bg-[#A36A3B] px-3 py-2 rounded-lg text-white hover:bg-[#8F5B30]">
                    <div className="text-sm">Nutrient Cheat Sheet</div>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Course progress removed per request */}
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
