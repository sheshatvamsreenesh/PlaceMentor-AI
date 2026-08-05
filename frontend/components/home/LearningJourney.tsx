import {
  UserRound,
  Target,
  MapPinned,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Mic,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    icon: UserRound,
    title: "Profile Setup",
    description:
      "Set degree, batch, target companies, & dream salary goals",
    color: "text-blue-600",
  },
  {
    step: "STEP 02",
    icon: Target,
    title: "Skill Assessment",
    description:
      "Gauge baseline in Aptitude, CS Fundamentals & Coding",
    color: "text-blue-600",
  },
  {
    step: "STEP 03",
    icon: MapPinned,
    title: "Personalized Roadmap",
    description:
      "Receive tailored weekly study plan aligned with company rounds",
    color: "text-blue-600",
  },
  {
    step: "STEP 04",
    icon: CalendarDays,
    title: "Daily Practice",
    description:
      "Solve 3 questions daily with step-by-step explanations",
    color: "text-blue-600",
  },
  {
    step: "STEP 05",
    icon: ClipboardCheck,
    title: "Mock Tests",
    description:
      "Take timed, full-length company simulation exams",
    color: "text-blue-600",
  },
  {
    step: "STEP 06",
    icon: FileText,
    title: "Resume Building",
    description:
      "Create single-column ATS verified resumes & projects",
    color: "text-blue-600",
  },
  {
    step: "STEP 07",
    icon: Mic,
    title: "Mock Interviews",
    description:
      "Practice HR, Tech & Behavioral scenarios with STAR method",
    color: "text-blue-600",
  },
  {
    step: "STEP 08",
    icon: WandSparkles,
    title: "Placement Ready",
    description:
      "Walk into campus drives with 100% confidence",
    color: "text-emerald-500",
    highlight: true,
  },
];

export default function LearningJourney() {
  return (
    <section className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-[1600px] px-6">

        <div className="flex justify-center">
          <span className="rounded-full bg-emerald-100 px-8 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            STEP-BY-STEP PREPARATION WORKFLOW
          </span>
        </div>

        <h2 className="mx-auto mt-8 max-w-7xl text-center text-5xl font-extrabold tracking-tight text-slate-900 lg:text-[60px]">
          Your Structured Learning Journey
        </h2>

        <p className="mx-auto mt-7 max-w-4xl text-center text-lg leading-relaxed text-slate-600 lg:text-xl">
          Follow a clear, proven pathway designed to turn fresh engineering &
          college graduates into high-value corporate hires.
        </p>

        {/* Desktop */}
        <div className="mt-16 hidden justify-between lg:flex">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="flex items-center"
              >
                <div
                  className={`relative flex h-[320px] w-full max-w-[176px] flex-col items-center rounded-[24px] border px-5 pt-6 pb-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]
                  ${
                    item.highlight
                      ? "border-emerald-400 bg-gradient-to-b from-emerald-50 to-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`rounded-full px-4 py-1 text-[11px] font-bold tracking-wide
                    ${
                      item.highlight
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.step}
                  </span>

                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                    <Icon className={`h-7 w-7 ${item.color}`} />
                  </div>

                  <h3 className="mt-6 text-[17px] font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[145px] text-[13px] leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="h-[2px] w-5 bg-slate-200"></div>
                )}
                              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className={`rounded-[24px] border p-6 text-center shadow-sm ${
                  item.highlight
                    ? "border-emerald-400 bg-gradient-to-b from-emerald-50 to-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-4 py-1 text-[11px] font-bold tracking-wide ${
                    item.highlight
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {item.step}
                </span>

                <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <Icon className={`h-7 w-7 ${item.color}`} />
                </div>

                <h3 className="mt-5 text-[20px] font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[230px] text-[14px] leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}