export default function Hero() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 pt-18 pb-16">
      <div className="flex w-full justify-between items-start">
        {/* Left Side */}
        <div className="w-[62%]">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            Trusted by 50,000+ Students Across 300+ Engineering Colleges
          </div>

          {/* Heading */}
          <h1 className="mt-10 text-[68px] font-black leading-[1.02] tracking-[-2px] text-[#111827]">
            Your Complete
            <br />
            <span className="whitespace-nowrap text-[#2563EB]">
            Placement Preparation
            </span>
            <br />
            Platform
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[680px] text-[19px] leading-10 text-[#4B5563]">
            Everything you need to prepare for placements—from aptitude and
            coding to resume building, mock interviews, company roadmaps, and
            progress tracking—all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-5">
            <button className="rounded-2xl bg-[#2563EB] px-10 py-5 text-xl font-semibold text-white shadow-md transition hover:bg-[#1D4ED8]">
              Start Learning →
            </button>

            <button className="rounded-2xl border border-gray-300 bg-white px-10 py-5 text-xl font-semibold text-gray-900 transition hover:bg-gray-50">
              ▶ Explore Features
            </button>
          </div>

          {/* Bottom Features */}
          <div className="mt-12 flex flex-wrap items-center gap-10 text-[17px] text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Zero Subscription Clutter
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Updated 2025 Syllabi
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              ATS Resume Scanner
            </div>
          </div>
        </div>

        {/* Empty Right Side (keeps layout same as AI website) */}
        <div className="w-[38%]"></div>
      </div>
    </section>
  );
}