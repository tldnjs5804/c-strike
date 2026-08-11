import { Link } from "react-router-dom";
import { CHAPTERS, EVENT, HERO_STATS } from "../data/content";
import { IndexBadge } from "../components/ui";
import CountUp from "../components/CountUp";

export default function Home() {
  return (
    <>
      <header className="border-b border-border pb-16 pt-[128px] sm:pb-24 sm:pt-[160px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="hero-stagger">
            <p className="mb-5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-defend">
              {EVENT.eyebrow}
            </p>

            <h1 className="mb-6 font-mono text-[clamp(38px,6vw,76px)] font-extrabold leading-[1.02] tracking-tight">
              <span className="bg-gradient-to-b from-white to-[#c7cee0] bg-clip-text text-transparent">{EVENT.name}</span>
              <span className="ml-3 text-attack" style={{ textShadow: "0 0 24px rgba(255,70,85,0.35)" }}>
                {EVENT.year}
              </span>
            </h1>

            <div className="mb-7 flex flex-wrap gap-4 font-mono text-[15px] font-bold tracking-[0.06em]">
              <span className="text-attack">{EVENT.slogan[0]}</span>
              <span className="text-defend">{EVENT.slogan[1]}</span>
              <span className="text-text-primary">{EVENT.slogan[2]}</span>
            </div>

            <p className="mb-10 max-w-[480px] text-[16.5px] leading-relaxed text-text-secondary">{EVENT.desc}</p>

            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 rounded-lg bg-attack px-6 py-3 font-mono text-[13.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)]"
              >
                지금 신청하기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-6 py-3 font-mono text-[13.5px] font-semibold text-text-primary transition-all hover:border-defend hover:text-defend hover:shadow-[0_0_20px_rgba(45,227,200,0.15)]"
              >
                대회 소개 보기
              </Link>
            </div>
          </div>

          <div className="reveal self-start rounded-[10px] border border-border-strong bg-bg-card p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              FILE No. CJU-2026-CSTRIKE
            </p>
            <dl className="flex flex-col divide-y divide-border">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between py-3.5 first:pt-0 last:pb-0">
                  <dt className="text-[13px] text-text-secondary">{s.label}</dt>
                  <dd className="font-mono text-[26px] font-bold text-text-primary">
                    <CountUp value={parseInt(s.num, 10)} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-center gap-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-wide text-defend">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-defend" />
              접수 상태 · 확인 중
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <p className="reveal mb-10 font-mono text-[12px] uppercase tracking-[0.16em] text-text-muted">
            목차 · Table of Contents
          </p>

          <div className="reveal stagger-children grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CHAPTERS.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                className="card-hover group flex flex-col justify-between gap-8 rounded-[10px] border border-border bg-bg-card p-8 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <IndexBadge n={c.n} variant={c.variant} />
                  <span
                    className={`font-mono text-[20px] transition-transform group-hover:translate-x-1 ${
                      c.variant === "attack" ? "text-attack" : "text-defend"
                    }`}
                  >
                    →
                  </span>
                </div>
                <div>
                  <h3 className="mb-2.5 text-[22px] font-bold text-text-primary">{c.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary">{c.teaser}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
