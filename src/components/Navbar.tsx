import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EVENT } from "../data/content";

const NAV_ITEMS = [
  { label: "대회 소개", href: "/about" },
  { label: "운영 성과", href: "/results" },
  { label: "참가 안내", href: "/join" },
  { label: "문의하기", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg-base/95">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-mono text-[17px] font-bold tracking-tight">
          <span
            className="flex h-[26px] w-[26px] shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--color-attack), var(--color-defend))",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          {EVENT.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`relative rounded-md px-4 py-2.5 text-[14.5px] font-medium transition-colors ${
                  active ? "bg-bg-surface-alt text-text-primary" : "text-text-secondary hover:bg-bg-surface-alt hover:text-text-primary"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 bottom-1 h-[2px] bg-defend shadow-[0_0_6px_rgba(45,227,200,0.35)]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/apply"
            className="hidden rounded-md border border-attack bg-attack px-[18px] py-[9px] font-mono text-[13px] font-semibold tracking-wide text-white transition-all hover:bg-attack-dark hover:shadow-[0_0_20px_rgba(255,70,85,0.35)] sm:inline-block"
          >
            지금 신청하기
          </Link>
          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md border border-border-strong transition-colors hover:border-defend active:scale-95 md:hidden"
          >
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-4 bg-text-primary transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-page-in border-t border-border bg-bg-base px-6 pb-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block border-b border-border py-3.5 text-[15px] font-medium text-text-primary transition-colors hover:text-defend"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/apply"
            className="mt-4 block rounded-md bg-attack px-4 py-3 text-center font-mono text-[13.5px] font-semibold text-white transition-transform active:scale-[0.97]"
          >
            지금 신청하기
          </Link>
        </div>
      )}
    </nav>
  );
}
