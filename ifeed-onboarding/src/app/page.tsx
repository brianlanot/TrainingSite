import { ArrowRight, Wallet, FlaskConical, Smartphone, Lock } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('bg-farm.jpg')",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 pb-20 pt-8 space-y-8">

        {/*Hero Section*/}
        <section
          className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('bg-color.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>

          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] leading-tight mb-4">
              Carabao Feed Formulation<br />with <span className="text-[#1E5631]">iFeed V2</span>
            </h1>
            <p className="text-[#2B2D42]/90 font-medium text-lg mb-8 max-w-xl">
              Empowering Filipino farmers with scientific nutrition tools to improve carabao health, milk yield, and draft power through optimized feeding.
            </p>
            <Link
              href="/curriculum"
              className="bg-[#A36A3B] hover:bg-[#e09255] transition-colors text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 shadow-md w-fit"
            >
              Start Learning <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/*About Section*/}
        <section className="bg-[#fceeed]/95 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-[#1E5631] font-bold text-xl mb-4">About iFeed V2</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            iFeed version 2 is a web-based feed formulation cost optimization system designed to assist carabao farmers in creating optimal feed formulations through ingredient and nutrient management. It utilizes the Simplex Algorithm to generate formulations based on nutritional requirements derived from user specifications. User specifications are made easier through a "google form like" survey to identify the proper feed nutrients the carabao needs. The system is purely focused on carabao feed formulations and formulation maintenance.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://i-feed-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E5631] hover:bg-[#4A7A5A] text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2 shadow-sm text-sm"
            >
              Link to iFeed V2
            </a>
          </div>
        </section>

        {/*Features Grid*/}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-[#fceeed]/95 backdrop-blur-md rounded-xl p-8 shadow-sm">
            <div className="bg-[#2B2D42] w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4">
              <Wallet size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Cost Optimization</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Reduce input costs by up to 15% through mathematically optimized ingredient balancing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#fceeed]/95 backdrop-blur-md rounded-xl p-8 shadow-sm">
            <div className="bg-[#2B2D42] w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4">
              <FlaskConical size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Scientific Accuracy</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Leveraging the Simplex Algorithm to ensure precise nutritional requirements are met every time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#fceeed]/95 backdrop-blur-md rounded-xl p-8 shadow-sm">
            <div className="bg-[#2B2D42] w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4">
              <Smartphone size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Mobile Responsive</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Designed for the field. Access critical formulation tools on any device, anywhere.
            </p>
          </div>
        </section>

        {/*How it Works Section*/}
        <section className="bg-[#fceeed]/95 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-gray-900 rounded-full"></div>
            <h2 className="text-gray-900 font-bold text-xl">How it Works</h2>
          </div>

          <div className="space-y-6 pl-2">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="mt-1 text-[#1E5631]">
                <Lock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 tracking-wider mb-1">STEP 1: DATA INPUT</h4>
                <p className="text-gray-600 text-sm">Define available raw materials and their current local market prices.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="mt-1 text-[#1E5631]">
                <Lock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 tracking-wider mb-1">STEP 2: OPTIMIZATION</h4>
                <p className="text-gray-600 text-sm">The Simplex Algorithm calculates the least-cost combination that meets all nutritional needs.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="mt-1 text-[#1E5631]">
                <Lock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 tracking-wider mb-1">STEP 3: FORMULATION</h4>
                <p className="text-gray-600 text-sm">Receive a detailed feeding blueprint ready for farm-wide implementation.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* --- Footer --- */}
      <footer className="bg-[#1E5631] backdrop-blur-sm py-6 text-center border-t border-gray-200">
        <p className="text-xs font-bold text-gray-900">
          © 2026 - iFeed V2 Onboarding
        </p>
        <p className="text-xs text-[#fceeed] mt-1">
          Empowering Carabao Farmers with Feed Formulation
        </p>
      </footer>
    </main>
  );
}