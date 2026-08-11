import { Eyebrow, SectionTitle, SectionSub, Tag } from "../ui";
import { AMENITIES, LEADERBOARD, RESULTS_OVERVIEW, SATISFACTION } from "../../data/content";

export default function ResultsSection() {
  return (
    <section id="results" className="bg-bg-surface py-24 sm:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
        <Eyebrow>AFTER ACTION REPORT · 운영 성과</Eyebrow>
        <SectionTitle>운영 성과</SectionTitle>
        <SectionSub>CJU C-Strike 사이버공격방어대회 · 2026년 6월 22일 10:00–22:00 진행</SectionSub>

        <div
          id="results-overview"
          className="reveal mb-12 grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {RESULTS_OVERVIEW.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2 border-border bg-bg-card p-5 ${
                i !== RESULTS_OVERVIEW.length - 1 ? "sm:border-r" : ""
              } border-b sm:border-b-0`}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-defend">{item.label}</span>
              <span className="text-[14.5px] font-medium leading-snug text-text-primary">{item.value}</span>
            </div>
          ))}
        </div>

        <div id="results-leaderboard" className="reveal mt-2 rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3.5">
            <Tag variant="defend">LEADERBOARD</Tag>
            <h3 className="text-[19px] font-bold text-text-primary">최종 순위</h3>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-[36px_1fr_70px] gap-3 pb-2.5 font-mono text-[11px] uppercase tracking-wide text-text-muted sm:grid-cols-[48px_1fr_100px_120px]">
              <span>순위</span>
              <span>팀</span>
              <span>점수</span>
              <span className="hidden sm:block" />
            </div>
            {LEADERBOARD.map((row) => (
              <div
                key={row.team}
                className={`grid grid-cols-[36px_1fr_70px] items-center gap-3 border-b border-border py-3 text-[14px] last:border-none sm:grid-cols-[48px_1fr_100px_120px] ${
                  row.rank === 1 ? "rounded-lg bg-gradient-to-r from-amber/10 to-transparent" : ""
                }`}
              >
                <span className={`font-mono font-bold ${row.rank === 1 ? "text-[16px] text-amber" : "text-text-secondary"}`}>
                  {row.rank}
                </span>
                <span className="font-semibold text-text-primary">{row.team}</span>
                <span className={`font-mono ${row.rank === 1 ? "font-bold text-amber" : "text-text-secondary"}`}>
                  {row.score.toLocaleString()}
                </span>
                <span className="hidden h-1.5 overflow-hidden rounded-full bg-bg-surface-alt sm:block">
                  <i
                    className="block h-full rounded-full"
                    style={{ width: `${row.pct}%`, background: row.rank === 1 ? "var(--color-amber)" : "var(--color-defend)" }}
                  />
                </span>
              </div>
            ))}
          </div>
          <p className="mt-[18px] border-t border-dashed border-border pt-4 text-[12px] text-text-muted">
            ※ 참가자 실명은 결과보고서에 기재되어 있으나, 외부 공개용 페이지 게재 여부는 확인 중입니다.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div id="results-satisfaction" className="reveal rounded-[10px] border border-border bg-bg-card p-7">
            <p className="mb-3.5 text-[14px] text-text-secondary">24명 중 17명 응답 · 5점 척도 4점 이상 = 긍정</p>
            <div className="flex flex-col gap-2.5">
              {SATISFACTION.map((s) => (
                <div key={s.label} className="grid grid-cols-[110px_1fr_34px] items-center gap-2.5 text-[12.5px] sm:grid-cols-[120px_1fr_34px]">
                  <span className="text-text-secondary">{s.label}</span>
                  <span className="h-1.5 overflow-hidden rounded-full bg-bg-surface-alt">
                    <i className="block h-full rounded-full bg-defend" style={{ width: `${s.pct}%` }} />
                  </span>
                  <b className="text-right font-mono font-semibold text-text-primary">{s.count}</b>
                </div>
              ))}
            </div>
            <p className="mt-3.5 text-[12.5px] leading-[1.7] text-text-muted">
              주요 긍정 의견 — 공방전 방식, 팀 협업, 문제 다양성, 운영진 지원
            </p>
          </div>

          <div className="reveal rounded-[10px] border border-border bg-bg-card p-7">
            <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-lg bg-attack/10 text-[16px] text-attack">
              ☕
            </div>
            <h3 className="mb-2.5 text-[17px] font-bold text-text-primary">참가자 편의</h3>
            <ul className="flex flex-col gap-1.5">
              {AMENITIES.map((a) => (
                <li key={a} className="flex gap-1.5 text-[14px] text-text-secondary">
                  <span className="font-bold text-defend">›</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
