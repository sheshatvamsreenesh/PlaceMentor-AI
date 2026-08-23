import Image from "next/image";

export default function Brand({ className = "", footer = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.svg"
        alt="PlaceMentor AI Logo"
        width={48}
        height={48}
        priority
        className="h-10 w-10 md:h-12 md:w-12"
      />

      <div className="flex flex-col">
        <h1
          className={`text-xl font-bold tracking-tight md:text-2xl ${
            footer ? "text-white" : "text-slate-900"
          }`}
        >
          PlaceMentor{" "}
          <span className="text-[#2472CE]">AI</span>
        </h1>

        <p
          className={`text-xs md:text-sm ${
            footer ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Smart Career Guidance
        </p>
      </div>
    </div>
  );
}