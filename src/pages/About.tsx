import SubpageHero from "../components/SubpageHero";
import { SectionTitle, Tag } from "../components/ui";
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
          <ol className="reveal mb-20 flex flex-col divide-y divide-border border-y border-border">
            {PURPOSES.map((p, i) => (
              <li key={p} className="flex items-start gap-6 py-5">
                <span className="mt-0.5 shrink-0 font-mono text-[13px] font-bold text-attack">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{p}</p>
              </li>
            ))}
          </ol>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle>운영 방식</SectionTitle>
              <table className="reveal w-full border-collapse border-t border-border">
                <tbody>
                  {RULES.map((r) => (
                    <tr key={r.term} className="border-b border-border">
                      <td className="w-[110px] whitespace-nowrap py-4 pr-4 align-top font-mono text-[11.5px] font-semibold uppercase text-text-muted">
                        {r.term}
                      </td>
                      <td className="py-4 align-top text-[13.5px] leading-relaxed text-text-secondary">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <SectionTitle>공략해야 할 취약점</SectionTitle>
              <div className="reveal mb-5 flex flex-col divide-y divide-border border-y border-border">
                {TARGETS.map((t) => (
                  <div key={t.tag} className="flex items-baseline gap-4 py-4">
                    <Tag variant="attack">{t.tag}</Tag>
                    <p className="text-[13.5px] leading-relaxed text-text-secondary">{t.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] leading-relaxed text-text-muted">{TARGETS_NOTE}</p>
            </div>
          </div>

          <div className="reveal mt-20 border border-border-strong border-l-4 border-l-amber p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <Tag variant="amber">BONUS ZONE</Tag>
                <h3 className="my-3 font-serif text-[24px] font-bold text-text-primary">보너스 구간</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  A/D 서비스와 별개로 모든 팀이 접근 가능한 공용 Jeopardy 구역. 공방 소강상태 시 몰입도를 유지하고
                  팀 전략 다양성을 부여합니다.
                </p>
              </div>
              <dl className="flex flex-col divide-y divide-border">
                {BONUS_STATS.map((b) => (
                  <div key={b.label} className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-[12.5px] text-text-muted">{b.label}</dt>
                    <dd className="whitespace-nowrap font-mono text-[16px] font-bold text-amber">{b.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
