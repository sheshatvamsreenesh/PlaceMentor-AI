"use client";

import {
  LayoutDashboard,
  Map,
  Calculator,
  FileText,
  MessageSquare,
  Building2,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    iconStyle: "bg-blue-50 border-blue-200 text-blue-500",
    tag: "Real-time Tracker",
    title: "Personalized Dashboard",
    description:
      "Track learning progress, completed modules, upcoming goals, and daily streak performance all in one consolidated hub.",
    points: ["Daily Goal Checklist", "Progress Analytics"],
  },
  {
    icon: Map,
    iconStyle: "bg-indigo-50 border-indigo-200 text-indigo-500",
    tag: "Company Specific",
    title: "Placement Roadmaps",
    description:
      "Step-by-step preparation paths tailored specifically to company recruitment patterns like TCS, Infosys, Accenture, Cognizant, Deloitte, and Capgemini.",
    points: ["Round-by-Round Syllabus", "Company-Specific Preparation"],
  },
  {
    icon: Calculator,
    iconStyle: "bg-emerald-50 border-emerald-200 text-emerald-500",
    tag: "Timed Practice",
    title: "Aptitude Practice",
    description:
      "Master core aptitude with topic-wise questions, formula sheets, and step-by-step explanations across Quant, Logical, Verbal, and Data Interpretation.",
    points: ["Quantitative & Logical", "Verbal & Data Interpretation"],
  },
  {
    icon: FileText,
    iconStyle: "bg-purple-50 border-purple-200 text-purple-500",
    tag: "ATS Optimized",
    title: "AI Resume Builder",
    description:
      "Build professional, ATS-friendly resumes with AI-powered suggestions tailored to your target role and placement requirements.",
    points: ["ATS-Friendly Templates", "AI-Powered Suggestions"],
  },
  {
    icon: MessageSquare,
    iconStyle: "bg-orange-50 border-orange-200 text-orange-500",
    tag: "AI Powered",
    title: "Mock Interviews",
    description:
      "Practice realistic technical and HR interviews with AI-powered sessions designed to improve confidence and interview readiness.",
    points: ["Technical Interviews", "HR Interview Practice"],
  },
  {
    icon: Building2,
    iconStyle: "bg-cyan-50 border-cyan-200 text-cyan-500",
    tag: "Recruitment Insights",
    title: "Company Insights",
    description:
      "Explore company-specific recruitment information, hiring patterns, expected skills, interview rounds, and placement preparation guidance.",
    points: ["Hiring Patterns", "Recruitment Insights"],
  },
];

export default function Features() {
  return (
    <main className="w-full bg-white text-[#0b1b3a]">
      {/* HERO SECTION */}
      <section className="px-6 pt-10 pb-12 md:pt-12 md:pb-14">
        <div className="mx-auto max-w-[1050px] text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[12px] font-medium text-blue-600">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            All-in-One Placement Preparation Suite
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[1000px] text-[40px] font-bold leading-[1.15] tracking-[-1.5px] text-[#071936] md:text-[42px]">
            Everything You Need to{" "}
            <span className="text-[#2161f5]">Ace Placements</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#526b8c]">
            From aptitude drills and coding challenges to ATS resume building
            and mock interviews — explore every tool designed to make you
            placement-ready for top companies like TCS, Infosys, Deloitte, and
            more.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#f7f9fc] px-6 py-16 md:py-[68px]">
        <div className="mx-auto max-w-[1050px]">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-600">
              All-in-One Campus Placement Suite
            </div>

            <h2 className="text-[30px] font-bold leading-tight tracking-[-1px] text-[#0b1b3a] md:text-[32px]">
              Designed for Practical Placement Readiness
            </h2>

            <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-[1.55] text-[#526b8c]">
              Clean, structured modules designed by placement officers and
              senior developers to get you campus-ready without guesswork.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[365px] flex-col rounded-[14px] border border-[#e1e7ef] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                >
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-[10px] border ${feature.iconStyle}`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-md border border-[#dfe6ef] bg-[#f7f9fc] px-2.5 py-1 text-[10px] font-medium text-[#344b6b]">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] text-[#0b1b3a]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[13px] leading-[1.55] text-[#526b8c]">
                    {feature.description}
                  </p>

                  {/* Divider + Points */}
                  <div className="mt-auto pt-5">
                    <div className="mb-2 border-t border-[#edf0f4]" />

                    {feature.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-center gap-2 py-1.5 text-[11px] text-[#415b7c]"
                      >
                        <CheckCircle2
                          size={13}
                          strokeWidth={2}
                          className="shrink-0 text-emerald-400"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}