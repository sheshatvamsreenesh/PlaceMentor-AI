import { Building2, Mail, Phone } from "lucide-react";

const contactItems = [
  {
    type: "EMAIL SUPPORT",
    value: "support@placementor.ai",
    detail: "Response within 4 business hours",
    icon: Mail,
    iconBg: "bg-blue-600",
  },
  {
    type: "COLLEGE PLACEMENT HELPLINE",
    value: "+91 1800-420-9000 (Toll Free)",
    detail: "Mon - Sat: 9:00 AM to 7:00 PM IST",
    icon: Phone,
    iconBg: "bg-emerald-600",
  },
  {
    type: "HEADQUARTERS",
    value: "PlaceMentor AI EdTech Labs",
    detail: "Koramangala 4th Block, Bengaluru, KA 560034",
    icon: Building2,
    iconBg: "bg-violet-600",
  },
];

export default function ContactInfo() {
  return (
    <div className="w-full max-w-[412px]">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.04em] text-blue-600">
          GET IN TOUCH
        </span>
      </div>

      {/* Heading */}
      <h2 className="max-w-[410px] text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1B3A]">
        Have Questions? We Are
        <br />
        Here To Assist You
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-[410px] text-[14px] font-normal leading-[1.6] text-[#526A8A]">
        Whether you are a student preparing for campus placements or a TPO
        (Training &amp; Placement Officer) interested in institutional
        licensing for your college, reach out to our academic team.
      </p>

      {/* Contact Cards */}
      <div className="mt-8 flex flex-col gap-3.5">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.type}
              className="flex min-h-[74px] w-full items-center rounded-[10px] border border-[#DFE7F1] bg-[#F8FAFD] px-[14px] py-[12px] shadow-[0_2px_6px_rgba(15,35,65,0.04)]"
            >
              {/* Icon */}
              <div
                className={`flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[7px] ${item.iconBg}`}
              >
                <Icon
                  size={19}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              {/* Text */}
              <div className="ml-3 min-w-0">
                <p className="text-[10px] font-semibold leading-[1.2] tracking-[0.02em] text-[#5A6F8C]">
                  {item.type}
                </p>

                {item.type === "EMAIL SUPPORT" ? (
                  <a
                    href="mailto:support@placementor.ai"
                    className="block text-[12px] font-bold leading-[1.35] text-[#0B1B3A]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[12px] font-bold leading-[1.35] text-[#0B1B3A]">
                    {item.value}
                  </p>
                )}

                <p className="text-[10px] font-normal leading-[1.35] text-[#6B819D]">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}