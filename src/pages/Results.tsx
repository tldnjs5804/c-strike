import SubpageHero from "../components/SubpageHero";
import { SectionTitle, Tag } from "../components/ui";
import CountUp from "../components/CountUp";
import { AMENITIES, LEADERBOARD, RESULTS_OVERVIEW, SATISFACTION } from "../data/content";

export default function Results() {
  return (
    <>
      <SubpageHero
        eyebrow="AFTER ACTION REPORT · 02"
        title="운영 성과"
        desc="CJU C-Strike 사이버공격방어대회 · 2026년 6월 22일 10:00–22:00 진행"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="reveal stagger-children mb-16 grid grid-cols-1 divide-y divide-border border border-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {RESULTS_OVERVIEW.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 p-6">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-attack">{item.label}</span>
                <span className="text-[14.5px] font-medium leading-snug text-text-primary">{item.value}</span>
              </div>
            ))}
          </div>

          <SectionTitle>최종 순위</SectionTitle>
          <div className="reveal stagger-children mb-16 border border-border">
            <div className="grid grid-cols-[40px_1fr_90px] gap-4 border-b border-border bg-bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-text-muted sm:grid-cols-[56px_1fr_110px_140px]">
              <span>순위</span>
              <span>팀</span>
              <span>점수</span>
              <span className="hidden sm:block" />
            </div>
            {LEADERBOARD.map((row) => (
              <div
                key={row.team}
                className={`row-accent grid grid-cols-[40px_1fr_90px] items-center gap-4 border-b border-border py-4 pl-4 pr-5 text-[14px] last:border-none sm:grid-cols-[56px_1fr_110px_140px] ${
                  row.rank === 1 ? "border-l-2 border-l-amber bg-amber/[0.04]" : ""
                }`}
              >
                <span className={`font-mono font-bold ${row.rank === 1 ? "text-[17px] text-amber" : "text-text-secondary"}`}>
                  {row.rank}
                </span>
                <span className="font-semibold text-text-primary">{row.team}</span>
                <span className={`font-mono ${row.rank === 1 ? "font-bold text-amber" : "text-text-secondary"}`}>
                  <CountUp value={row.score} format={(n) => n.toLocaleString()} />
                </span>
                <span className="hidden h-[3px] overflow-hidden bg-bg-surface-alt sm:block">
                  <i
                    className="bar-fill block h-full"
                    style={{ width: `${row.pct}%`, background: row.rank === 1 ? "var(--color-amber)" : "var(--color-defend)" }}
                  />
                </span>
              </div>
            ))}
            <p className="border-t border-dashed border-border px-5 py-4 text-[12px] text-text-muted">
              ※ 참가자 실명은 결과보고서에 기재되어 있으나, 외부 공개용 페이지 게재 여부는 확인 중입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle>만족도 조사 결과</SectionTitle>
              <p className="reveal mb-5 text-[13.5px] text-text-secondary">24명 중 17명 응답 · 5점 척도 4점 이상 = 긍정</p>
              <div className="reveal stagger-children flex flex-col gap-3">
                {SATISFACTION.map((s) => (
                  <div key={s.label} className="grid grid-cols-[110px_1fr_36px] items-center gap-3 text-[12.5px] sm:grid-cols-[130px_1fr_36px]">
                    <span className="text-text-secondary">{s.label}</span>
                    <span className="h-[3px] overflow-hidden bg-bg-surface-alt">
                      <i className="bar-fill block h-full bg-defend" style={{ width: `${s.pct}%` }} />
                    </span>
                    <b className="text-right font-mono font-semibold text-text-primary">{s.count}</b>
                  </div>
                ))}
              </div>
              <p className="reveal mt-5 text-[12.5px] leading-relaxed text-text-muted">
                주요 긍정 의견 — 공방전 방식, 팀 협업, 문제 다양성, 운영진 지원
              </p>
            </div>

            <div>
              <SectionTitle>참가자 편의</SectionTitle>
              <Tag variant="defend">AMENITIES</Tag>
              <ul className="reveal stagger-children mt-5 flex flex-col divide-y divide-border border-y border-border">
                {AMENITIES.map((a) => (
                  <li key={a} className="py-3.5 text-[14px] leading-relaxed text-text-secondary">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
