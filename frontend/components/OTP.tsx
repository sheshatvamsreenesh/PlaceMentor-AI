"use client";

import { useState, useRef, useEffect} from "react";
import { ShieldCheck, ArrowRight, Loader2, RotateCcw } from "lucide-react";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";

export default function OtpVerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const filled = otp.filter(Boolean).length;
  const progressPct = (filled / otp.length) * 100;
  const [cooldown, setCooldown] = useState(30);
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [resending, setResending] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  useEffect(() => {
    if (!email) {
      router.push("/register");
  }
}, [email, router]);
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").trim();
    if (/^\d{6}$/.test(pastedData)) {
      setOtp(pastedData.split(""));
      inputRefs.current[5]?.focus();
    }
  };
  const handleFocus = (index: number) => {
    const firstEmpty = otp.findIndex(digit => digit === "");

    if (firstEmpty !== -1 && index > firstEmpty) {
        inputRefs.current[firstEmpty]?.focus();
    }
  
  };
  const handleVerify = async () => {
    const email = sessionStorage.getItem("pendingEmail");
    if (!email) {
      router.push("/register");
      return;
    }

    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setStatus("error");
      setErrorMsg("Please enter the complete 6-digit OTP.");
      return;
    }
  };
 
  const maskEmail = (email:string) => {

    const [username, domain] = email.split("@");

    if (!domain) return email;

    if (username.length <= 2) {
      return `${username[0]}***@${domain}`;
    }

    return `${username.slice(0, 2)}***@${domain}`;
};
  useEffect(() => {
  const lastFilledIndex = otp.findLastIndex(digit => digit !== "");

  if (lastFilledIndex !== -1 && lastFilledIndex < otp.length - 1) {
    inputRefs.current[lastFilledIndex + 1]?.focus();
  }
}, [otp]);

  const handleResend = async () => {
    if (cooldown > 0 || resending) return;

  setResending(true);
  setErrorMsg("");

  try {
    const response = await fetch("http://localhost:8000/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMsg(
        data.detail || "Could not resend OTP. Please try again."
      );
      return;
    }

    // Backend successfully generated/sent a new OTP
    setCooldown(30);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();

  } catch (error) {
    setErrorMsg("Could not connect to the server. Please try again.");
  } finally {
    setResending(false);
    setCooldown(30); // Reset cooldown to 30 seconds after resending
  }
    
  };

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);
  return (
    <div className="min-h-160 w-full flex items-center justify-center bg-white relative overflow-hidden px-4 py-16">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-140 h-140 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(36,114,206,0.14) 0%, rgba(36,114,206,0) 70%)" }}
      />

      <div className="relative w-full max-w-sm">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
          style={{ backgroundColor: "#EAF2FC" }}
        >
          <ShieldCheck size={20} color="#2472CE" strokeWidth={2.2} />
        </div>

        <h1
          className="text-[26px] leading-tight font-semibold mb-2"
          style={{ color: "#0B1B2B", letterSpacing: "-0.01em" }}
        >
          Verify it&apos;s you
        </h1>
        {email && (
        <p className="text-sm mb-8" style={{ color: "#5B6B7D" }}>
          Enter the 6-digit code sent to 
          <span style={{ color: "#0B1B2B", fontWeight: 500 }}> {maskEmail(email)}</span>.{" "}
          
        </p>
        )}

        {/* OTP boxes */}
        <div onPaste={handlePaste} className="flex gap-2.5 justify-between mb-2.5">
          {otp.map((digit, i) => (
            <input
              ref={(el) => {(inputRefs.current[i] = el)}}
              key={i}
              type="text"
              value={digit}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const newOtp = [...otp];
                newOtp[i] = value.slice(-1);
                setOtp(newOtp);
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();

                  const newOtp = [...otp];

                  if (otp[i]) {
                    // Current box has a digit → delete it
                    newOtp[i] = "";
                    setOtp(newOtp);
                  } else if (i > 0) {
                    // Current box is empty → go left and delete previous digit
                    newOtp[i - 1] = "";
                    setOtp(newOtp);

                    inputRefs.current[i - 1]?.focus();
                  }
                }
              }}
              spellCheck={false}
              onFocus={() => handleFocus(i)}
              autoCorrect="off"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl text-gray-900"
            />
          ))}
        </div>

        {/* fill track — signature element */}
        <div className="h-1 w-full rounded-full mb-6 overflow-hidden" style={{ backgroundColor: "#EDF1F6" }}>
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progressPct}%`
            }}
          />
        </div>

        <div className="min-h-5 mb-5" aria-live="polite">
          {status === "error" && (
            <p className="text-sm" style={{ color: "#D64545" }}>
              {errorMsg}
            </p>
          )}
          {status === "success" && (
            <p className="text-sm font-medium" style={{ color: "#1F9D66" }}>
              Verified — signing you in…
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => handleVerify()}
          disabled={
            otp.join("").length !== 6 ||
            status === "verifying" ||
            status === "success"
          }
          className="w-full h-12 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-150 disabled:cursor-not-allowed"
          style={{
            backgroundColor: otp.join("").length === 6 && status !== "success" ? "#2472CE" : "#B9D2EE",
            color: "#FFFFFF",
          }}
        >
          {status === "verifying" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Verifying
            </>
          ) : status === "success" ? (
            "Verified"
          ) : (
            <>
              Verify &amp; continue <ArrowRight size={16} />
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm" style={{ color: "#5B6B7D" }}>
          {cooldown > 0 ? (
            <span>
              Resend code in <span style={{ color: "#0B1B2B", fontWeight: 500 }}>0:{String(cooldown).padStart(2, "0")}</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="inline-flex items-center gap-1.5 font-medium hover:opacity-70 transition-opacity disabled:opacity-50"
              style={{ color: "#2472CE" }}
            >
              <RotateCcw size={13} className={resending ? "animate-spin" : ""} />
              {resending ? "Sending…" : "Resend code"}
            </button>
          )}
        </div>
      </div>
    </div>
  );

}
