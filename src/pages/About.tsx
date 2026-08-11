import SubpageHero from "../components/SubpageHero";
import { SectionTitle } from "../components/ui";
import { PURPOSES, RULES, TARGETS, TARGETS_NOTE, BONUS_STATS } from "../data/content";

export default function About() {
  return (
    <>
      <SubpageHero
        eyebrow="BRIEFING · 01"
        title="대회가 만드는 것"
        desc="단순 문제풀이(Jeopardy)를 넘어선 실전형 공격·방어(Attack-Defense) 대회. 실제 침해 대응 환경을 모사해 진짜 실무형 보안 인재를 발굴합니다."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <SectionTitle>목적</SectionTitle>
          <div className="reveal stagger-children mb-20 flex flex-col gap-3.5">
            {PURPOSES.map((p) => (
              <div key={p} className="flex items-start gap-3.5 rounded-[10px] border border-border bg-bg-card px-5 py-[18px]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-defend/10 text-[12px] font-bold text-defend">
                  ✓
                </span>
                <p className="text-[14.5px] leading-[1.7] text-text-secondary">{p}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle>운영 방식</SectionTitle>
              <table className="reveal w-full border-collapse">
                <tbody>
                  {RULES.map((r) => (
                    <tr key={r.term} className="border-b border-border last:border-none">
                      <td className="w-[110px] whitespace-nowrap py-3.5 pr-4 align-top font-mono text-[12px] font-semibold text-text-muted">
                        {r.term}
                      </td>
                      <td className="py-3.5 align-top text-[13.5px] leading-relaxed text-text-secondary">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <SectionTitle>공략해야 할 취약점</SectionTitle>
              <div className="reveal stagger-children mb-[18px] flex flex-col gap-3">
                {TARGETS.map((t) => (
                  <div key={t.tag} className="flex items-baseline gap-3.5 rounded-lg border border-border bg-bg-card px-4 py-3.5">
                    <span className="min-w-16 shrink-0 font-mono text-[11px] font-bold text-attack">{t.tag}</span>
                    <p className="text-[13.5px] leading-relaxed text-text-secondary">{t.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] leading-relaxed text-text-muted">{TARGETS_NOTE}</p>
            </div>
          </div>

          <div
            className="reveal mt-20 rounded-[14px] border border-amber/25 p-8 sm:p-10"
            style={{ background: "linear-gradient(135deg, rgba(255,185,55,0.06), rgba(23,29,43,0.4))" }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="mb-2 font-mono text-[11.5px] font-semibold uppercase tracking-wide text-amber">BONUS ZONE</p>
                <h3 className="mb-3 text-[24px] font-bold text-text-primary">보너스 구간</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  A/D 서비스와 별개로 모든 팀이 접근 가능한 공용 Jeopardy 구역. 공방 소강상태 시 몰입도를 유지하고
                  팀 전략 다양성을 부여합니다.
                </p>
              </div>
              <div className="reveal stagger-children flex flex-col gap-3.5">
                {BONUS_STATS.map((b) => (
                  <div key={b.label} className="flex items-baseline gap-3">
                    <span className="min-w-[110px] font-mono text-[18px] font-bold text-amber">{b.value}</span>
                    <span className="text-[12.5px] text-text-muted">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
