"use client";

import * as React from "react";
import { ctas } from "@/lib/content";

export function FreeAuditForm() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-white/60 bg-white/80 p-6 text-sm text-foreground/70">
        Thanks! We will review your details and send your audit steps. (TODO: connect form)
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="space-y-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          Email
          <input
            required
            type="email"
            name="email"
            className="input-field"
            placeholder="you@company.com"
          />
        </label>
        <label className="space-y-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          Website
          <input
            type="url"
            name="website"
            className="input-field"
            placeholder="https://"
          />
        </label>
      </div>
      <label className="space-y-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        Main Challenge
        <textarea
          name="challenge"
          className="textarea-field"
          placeholder="Tell us where leads fall off or where your systems feel manual."
        />
      </label>
      <button type="submit" className="btn-primary">
        {ctas.freeAudit}
      </button>
    </form>
  );
}
