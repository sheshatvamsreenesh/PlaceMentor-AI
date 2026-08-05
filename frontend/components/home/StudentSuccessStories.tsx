"use client";

import Image from "next/image";
import {
  Star,
  Quote,
  GraduationCap,
  Building2,
} from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    college: "SRM Institute of Science & Tech",
    company: "TCS Digital",
    package: "₹7.2 LPA",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      '"Having everything organized in one platform made my placement preparation much easier. The company-specific roadmaps gave me exact insights into TCS NQT coding question formats."',
  },
  {
    name: "Karthik Raja",
    college: "Vellore Institute of Technology",
    company: "Deloitte Analyst",
    package: "₹8.5 LPA",
    image: "https://i.pravatar.cc/150?img=13",
    review:
      '"I loved the structured roadmap and progress tracking. Practicing mock interviews with the interactive framework boosted my confidence before Deloitte consulting interviews."',
  },
  {
    name: "Priya Nambiar",
    college: "PSG College of Technology",
    company: "Infosys DSE",
    package: "₹6.5 LPA",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      '"The mock interview practice boosted my confidence before campus placements. The ATS resume builder highlighted keywords I was missing, helping me pass screening on day 1!"',
  },
];

export default function StudentSuccessStories() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full bg-emerald-100 px-7 py-2 text-[13px] font-bold uppercase tracking-[0.16em] text-emerald-700">
            STUDENT SUCCESS STORIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-8 max-w-5xl text-center text-[58px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
          Real Stories from Placed Students
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-[22px] leading-[40px] text-slate-600">
          Hear how college students secured high-paying engineering and
          consulting roles using PlaceMentor AI.
        </p>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex h-[420px] flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#F5B301] text-[#F5B301]"
                    />
                  ))}
                </div>

                <Quote className="h-9 w-9 text-sky-100" />
              </div>

              {/* Review */}
              <p className="mt-8 flex-1 text-[18px] italic leading-[42px] text-slate-800">
                {item.review}
              </p>

              {/* Divider */}
              <div className="my-8 border-t border-slate-200" />

              {/* Profile */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-blue-500"
                />

                <div className="flex-1">
                  <h3 className="text-[24px] font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-1 text-[15px] text-slate-500">
                    <GraduationCap className="h-4 w-4" />
                    {item.college}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-[14px] font-semibold text-blue-700">
                      <Building2 className="h-4 w-4" />
                      {item.company}
                    </span>

                    <span className="rounded-md bg-emerald-100 px-3 py-1 text-[14px] font-bold text-emerald-700">
                      {item.package}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}