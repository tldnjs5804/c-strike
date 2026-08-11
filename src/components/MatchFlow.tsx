import { MATCH_FLOW, VULN_RELEASE_HOURS } from "../data/content";

function SideStage({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[10px] border border-border bg-bg-card p-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-bg-surface-alt text-[22px]">
        {icon}
      </span>
      <div>
        <h4 className="mb-1.5 text-[15px] font-bold text-text-primary">{title}</h4>
        <p className="text-[12.5px] leading-relaxed text-text-secondary">{desc}</p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-1 font-mono text-[20px] text-text-muted lg:rotate-0 lg:py-0 lg:text-[24px]">
      <span className="lg:hidden">↓</span>
      <span className="hidden lg:inline">→</span>
    </div>
  );
}

export default function MatchFlow() {
  return (
    <div className="reveal flex flex-col lg:flex-row lg:items-stretch lg:gap-1">
      <div className="lg:w-[190px] lg:shrink-0">
        <SideStage icon={MATCH_FLOW.before.icon} title={MATCH_FLOW.before.title} desc={MATCH_FLOW.before.desc} />
      </div>

      <FlowArrow />

      {/* core stage — the actual attack/defense loop, visually emphasized */}
      <div className="relative flex-1 rounded-[14px] border border-transparent bg-gradient-to-br from-attack/10 via-bg-card to-defend/10 p-6 sm:p-7">
        <div
          className="pointer-events-none absolute inset-0 rounded-[14px] opacity-60"
          style={{
            padding: 1,
            background: "linear-gradient(135deg, var(--color-attack), var(--color-defend))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-defend/40 bg-defend/10 px-3 py-1 font-mono text-[12px] font-bold text-defend">
              🛡️ DEFEND
            </span>
            <span className="font-mono text-[15px] text-text-muted">⇄</span>
            <span className="rounded-full border border-attack/40 bg-attack/10 px-3 py-1 font-mono text-[12px] font-bold text-attack">
              ⚔️ ATTACK
            </span>
          </div>
          <p className="mb-1 text-center font-mono text-[10.5px] font-bold uppercase tracking-wide text-amber">
            대회 시간 내내 반복
          </p>
          <p className="mb-5 text-center text-[13.5px] leading-relaxed text-text-secondary">{MATCH_FLOW.core.desc}</p>

          <div className="border-t border-border/70 pt-4">
            <p className="mb-3 text-center font-mono text-[10.5px] uppercase tracking-wide text-text-muted">
              🔓 취약점팩 단계적 공개
            </p>
            <div className="relative flex justify-between px-1">
              <div className="absolute left-1 right-1 top-[6px] h-px bg-border-strong" />
              {VULN_RELEASE_HOURS.map((h) => (
                <div key={h} className="relative z-10 flex flex-col items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full border-2 border-amber bg-bg-card" />
                  <span className="font-mono text-[10.5px] text-text-secondary">{h}h</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FlowArrow />

      <div className="lg:w-[190px] lg:shrink-0">
        <SideStage icon={MATCH_FLOW.after.icon} title={MATCH_FLOW.after.title} desc={MATCH_FLOW.after.desc} />
      </div>
    </div>
  );
}
