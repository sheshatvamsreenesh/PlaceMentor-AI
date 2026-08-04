"use client";

import { useState } from "react";
import Brand from "./brand";
import {
  ChevronDown,
  LayoutDashboard,
  Map,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-5">
      <div className="relative -left-10">
          <Brand />
      </div>
        {/* Navigation Links */}
        <ul className="hidden items-center gap-10 text-[15px] font-medium text-slate-700 md:flex">
          <li className="transition-colors hover:text-blue-600">Home</li>
          <li className="transition-colors hover:text-blue-600">Features</li>
          <li className="transition-colors hover:text-blue-600">Roadmap</li>
          <li className="transition-colors hover:text-blue-600">Resume Builder</li>
          <li className="transition-colors hover:text-blue-600">
            Mock Interviews
          </li>
          <li className="transition-colors hover:text-blue-600">Dashboard</li>
          <li className="transition-colors hover:text-blue-600">Contact</li>
        </ul>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-slate-50"
          >
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] font-semibold text-white">
             U
            </div>

            {/* User Info */}
            <div className="hidden text-left md:block">
              <h3 className="text-[15px] font-semibold text-slate-900">User</h3>
              <p className="text-xs text-slate-500">Pro Plan</p>
            </div>

            {/* Arrow */}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="border-b p-5">
                <h3 className="font-semibold">User</h3>
                <p className="text-sm text-gray-500">
                  pro@placementor.ai
                </p>
              </div>

              <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100">
                <LayoutDashboard size={18} />
                My Dashboard
              </button>

              <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100">
                <Map size={18} />
                Company Roadmaps
              </button>

              <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100">
                <FileText size={18} />
                My ATS Resume
              </button>

              <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100">
                <Settings size={18} />
                Settings
              </button>

              <hr />

              <button className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}