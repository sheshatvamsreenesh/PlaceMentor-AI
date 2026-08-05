import {
  Compass,
  Target,
  TrendingUp,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
    title: "Structured Learning",
    description:
      "Follow a guided, step-by-step placement preparation journey tailored to your academic background.",
  },
  {
    icon: Target,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    border: "border-indigo-100",
    title: "Company-focused Preparation",
    description:
      "Learn according to specific company hiring patterns, round cutoffs, and recent interview questions.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
    title: "Track Your Growth",
    description:
      "Measure continuous improvement through skill scorecards, activity graphs, and performance diagnostics.",
  },
  {
    icon: Layers3,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    border: "border-purple-100",
    title: "Everything in One Place",
    description:
      "Access coding, aptitude, resume builder, mock interviews, and learning resources without juggling multiple tools.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex rounded-full bg-indigo-100 px-6 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            BUILT FOR FRESH GRADUATES
          </div>

          <h2 className="mt-7 text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900">
            Why Choose PlaceMentor AI?
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg lg:text-xl leading-8 text-slate-600">
            Built specifically to solve the fragmented preparation experience
            college students face during campus drives.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex h-[400px] flex-col rounded-[26px] border border-slate-200 bg-white px-8 py-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${item.border} ${item.iconBg}`}
                >
                  <Icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-auto">
                  {/* Divider */}
                  <div className="border-t border-slate-200" />

                  {/* Verified Badge */}
                  <div className="mt-4 flex items-center gap-2 text-base font-semibold text-emerald-600">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      100% Verified Method
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}