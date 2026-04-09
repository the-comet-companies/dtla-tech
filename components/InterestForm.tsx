"use client";

import { useState, useTransition } from "react";
import { submitStep1, submitStep2 } from "@/app/actions";
import { differenceSection, differenceItems, interestFormSection, interestOptions, shopTypeOptions, orderVolumeOptions } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function InterestForm() {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleStep1(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await submitStep1(formData);
      if (result.success) {
        setEmail(formData.get("email") as string);
        setStep(2);
      } else {
        setError(result.error || "Something went wrong.");
      }
    });
  }

  function handleStep2(formData: FormData) {
    setError(null);
    formData.append("email", email);
    startTransition(async () => {
      const result = await submitStep2(formData);
      if (result.success) {
        setIsComplete(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    });
  }

  const inputClasses =
    "w-full rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3.5 text-[var(--text)] text-[0.9375rem] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--brand)] focus:shadow-[var(--shadow-focus)] transition-all duration-200";

  return (
    <section
      id="interest-form"
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)]"
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]">

        {/* ===== The DTLA Print Difference ===== */}
        <div className="mb-24" data-scroll-section>
          <div className="text-center mb-16" data-scroll-heading>
            <SectionHeading
              label={differenceSection.label}
              title={differenceSection.title}
              subtitle={differenceSection.subtitle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {differenceItems.map((item, i) => (
              <div key={item.title} data-scroll-item className="relative pl-8">
                {/* Vertical accent line */}
                <div className="absolute left-0 top-1 w-[3px] h-8 rounded-full bg-[var(--brand)] opacity-40" />
                <h3 className="text-[0.9375rem] font-bold text-[var(--text)] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[0.8125rem] leading-relaxed text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Interest Form ===== */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12" data-animate="fade-up">
            <SectionHeading
              label={interestFormSection.label}
              title={interestFormSection.title}
              subtitle={interestFormSection.subtitle}
            />
          </div>

          {isComplete ? (
            <div
              className="bg-[var(--bg-card)] rounded-[14px] border border-[var(--border)] p-10 md:p-14 text-center shadow-[var(--shadow)]"
              data-animate="scale"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[rgba(74,222,128,0.15)] mb-6">
                <svg className="w-7 h-7 text-[var(--text-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-3">
                {interestFormSection.successTitle}
              </h3>
              <p className="text-[0.9375rem] text-[var(--text)] opacity-75">
                {interestFormSection.successMessage}
              </p>
            </div>
          ) : (
            <div className="bg-[var(--bg-card)] rounded-[14px] border border-[var(--border)] p-7 md:p-10 shadow-[var(--shadow)]">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      step === 1
                        ? "bg-[var(--brand)] text-white"
                        : "bg-[var(--brand-10)] text-[var(--brand)]"
                    }`}
                  >
                    {step > 1 ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      "1"
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors ${step === 1 ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
                    Contact
                  </span>
                </div>

                <div className="w-12 h-px bg-[var(--border)]" />

                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      step === 2
                        ? "bg-[var(--brand)] text-white"
                        : "bg-black/[0.04] text-[var(--text-muted)]"
                    }`}
                  >
                    2
                  </div>
                  <span className={`text-sm font-medium transition-colors ${step === 2 ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
                    Your Shop
                  </span>
                </div>
              </div>

              <p className="text-center text-xs font-medium text-[var(--text-muted)] mb-6 uppercase tracking-wider">
                Step {step} of 2
              </p>

              {error && (
                <div className="mb-6 rounded-[var(--radius-3xs)] bg-red-900/20 border border-red-800/40 px-4 py-3 text-sm text-[var(--text-danger)]">
                  {error}
                </div>
              )}

              <div className="transition-all duration-300" key={step}>
              {step === 1 ? (
                <form action={handleStep1} className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Company Name <span className="text-[var(--brand)]">*</span>
                    </label>
                    <input id="companyName" name="companyName" type="text" required className={inputClasses} placeholder="Your Shop Name" />
                  </div>
                  <div>
                    <label htmlFor="yourName" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Your Name <span className="text-[var(--brand)]">*</span>
                    </label>
                    <input id="yourName" name="yourName" type="text" required className={inputClasses} placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Email <span className="text-[var(--brand)]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} placeholder="john@yourshop.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="(555) 123-4567" />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group/btn w-full mt-2 relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--brand)] text-white font-semibold text-[0.9375rem] border-2 border-[var(--brand)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isPending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--bg-body)] opacity-0 transition-all duration-500 group-hover/btn:scale-[100] group-hover/btn:opacity-100" />
                        <div className="flex items-center justify-center">
                          <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">Continue</span>
                        </div>
                        <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[var(--brand)] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                          <span>Continue</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form action={handleStep2} className="space-y-4">
                  <div>
                    <label htmlFor="interestedIn" className="block text-sm font-medium text-[var(--text)] mb-2">
                      What are you interested in? <span className="text-[var(--brand)]">*</span>
                    </label>
                    <select id="interestedIn" name="interestedIn" required className={inputClasses}>
                      <option value="">Select an option</option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="shopType" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Shop Type <span className="text-[var(--brand)]">*</span>
                    </label>
                    <select id="shopType" name="shopType" required className={inputClasses}>
                      <option value="">Select your shop type</option>
                      {shopTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="orderVolume" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Monthly Order Volume <span className="text-[var(--brand)]">*</span>
                    </label>
                    <select id="orderVolume" name="orderVolume" required className={inputClasses}>
                      <option value="">Select your volume</option>
                      {orderVolumeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="currentSoftware" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Current Software
                    </label>
                    <input id="currentSoftware" name="currentSoftware" type="text" className={inputClasses} placeholder="e.g., Printavo, ShopWorks, spreadsheets..." />
                  </div>
                  <div>
                    <label htmlFor="biggestPainPoint" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Biggest Pain Point
                    </label>
                    <textarea id="biggestPainPoint" name="biggestPainPoint" rows={3} className={`${inputClasses} resize-none`} placeholder="What's the #1 thing slowing your shop down?" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => { setStep(1); setError(null); }}
                      className="group/btn relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent text-[var(--text)] font-semibold text-[0.9375rem] border-2 border-[var(--border)] transition-all duration-300"
                    >
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--brand)] opacity-0 transition-all duration-500 group-hover/btn:scale-[100] group-hover/btn:opacity-100" />
                      <div className="flex items-center justify-center">
                        <span className="inline-block transition-all duration-300 group-hover/btn:-translate-x-12 group-hover/btn:opacity-0">Back</span>
                      </div>
                      <div className="absolute top-0 left-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span>Back</span>
                      </div>
                    </button>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="group/btn flex-1 relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--brand)] text-white font-semibold text-[0.9375rem] border-2 border-[var(--brand)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--bg-body)] opacity-0 transition-all duration-500 group-hover/btn:scale-[100] group-hover/btn:opacity-100" />
                          <div className="flex items-center justify-center">
                            <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">Submit</span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[var(--brand)] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                            <span>Submit</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
