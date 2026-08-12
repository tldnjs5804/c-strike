import SubpageHero from "../components/SubpageHero";
import { GOOGLE_FORM_URL } from "../data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CHECKLIST = ["이름", "학번", "학과", "연락처", "이메일", "팀 구성 (있다면)"];

export default function Apply() {
  const formReady = GOOGLE_FORM_URL.length > 0;

  return (
    <>
      <SubpageHero
        eyebrow="APPLICATION"
        title="참가 신청"
        desc="9월 · 11월 대회 참가 신청서입니다. 정식 모집이 열리면 접수가 시작되며, 세부 일정은 확정되는 대로 안내드립니다."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[560px] px-6 sm:px-8">
          <div className="rounded-[14px] border border-border bg-bg-card p-7 sm:p-9">
            <p className="mb-1.5 font-mono text-[12px] uppercase tracking-wide text-defend">Google Form</p>
            <h3 className="mb-3 text-[20px] font-bold text-text-primary">신청은 구글 폼으로 받습니다</h3>
            <p className="mb-6 text-[15px] leading-relaxed text-text-secondary">
              개인정보는 저희 사이트가 아닌 구글 폼을 통해 안전하게 수집됩니다. 아래 정보를 미리 준비해두시면
              빠르게 작성하실 수 있어요.
            </p>

            <ul className="mb-7 flex flex-wrap gap-2">
              {CHECKLIST.map((item) => (
                <li key={item}>
                  <Badge variant="muted" className="px-3 py-1.5 text-[13px] normal-case text-text-secondary">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>

            {formReady ? (
              <Button asChild size="lg" className="group w-full">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                  구글 폼으로 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Button>
            ) : (
              <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-dashed border-border-strong px-7 py-[15px] text-center">
                <span className="font-mono text-[14px] font-semibold text-text-secondary">신청 폼 준비 중입니다</span>
                <span className="text-[13px] text-text-muted">모집이 시작되면 이 자리에 구글 폼 링크가 열립니다.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
