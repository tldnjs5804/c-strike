import { Link } from "react-router-dom";
import { Eyebrow, SectionTitle, SectionSub } from "../ui";
import { JOIN_ITEMS } from "../../data/content";

export default function JoinSection() {
  return (
    <section id="join" className="py-24 sm:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
        <Eyebrow>MISSION BRIEF · 참가 안내</Eyebrow>
        <SectionTitle>참가 전 확인할 것</SectionTitle>
        <SectionSub>9월 · 11월 대회 예정 — 상세 일정과 조건은 확정되는 대로 공개합니다.</SectionSub>

        <div id="join-checklist" className="reveal rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
          <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {JOIN_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 rounded-lg border border-border bg-bg-surface p-4">
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
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
            <p className="max-w-[400px] text-[13.5px] text-text-muted">
              신청서는 별도 페이지에서 접수합니다. 이름·학번·연락처·팀 구성 정보를 준비해주세요.
            </p>
            <Link
              to="/apply"
              className="group inline-flex items-center gap-2 rounded-lg bg-attack px-7 py-[15px] font-mono text-[14.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)] active:scale-[0.97] active:translate-y-0"
            >
              지금 신청하기
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
