import { cn } from "@/lib/utils";

type BrandPanelProps = {
  title: string;
  items: string[];
  caption?: string;
  className?: string;
};

export function BrandPanel({ title, items, caption, className }: BrandPanelProps) {
  const meta = caption ? `${caption} · Signature Systems` : "Signature Systems";

  return (
    <div
      className={cn(
        "relative min-h-[420px] overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-10 text-foreground shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-[#f7edf4] to-[#f3e6ef]" />
      <div className="absolute -left-16 top-12 h-32 w-80 -rotate-6 bg-gradient-to-r from-brand-pink/35 via-brand-lilac/30 to-transparent opacity-80" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-blush/45 via-white/50 to-transparent blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-purple/15 via-brand-lilac/20 to-transparent blur-3xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div
            className="text-5xl text-brand-pink"
            style={{ fontFamily: "var(--font-script)" }}
          >
            AM
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
            {meta}
          </span>
        </div>

        <div>
          <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
        </div>

        <ul className="space-y-2 text-[13px] text-foreground/70">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-pink" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
