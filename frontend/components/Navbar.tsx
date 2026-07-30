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
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Brand />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Features</li>
          <li className="cursor-pointer hover:text-blue-600">Roadmap</li>
          <li className="cursor-pointer hover:text-blue-600">Resume Builder</li>
          <li className="cursor-pointer hover:text-blue-600">
            Mock Interviews
          </li>
          <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-gray-100"
          >
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              PD
            </div>

            {/* User Info */}
            <div className="hidden text-left md:block">
              <h3 className="font-semibold text-gray-900">Pro Demo</h3>
              <p className="text-sm text-gray-500">Pro Plan</p>
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
            <div className="absolute right-0 z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="border-b p-5">
                <h3 className="font-semibold">Pro Demo</h3>
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