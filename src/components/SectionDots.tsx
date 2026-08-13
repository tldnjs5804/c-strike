import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const SECTIONS = [
  { id: "hero", label: "홈" },
  { id: "about", label: "대회 소개" },
  { id: "results", label: "운영 성과" },
  { id: "join", label: "참가 안내" },
  { id: "contact", label: "문의하기" },
];

export default function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return createPortal(
    <nav
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      aria-label="섹션 이동"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
          className="group relative flex h-4 w-4 items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-bg-card px-2.5 py-1 font-mono text-[11.5px] text-text-secondary opacity-0 shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all duration-200 ${
              active === s.id
                ? "scale-125 border-attack bg-attack"
                : "border-border-strong bg-transparent group-hover:border-text-secondary"
            }`}
          />
        </a>
      ))}
    </nav>,
    document.body,
  );
}
