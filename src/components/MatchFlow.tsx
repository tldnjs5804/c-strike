import { MATCH_FLOW, VULN_RELEASE_HOURS } from "../data/content";
import { Crosshair, Server, Shield, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";

export default function MatchFlow() {
  return (
    <div className="reveal rounded-[14px] border border-border bg-bg-card px-5 py-10 sm:px-10">
      {/* centered DEFEND / ATTACK badge, floating above the timeline */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
        <Badge variant="defend" className="px-3 py-1 text-[14px] font-bold">
          <Shield className="h-[13px] w-[13px]" strokeWidth={2} />
          DEFEND
        </Badge>
        <span className="font-mono text-[16px] text-text-secondary">⇄</span>
        <Badge variant="attack" className="px-3 py-1 text-[14px] font-bold">
          <Crosshair className="h-[13px] w-[13px]" strokeWidth={2} />
          ATTACK
        </Badge>
        <span className="ml-1 font-mono text-[13px] font-bold uppercase tracking-wide text-defend">대회 시간 내내 반복</span>
      </div>

      {/* one simple line: 팀 편성 -> 채점·순위, DEFEND/ATTACK 구간이 그 사이 전체임을 색으로만 표시 */}
      <div className="relative flex items-center justify-between">
        <div
          className="absolute left-9 right-9 top-1/2 h-[3px] -translate-y-1/2 rounded-full sm:left-[46px] sm:right-[46px]"
          style={{ background: "linear-gradient(90deg, var(--color-defend), var(--color-attack))" }}
        />

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-defend bg-bg-card text-defend sm:h-10 sm:w-10">
            <Server className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </span>
          <span className="text-[13.5px] font-bold leading-tight text-text-primary sm:text-[15px]">
            {MATCH_FLOW.before.title}
          </span>
        </div>

        {/* 취약점팩 공개 시점 — 타임라인 위에 작은 h 눈금으로 표시 */}
        <div className="relative z-10 flex flex-1 items-center justify-around px-1.5 sm:px-3">
          {VULN_RELEASE_HOURS.map((h) => (
            <div key={h} className="flex flex-col items-center gap-1.5 pt-[3px]">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-defend bg-bg-card" />
              <span className="font-mono text-[12px] font-bold text-defend sm:text-[12.5px]">{h}h</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-attack bg-attack text-white sm:h-10 sm:w-10">
            <Trophy className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </span>
          <span className="text-[13.5px] font-bold leading-tight text-text-primary sm:text-[15px]">
            {MATCH_FLOW.after.title}
          </span>
        </div>
      </div>
      <p className="mt-2 text-center font-mono text-[13px] uppercase tracking-wide text-text-secondary">
        취약점팩 공개 시점
      </p>

      <p className="mx-auto mt-8 max-w-[520px] text-center text-[16px] leading-relaxed text-text-secondary">
        대회가 시작되면 모든 팀이 <b className="text-text-primary">내 서버는 방어, 상대 서버는 공격</b>을 동시에 계속
        반복하며, <b className="text-text-primary">취약점팩 5개</b>가 위 시점마다 전 팀에게 동시에 공개됩니다.
      </p>
    </div>
  );
}
