import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";
import { JOIN_ITEMS } from "../data/content";

export default function Join() {
  return (
    <>
      <SubpageHero
        eyebrow="MISSION BRIEF · 03"
        title="참가 전 확인할 것"
        desc="9월 · 11월 대회 예정 — 상세 일정과 조건은 확정되는 대로 공개합니다."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[820px] px-6 sm:px-8">
          <div className="reveal stagger-children grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {JOIN_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col gap-2.5 p-6">
                <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">{item.label}</span>
                <span
                  className={
                    item.pending
                      ? "inline-flex items-center gap-1.5 font-mono text-[12.5px] text-amber before:content-['○']"
                      : "text-[14px] text-text-secondary"
                  }
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-col items-start gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[400px] text-[13.5px] leading-relaxed text-text-muted">
              신청서는 별도 페이지에서 접수합니다. 이름·학번·연락처·팀 구성 정보를 준비해주세요.
            </p>
            <Link
              to="/apply"
              className="offset-btn shrink-0 border border-attack bg-bg-base px-6 py-3 font-mono text-[13.5px] font-semibold uppercase tracking-wide text-attack"
            >
              지금 신청하기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
