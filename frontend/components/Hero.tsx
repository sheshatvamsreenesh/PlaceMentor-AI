export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl px-6 py-16">
      {/* Left Side */}
      <div className="max-w-2xl">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
          Trusted by 50,000+ Students Across 300+ Engineering Colleges
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
          Your Complete
          <br />
          <span className="text-blue-600">Placement Preparation</span>
          <br />
          Platform
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
          Everything you need to prepare for placements—from aptitude and
          coding to resume building, mock interviews, company roadmaps, and
          progress tracking—all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Start Learning →
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100">
            ▶ Explore Features
          </button>
        </div>

        {/* Bottom Features */}
        <div className="mt-12 flex flex-wrap gap-10 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Zero Subscription Clutter
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Updated 2025 Syllabi
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            ATS Resume Scanner
          </div>
        </div>
      </div>
    </section>
  );
}