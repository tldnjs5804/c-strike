import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function SubpageHero({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border pb-12 pt-[110px] sm:pt-[128px]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wide text-text-muted transition-colors hover:text-attack"
        >
          ← 홈으로
        </Link>
        {eyebrow && (
          <p className="mb-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-attack">{eyebrow}</p>
        )}
        <h1 className="mb-4 font-serif text-[clamp(28px,3.8vw,44px)] font-bold leading-[1.1] text-text-primary">{title}</h1>
        {desc && <p className="max-w-[560px] text-[15px] leading-relaxed text-text-secondary">{desc}</p>}
        {children}
      </div>
    </header>
  );
}
