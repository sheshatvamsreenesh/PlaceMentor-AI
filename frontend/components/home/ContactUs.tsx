import {
  Building2,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="w-full bg-white pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-3 lg:pb-10">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.7fr_1fr] lg:gap-12 xl:px-0">

        {/* LEFT SIDE */}
        <div className="flex flex-col">

          {/* Badge */}
          <div className="mb-7">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-700">
              GET IN TOUCH
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[550px] text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
            Have Questions? We Are
            <br />
            Here To Assist You
          </h2>

          {/* Description */}
        <p className="mt-7 max-w-[540px] text-[18px] leading-8 text-slate-600">
            Whether you are a student preparing for campus placements or a
            TPO (Training &amp; Placement Officer) interested in institutional
            licensing for your college, reach out to our academic team.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 flex flex-col gap-5">

            {/* Email */}
            <div className="flex min-h-[104px] items-center rounded-[16px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue-600">
                <Mail className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="ml-5">
                <p className="text-[14px] font-semibold uppercase tracking-wide text-slate-500">
                  EMAIL SUPPORT
                </p>

                <p className="mt-0.5 text-[16px] font-bold text-slate-900">
                  support@placementor.ai
                </p>

                <p className="text-[14px] text-slate-500">
                  Response within 4 business hours
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex min-h-[104px] items-center rounded-[16px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-emerald-500">
                <Phone className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="ml-5">
                <p className="text-[14px] font-semibold uppercase tracking-wide text-slate-500">
                  COLLEGE PLACEMENT HELPLINE
                </p>

                <p className="mt-0.5 text-[16px] font-bold text-slate-900">
                  +91 1800-420-9000 (Toll Free)
                </p>

                <p className="text-[14px] text-slate-500">
                  Mon - Sat: 9:00 AM to 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Headquarters */}
            <div className="flex min-h-[104px] items-center rounded-[16px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-indigo-600">
                <Building2 className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="ml-5">
                <p className="text-[14px] font-semibold uppercase tracking-wide text-slate-500">
                  HEADQUARTERS
                </p>

                <p className="mt-0.5 text-[16px] font-bold text-slate-900">
                  PlaceMentor AI EdTech Labs
                </p>

                <p className="text-[14px] text-slate-500">
                  Koramangala 4th Block, Bengaluru, KA 560034
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="rounded-[20px] border border-slate-200 bg-slate-50 px-6 py-7 shadow-[0_3px_10px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8 lg:px-10 lg:py-9">

          {/* Form Heading */}
          <h3 className="text-[26px] font-extrabold leading-tight text-slate-900">
            Send us a Message
          </h3>

          <p className="mt-2 text-[16px] leading-6 text-slate-500">
            Fill in your details below and our team will get back to you promptly.
          </p>

          <form className="mt-7">

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-[14px] font-bold text-slate-800">
                  Your Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="e.g. Arjun Verma"
                  className="h-[51px] w-full rounded-[13px] border border-slate-300 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-bold text-slate-800">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="e.g. arjun@college.edu"
                  className="h-[51px] w-full rounded-[13px] border border-slate-300 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

            </div>

            {/* Row 2 */}
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-[14px] font-bold text-slate-800">
                  College / University Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. NIT Trichy"
                  className="h-[51px] w-full rounded-[13px] border border-slate-300 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-bold text-slate-800">
                  I am a...
                </label>

                <select
                  defaultValue="student"
                  className="h-[51px] w-full rounded-[13px] border border-slate-300 bg-white px-4 text-[16px] text-slate-800 outline-none focus:border-blue-500"
                >
                  <option value="student">
                    Engineering / College Student
                  </option>
                  <option value="tpo">
                    TPO / Placement Officer
                  </option>
                  <option value="college">
                    College Representative
                  </option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-[14px] font-bold text-slate-800">
                How can we help you? <span className="text-red-500">*</span>
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your target companies, roadmaps needed, or institutional trial request..."
                className="min-h-[122px] w-full resize-y rounded-[13px] border border-slate-300 bg-white px-4 py-3 text-[16px] leading-6 text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 flex h-[54px] w-full items-center justify-center gap-3 rounded-[13px] bg-blue-600 text-[16px] font-bold text-white shadow-[0_4px_10px_rgba(37,99,235,0.25)] transition hover:bg-blue-700"
            >
              <Send className="h-5 w-5" strokeWidth={2} />
              Submit Inquiry
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}