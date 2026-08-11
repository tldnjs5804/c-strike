import { Link } from "react-router-dom";
import { EVENT, HERO_STATS } from "../../data/content";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-[150px] sm:pt-[168px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-grid absolute inset-0" />
        <div
          className="absolute -left-[120px] -top-[180px] h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--color-attack)" }}
        />
        <div
          className="absolute -right-[160px] -top-[100px] h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--color-defend)" }}
        />
        <div
          className="absolute inset-x-0 h-px animate-scan opacity-50"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-defend), transparent)" }}
        />
      </div>

      <div className="hero-stagger relative z-10 mx-auto max-w-[1120px] px-6 text-center sm:px-8">
        <div className="mb-4 inline-flex items-center gap-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.14em] text-defend">
          <span className="h-[7px] w-[7px] animate-blink rounded-full bg-defend shadow-[0_0_8px_rgba(45,227,200,0.35)]" />
          {EVENT.eyebrow}
        </div>

        <h1 className="mb-5 flex flex-wrap items-baseline justify-center gap-3.5 font-mono font-extrabold leading-[0.95]">
          <span
            className="bg-gradient-to-b from-white to-[#c7cee0] bg-clip-text text-[clamp(44px,9vw,96px)] tracking-tight text-transparent"
          >
            {EVENT.name}
          </span>
          <span
            className="text-[clamp(22px,4vw,38px)] text-defend"
            style={{ textShadow: "0 0 24px rgba(45,227,200,0.35)" }}
          >
            {EVENT.year}
          </span>
        </h1>

        <div className="mb-7 flex flex-wrap justify-center gap-4 font-mono text-[clamp(15px,2vw,20px)] font-bold tracking-[0.08em]">
          <span className="text-attack">{EVENT.slogan[0]}</span>
          <span className="text-defend">{EVENT.slogan[1]}</span>
          <span className="text-text-primary">{EVENT.slogan[2]}</span>
        </div>

        <p className="mx-auto mb-10 max-w-[560px] text-[17px] text-text-secondary">{EVENT.desc}</p>

        <div className="mb-16 flex flex-wrap justify-center gap-3.5">
          <Link
            to="/apply"
            className="group inline-flex items-center gap-2 rounded-lg bg-attack px-7 py-[15px] font-mono text-[14.5px] font-semibold text-white shadow-[0_0_0_1px_var(--color-attack)] transition-all hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)] active:scale-[0.97] active:translate-y-0"
          >
            지금 신청하기
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-7 py-[15px] font-mono text-[14.5px] font-semibold text-text-primary transition-all hover:border-defend hover:text-defend hover:shadow-[0_0_20px_rgba(45,227,200,0.15)] active:scale-[0.97]"
          >
            대회 소개 보기
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 pb-14 sm:gap-8">
          {HERO_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-5 sm:gap-8">
              {i > 0 && <div className="h-8 w-px bg-border" />}
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-[26px] font-bold text-text-primary">{s.num}</span>
                <span className="whitespace-nowrap text-[10.5px] text-text-muted sm:text-[12px]">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6 pb-24 sm:px-8">
        <div className="reveal mx-auto max-w-[640px] overflow-hidden rounded-[10px] border border-border-strong bg-bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-border bg-bg-surface-alt px-4 py-[11px]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[12px] text-text-muted">root@c-strike:~# session_status</span>
          </div>
          <div className="px-[22px] py-5 font-mono text-[13.5px]">
            <p className="mb-2 text-text-secondary">
              <span className="mr-2 text-defend">$</span>whoami --team
            </p>
            <p className="mb-2 pl-4 text-text-muted">&gt; 6 teams engaged · Attack-Defense live</p>
            <p className="mb-2 text-text-secondary">
              <span className="mr-2 text-defend">$</span>curl scoreboard.c-strike.local
            </p>
            <p className="pl-4 text-text-muted">
              &gt; 200 OK · flags captured: 000000 <span className="animate-cursor text-defend">▍</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
