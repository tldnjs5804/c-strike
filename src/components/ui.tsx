import type { ReactNode } from "react";

/** Small mono file-label, e.g. "FILE / 01" — replaces the blinking-dot eyebrow cliché. */
export function Eyebrow({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <div className="reveal mb-4 flex items-center gap-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted">
      {index && <span className="text-attack">§ {index}</span>}
      <span>{children}</span>
    </div>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="reveal mb-4 font-serif text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.08] tracking-tight text-text-primary">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="reveal mb-4 font-serif text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-tight text-text-primary">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mb-12 max-w-[640px] text-[16px] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

/** Rectangular stamp-style tag — no pill, no glow, a left rule instead of a filled pill. */
export function Tag({
  children,
  variant = "defend",
}: {
  children: ReactNode;
  variant?: "attack" | "defend" | "amber" | "muted";
}) {
  const variants: Record<string, string> = {
    attack: "text-attack border-l-attack",
    defend: "text-defend border-l-defend",
    amber: "text-amber border-l-amber",
    muted: "text-text-muted border-l-border-strong",
  };
  return (
    <span
      className={`inline-flex items-center border border-border border-l-2 bg-bg-surface px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  onClick,
  variant = "neutral",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "neutral" | "attack" | "defend";
}) {
  const variantClass =
    variant === "attack" ? "offset-card-attack" : variant === "defend" ? "offset-card-defend" : "";
  return (
    <div
      onClick={onClick}
      className={`offset-card ${variantClass} border border-border bg-bg-card p-7 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-border ${className}`} />;
}

/** Index number badge used in chapter grids and numbered lists, e.g. "01". */
export function IndexBadge({ n, variant = "muted" }: { n: string; variant?: "attack" | "defend" | "muted" }) {
  const color = variant === "attack" ? "text-attack" : variant === "defend" ? "text-defend" : "text-text-muted";
  return <span className={`font-serif text-[15px] font-bold ${color}`}>{n}</span>;
}
