import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EVENT } from "../data/content";

type NavItem = {
  label: string;
  href: string;
  children: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "대회 소개",
    href: "/#about",
    children: [
      { label: "목적", href: "/#about-purpose" },
      { label: "운영 방식", href: "/#about-rules" },
      { label: "공략해야 할 취약점", href: "/#about-targets" },
      { label: "보너스 구간", href: "/#about-bonus" },
    ],
  },
  {
    label: "운영 성과",
    href: "/#results",
    children: [
      { label: "대회 개요", href: "/#results-overview" },
      { label: "최종 순위", href: "/#results-leaderboard" },
      { label: "만족도 조사 결과", href: "/#results-satisfaction" },
    ],
  },
  {
    label: "참가 안내",
    href: "/#join",
    children: [
      { label: "참가 전 확인할 것", href: "/#join-checklist" },
      { label: "지금 신청하기", href: "/apply" },
    ],
  },
  {
    label: "문의하기",
    href: "/#contact",
    children: [
      { label: "문의 게시판", href: "/board" },
      { label: "문의 남기기", href: "/write" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!href.includes("#")) return;
    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    if (location.pathname === targetPath) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg-base/82 backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-6 sm:px-8">
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
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.href}
                onClick={handleAnchor(item.href)}
                className="relative rounded-md px-4 py-2.5 text-[14.5px] font-medium text-text-secondary transition-colors hover:bg-bg-surface-alt hover:text-text-primary"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-defend transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
              <div className="invisible absolute left-1/2 top-full min-w-[210px] -translate-x-1/2 translate-y-[-6px] rounded-[10px] border border-border-strong bg-bg-surface p-2 opacity-0 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="absolute inset-x-0 -top-2.5 h-2.5" />
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={handleAnchor(child.href)}
                    className="block whitespace-nowrap rounded-md px-3 py-2.5 text-[13.5px] text-text-secondary transition-colors hover:bg-bg-surface-alt hover:text-defend"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/apply"
            className="hidden rounded-md border border-attack bg-attack px-[18px] py-[9px] font-mono text-[13px] font-semibold tracking-wide text-white transition-all hover:bg-attack-dark hover:shadow-[0_0_20px_rgba(255,70,85,0.35)] active:scale-[0.96] sm:inline-block"
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
        <div className="animate-[fade-up_0.25s_cubic-bezier(0.16,1,0.3,1)_both] border-t border-border bg-bg-base px-6 pb-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-border py-3">
              <Link to={item.href} onClick={handleAnchor(item.href)} className="block text-[15px] font-semibold text-text-primary">
                {item.label}
              </Link>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={handleAnchor(child.href)}
                    className="py-1.5 text-[13.5px] text-text-secondary transition-colors hover:text-defend"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
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
