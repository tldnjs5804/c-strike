import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function SubpageHero({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-gradient-to-b from-bg-surface to-bg-base pb-12 pt-[130px] sm:pt-[150px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-1.5 font-mono text-[12.5px] text-text-muted transition-colors hover:text-defend"
        >
          ← 홈으로
        </Link>
        <h1 className="mb-3.5 text-[clamp(26px,3.4vw,36px)] font-extrabold text-text-primary">{title}</h1>
        {desc && <p className="max-w-[560px] text-[15px] text-text-secondary">{desc}</p>}
        {children}
      </div>
    </header>
  );
}
