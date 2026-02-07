export type IconName = "funnel" | "crm" | "web" | "social" | "ads" | "admin";

type ServiceIconProps = {
  name: IconName;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  switch (name) {
    case "funnel":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path
            d="M6 10h36l-14 16v8l-8 4v-12L6 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="38" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 22l6-6m8 0l6 6m0 8l-6 6m-8 0l-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 18h36" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
          <circle cx="18" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "social":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path
            d="M12 22c0-5 4-9 9-9h6a9 9 0 010 18h-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M18 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="14" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "ads":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
          <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "admin":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect x="10" y="8" width="28" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M16 18h16M16 26h16M16 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
