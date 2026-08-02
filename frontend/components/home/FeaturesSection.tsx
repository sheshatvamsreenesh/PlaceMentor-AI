import {
  BookOpen,
  CircleHelp,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "50+ Learning Modules",
    description: "Comprehensive quants, coding, & core CS theory",
  },
  {
    icon: CircleHelp,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    title: "500+ Practice Questions",
    description: "Curated by top campus recruiters & engineers",
  },
  {
    icon: MapPin,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    title: "Company Roadmaps",
    description: "Detailed patterns for TCS, Infosys, Deloitte & more",
  },
  {
    icon: BriefcaseBusiness,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    title: "Resume & Interview Toolkit",
    description: "ATS optimization and interactive mock simulator",
  },
];

const companies = [
  { name: "TCS", subtitle: "Ninja & Digital" },
  { name: "Infosys", subtitle: "SE & DSE" },
  { name: "Accenture", subtitle: "ASE & FSE" },
  { name: "Cognizant", subtitle: "GenC & Next" },
  { name: "Deloitte", subtitle: "Tech Consultant" },
  { name: "Capgemini", subtitle: "Software Lead" },
  { name: "Amazon", subtitle: "SDE-1 Freshers" },
  { name: "Wipro", subtitle: "Elite & Turbo" },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg}`}
                >
                  <Icon
                    className={`${feature.iconColor}`}
                    size={28}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Heading */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            PREPARE FOR TOP HIRING PATTERNS ACROSS PREMIER IT & CONSULTING FIRMS
          </p>
        </div>

        {/* Company Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-full border border-gray-200 bg-gray-50 px-6 py-3 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="text-center font-semibold text-gray-900">
                {company.name}
              </p>
              <p className="text-center text-sm text-gray-500">
                {company.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}