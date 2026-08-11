import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EVENT } from "../data/content";

const NAV_ITEMS = [
  { label: "대회 소개", href: "/about" },
  { label: "운영 성과", href: "/results" },
  { label: "참가 안내", href: "/join" },
  { label: "문의하기", href: "/contact" },
];

function Mark() {
  return (
    <span className="flex h-[18px] shrink-0 items-center" aria-hidden>
      <span className="h-[18px] w-[18px] bg-attack" />
      <span className="-ml-[7px] h-[18px] w-[18px] bg-defend" />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg-base">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link to="/" className="flex items-center gap-3 font-mono text-[16px] font-bold tracking-tight">
          <Mark />
          {EVENT.name}
          <span className="hidden font-mono text-[11px] font-normal text-text-muted sm:inline">/ {EVENT.year}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`border-b-2 px-4 py-[22px] text-[14px] font-medium transition-colors ${
                  active
                    ? "border-attack text-text-primary"
                    : "border-transparent text-text-secondary hover:border-border-strong hover:text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="offset-btn hidden border border-attack bg-bg-base px-4 py-[7px] font-mono text-[12.5px] font-semibold uppercase tracking-wide text-attack sm:inline-block"
          >
            지금 신청하기
          </Link>
          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-border-strong transition-colors hover:border-defend active:scale-95 md:hidden"
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
            className="mt-4 block border border-attack bg-attack px-4 py-3 text-center font-mono text-[13.5px] font-semibold uppercase tracking-wide text-text-primary transition-transform active:scale-[0.97]"
          >
            지금 신청하기
          </Link>
        </div>
      )}
    </nav>
  );
}
