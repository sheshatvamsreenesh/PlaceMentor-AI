"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I start preparing with PlaceMentor AI?",
    answer:
      "Sign up for a free account, select your target companies or role (e.g., Software Engineer, Data Analyst, Product Role), and follow the step-by-step personalized roadmap starting with fundamental skill assessment.",
  },
  {
    question: "Can beginners with zero prior preparation use this platform?",
    answer: "",
  },
  {
    question: "Does it include hands-on coding practice with full problem sets?",
    answer: "",
  },
  {
    question: "Can I build and download an ATS-friendly resume directly?",
    answer: "",
  },
  {
    question: "How are mock interviews conducted on PlaceMentor AI?",
    answer: "",
  },
  {
    question:
      "Are company roadmaps updated according to the latest recruitment patterns?",
    answer: "",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white pt-24 pb-28 px-6">
      <div className="mx-auto max-w-[760px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full bg-[#E8F0FF] px-5 py-[7px] text-[12px] font-semibold tracking-[0.08em] text-[#2563EB]">
            HELP & GUIDANCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-center text-[52px] font-bold leading-[60px] tracking-[-0.03em] text-[#0F172A]">
          Frequently Asked Questions
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[620px] text-center text-[19px] leading-8 text-[#64748B]">
          Everything you need to know about preparing for campus placements with
          PlaceMentor AI.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-8 flex h-[56px] max-w-[560px] items-center rounded-xl border border-[#CBD5E1] bg-white px-5 shadow-sm">
          <Search
            className="mr-3 h-5 w-5 text-[#94A3B8]"
            strokeWidth={2}
          />

          <input
            type="text"
            placeholder="Search placement questions (e.g. coding, mock interviews, resu..."
            className="w-full bg-transparent text-[15px] text-[#334155] placeholder:text-[#94A3B8] outline-none"
          />
        </div>

        {/* FAQ Cards */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-[23px] text-left"
                >
                  <span className="text-[18px] font-semibold leading-7 text-[#0F172A]">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp
                      className="h-5 w-5 text-[#94A3B8]"
                      strokeWidth={2}
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 text-[#94A3B8]"
                      strokeWidth={2}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-[#E2E8F0] px-6 py-5">
                    <p className="text-[17px] leading-8 text-[#64748B]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}