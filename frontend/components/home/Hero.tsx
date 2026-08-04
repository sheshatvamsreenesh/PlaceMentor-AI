import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 pt-18 pb-16">
      {/* Left Side */}
      <div className="flex w-full items-start gap-16">
        <div className="w-[58%]">
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
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
            Start Learning →
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-800 transition hover:bg-gray-100">
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

    {/* Right Side - Hero Image */}
    <div className="w-[42%] -ml-6 mt-4 flex justify-start">
      <div className="relative mt-10 h-[490px] w-full max-w-[620px] overflow-visible">

    {/* Hero Image */}
    <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg">
      <Image
        src="/images/Placementor_AI_img.webp"
        alt="Students preparing for placements"
        fill
        sizes="(max-width:1024px) 100vw, 560px"
        className="object-cover object-[55%_50%]"
        priority
      />
    </div>

    {/* Top Left Card */}
    <div className="absolute -top-2 -left-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
          💻
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Coding Practice
          </p>
          <p className="text-xs text-gray-500">
            520+ Questions
          </p>
        </div>
      </div>
    </div>

    {/* Middle Right Card */}
    <div className="absolute top-36 -right-14 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-xl">
          🛣️
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Company Roadmaps
          </p>
          <p className="text-xs text-gray-500">
            18 Companies
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Left Card */}
    <div className="absolute bottom-5 left-5 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
          📈
        </div>
        <div>
          <p className="text-xs text-green-300 uppercase tracking-wide">
            Placement Ready
          </p>
          <p className="text-lg font-bold">
            Learning Path
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Right Card */}
    <div className="absolute bottom-3 -right-10 rounded-2xl bg-white px-5 py-4 shadow-2xl border border-gray-100">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl">
          📄
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Resume ATS
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">
              88/100
            </span>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
              PASSED
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}