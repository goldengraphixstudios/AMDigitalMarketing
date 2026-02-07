"use client";

import * as React from "react";
import { services } from "@/lib/content";
import { ctas } from "@/lib/content";

const serviceOptions = services.map((service) => service.title);

export function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const steps = [
    { title: "Contact Details" },
    { title: "Goals & Services" },
    { title: "Project Notes" },
  ];

  const progress = ((step + 1) / steps.length) * 100;

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-white/60 bg-white/80 p-6 text-sm text-foreground/70">
        Thanks for requesting a quote. We will review your details and follow up shortly.
        (TODO: connect form)
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/60">
          <span>{steps[step].title}</span>
          <span>
            Step {step + 1} of {steps.length}
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-white/60">
          <div
            className="h-1 rounded-full bg-gradient-to-r from-brand-pink via-brand-lilac to-brand-purple"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Name
            <input
              required
              type="text"
              name="name"
              className="input-field"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Email
            <input
              required
              type="email"
              name="email"
              className="input-field"
              placeholder="you@company.com"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60 lg:col-span-2">
            Business
            <input
              type="text"
              name="business"
              className="input-field"
              placeholder="Business name"
            />
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Goals
            <textarea
              name="goals"
              className="textarea-field"
              placeholder="What are you trying to achieve with your funnel and CRM systems?"
            />
          </label>
          <fieldset className="space-y-2">
            <legend className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Services Interested In
            </legend>
            <div className="grid gap-2 md:grid-cols-2">
              {serviceOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 rounded-full border border-foreground/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground/70"
                >
                  <input type="checkbox" name="services" value={option} className="accent-brand-pink" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Message
            <textarea
              name="message"
              className="textarea-field"
              placeholder="Tell us about your current tools, challenges, and any timeline notes."
            />
          </label>
          <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Budget (optional)
            <input
              type="text"
              name="budget"
              className="input-field"
              placeholder="Budget range"
            />
          </label>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          className="btn-outline"
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          disabled={step === 0}
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            type="button"
            className="btn-primary"
            onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
          >
            Next
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            {ctas.requestQuote}
          </button>
        )}
      </div>
    </form>
  );
}
