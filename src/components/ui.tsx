import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-defend">
      <span className="relative flex h-[7px] w-[7px] shrink-0">
        <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-defend shadow-[0_0_8px_rgba(45,227,200,0.35)]" />
      </span>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="reveal mb-4 text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-tight text-text-primary">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mb-14 max-w-[640px] text-[16px] text-text-secondary">
      {children}
    </p>
  );
}

export function Tag({
  children,
  variant = "defend",
  style,
}: {
  children: ReactNode;
  variant?: "attack" | "defend" | "amber";
  style?: React.CSSProperties;
}) {
  const variants: Record<string, string> = {
    attack: "text-attack bg-attack/10 border-attack/30",
    defend: "text-defend bg-defend/10 border-defend/30",
    amber: "text-amber bg-amber/10 border-amber/30",
  };
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11.5px] font-semibold tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-[10px] border border-border bg-bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.5)] ${onClick ? "cursor-pointer active:translate-y-0" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-border to-transparent ${className}`} />;
}
