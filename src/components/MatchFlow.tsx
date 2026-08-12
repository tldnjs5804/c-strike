import { MATCH_FLOW, VULN_RELEASE_HOURS, VULN_RELEASE_SCHEDULE } from "../data/content";

export default function MatchFlow() {
  return (
    <div className="reveal rounded-[14px] border border-border bg-bg-card px-5 py-10 sm:px-10">
      {/* centered DEFEND / ATTACK badge, floating above the timeline */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
        <span className="rounded-full border border-defend/40 bg-defend/10 px-3 py-1 font-mono text-[13px] font-bold text-defend">
          DEFEND
        </span>
        <span className="font-mono text-[15px] text-text-muted">⇄</span>
        <span className="rounded-full border border-attack/40 bg-attack/10 px-3 py-1 font-mono text-[13px] font-bold text-attack">
          ATTACK
        </span>
        <span className="ml-1 font-mono text-[12px] font-bold uppercase tracking-wide text-amber">대회 시간 내내 반복</span>
      </div>

      {/* one simple line: 팀 편성 -> 채점·순위, DEFEND/ATTACK 구간이 그 사이 전체임을 색으로만 표시 */}
      <div className="relative flex items-center justify-between">
        <div
          className="absolute left-9 right-9 top-1/2 h-[3px] -translate-y-1/2 rounded-full sm:left-[46px] sm:right-[46px]"
          style={{ background: "linear-gradient(90deg, var(--color-defend), var(--color-attack))" }}
        />

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="h-4 w-4 rounded-full border-2 border-defend bg-bg-card sm:h-[18px] sm:w-[18px]" />
          <span className="text-[12.5px] font-bold leading-tight text-text-primary sm:text-[14px]">
            {MATCH_FLOW.before.title}
          </span>
        </div>

        {/* 취약점팩 공개 시점 — 타임라인 위에 작은 h 눈금으로 표시 */}
        <div className="relative z-10 flex flex-1 items-center justify-around px-1.5 sm:px-3">
          {VULN_RELEASE_HOURS.map((h) => (
            <div key={h} className="flex flex-col items-center gap-1.5 pt-[3px]">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-amber bg-bg-card" />
              <span className="font-mono text-[11px] font-bold text-amber sm:text-[11.5px]">{h}h</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="h-4 w-4 rounded-full border-2 border-attack bg-attack sm:h-[18px] sm:w-[18px]" />
          <span className="text-[12.5px] font-bold leading-tight text-text-primary sm:text-[14px]">
            {MATCH_FLOW.after.title}
          </span>
        </div>
      </div>
      <p className="mt-2 text-center font-mono text-[12px] uppercase tracking-wide text-text-muted">
        취약점팩 공개 시점
      </p>

      <p className="mx-auto mt-8 max-w-[480px] text-center text-[15px] leading-relaxed text-text-secondary">
        대회가 시작되면 모든 팀이 <b className="text-text-primary">내 서버는 방어, 상대 서버는 공격</b>을 동시에 계속
        반복합니다.
      </p>

      {/* 취약점 공개 일정 — 축 위 점이 아니라 그냥 읽으면 되는 라벨 나열 */}
      <div className="mx-auto mt-6 max-w-[560px] rounded-lg border border-amber/25 bg-amber/[0.05] px-4 py-4 sm:px-6">
        <p className="mb-3 text-center font-mono text-[12px] font-bold uppercase tracking-wide text-amber">
          취약점팩 공개 일정
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          {VULN_RELEASE_SCHEDULE.map((label, i) => (
            <span key={label} className="flex items-center gap-1.5">
              <span className="rounded-full border border-amber/40 bg-bg-card px-3 py-1.5 font-mono text-[13.5px] font-bold text-amber">
                {label}
              </span>
              {i < VULN_RELEASE_SCHEDULE.length - 1 && <span className="text-text-muted">→</span>}
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-[13px] leading-relaxed text-text-secondary">
          총 5개 취약점팩이 이 시점마다 전 팀에게 동시에 순차 공개됩니다.
        </p>
      </div>
    </div>
  );
}
