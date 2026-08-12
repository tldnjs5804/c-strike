import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-3.5 flex items-center gap-2.5 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-defend">
      <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-defend shadow-[0_0_8px_rgba(45,227,200,0.35)]" />
      {children}
    </div>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="reveal mb-4 text-[clamp(30px,4.2vw,48px)] font-extrabold leading-tight tracking-tight text-text-primary">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="reveal mb-4 text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-tight text-text-primary">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mb-12 max-w-[640px] text-[17px] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "neutral" | "attack" | "defend";
}) {
  return (
    <div
      onClick={onClick}
      className={`card-hover rounded-[10px] border border-border bg-bg-card p-7 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-border to-transparent ${className}`} />;
}
