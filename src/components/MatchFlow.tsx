import { MATCH_FLOW } from "../data/content";

export default function MatchFlow() {
  return (
    <div className="reveal rounded-[14px] border border-border bg-bg-card px-5 py-10 sm:px-10">
      {/* centered DEFEND / ATTACK badge, floating above the timeline */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
        <span className="rounded-full border border-defend/40 bg-defend/10 px-3 py-1 font-mono text-[12px] font-bold text-defend">
          🛡️ DEFEND
        </span>
        <span className="font-mono text-[15px] text-text-muted">⇄</span>
        <span className="rounded-full border border-attack/40 bg-attack/10 px-3 py-1 font-mono text-[12px] font-bold text-attack">
          ⚔️ ATTACK
        </span>
        <span className="ml-1 font-mono text-[11px] font-bold uppercase tracking-wide text-amber">대회 시간 내내 반복</span>
      </div>

      {/* one simple line: 팀 편성 -> 채점·순위, DEFEND/ATTACK 구간이 그 사이 전체임을 색으로만 표시 */}
      <div className="relative flex items-center justify-between">
        <div
          className="absolute left-9 right-9 top-1/2 h-[3px] -translate-y-1/2 rounded-full sm:left-[46px] sm:right-[46px]"
          style={{ background: "linear-gradient(90deg, var(--color-defend), var(--color-attack))" }}
        />

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border-strong bg-bg-surface-alt text-[16px] sm:h-10 sm:w-10 sm:text-[18px]">
            🖥️
          </span>
          <span className="text-[11.5px] font-bold leading-tight text-text-primary sm:text-[13px]">
            {MATCH_FLOW.before.title}
          </span>
        </div>

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border-strong bg-bg-surface-alt text-[16px] sm:h-10 sm:w-10 sm:text-[18px]">
            🏆
          </span>
          <span className="text-[11.5px] font-bold leading-tight text-text-primary sm:text-[13px]">
            {MATCH_FLOW.after.title}
          </span>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[520px] text-center text-[13.5px] leading-relaxed text-text-secondary">
        대회가 시작되면 모든 팀이 <b className="text-text-primary">내 서버는 방어, 상대 서버는 공격</b>을 동시에 계속
        반복합니다. 그 사이 <b className="text-text-primary">0 / 2 / 4 / 6 / 8시간</b> 시점마다 새 취약점팩이 순차
        공개됩니다.
      </p>
    </div>
  );
}
