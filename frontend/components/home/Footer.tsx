"use client";
import Brand from "../brand";
import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0f172a] text-white">
      <div className="mx-auto max-w-[1210px] px-6 py-14 lg:px-0 lg:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">

          {/* BRAND */}
          <div className="max-w-[410px]">

            {/* Logo */}
            <Brand footer />

            {/* Description */}
            <p className="mt-6 max-w-[390px] text-[16px] leading-7 text-slate-400">
              PlaceMentor AI is a structured placement preparation
              platform for college engineering &amp; computer science
              students to crack campus recruitment tests, coding rounds,
              and corporate interviews.
            </p>

        {/* Social Icons */}
        <div className="mt-7 flex items-center gap-3">

        {/* LinkedIn */}
        <a
             href="#"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
        >
        <FaLinkedinIn className="h-4 w-4" />
        </a>

        {/* Instagram */}
        <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
        >
        <FaInstagram className="h-4 w-4" />
        </a>

        {/* GitHub */}
        <a
          href="#"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
        >
        <FaGithub className="h-4 w-4" />
        </a>
    </div>
</div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-white">
              COMPANY
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                About PlaceMentor
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-[14px] text-slate-400 transition hover:text-white"
              >
                Careers
                <span className="rounded-[5px] bg-emerald-500 px-2 py-0.5 text-[11px] font-bold text-emerald-950">
                  HIRING
                </span>
              </a>

              <a
                href="/contact"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Contact Support
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                For Colleges &amp; TPOs
              </a>

            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-white">
              RESOURCES
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Placement Blog
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Placement Tips &amp; Strategy
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Interview Guides &amp; STAR Method
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                TCS &amp; Infosys Syllabus
              </a>

            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-white">
              SUPPORT
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Help Center &amp; FAQs
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-[14px] text-slate-400 transition hover:text-white"
              >
                Security
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-slate-800 pt-7 lg:mt-14">

          <div className="flex flex-col gap-5 text-[14px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p>
              © 2026 PlaceMentor AI Technologies Inc. All rights reserved.
            </p>

            {/* Bottom Right */}
            <div className="flex items-center gap-5">

              <span>
                Designed for College Placements
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-2 rounded-[8px] bg-slate-800 px-4 py-2 font-semibold text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </button>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}