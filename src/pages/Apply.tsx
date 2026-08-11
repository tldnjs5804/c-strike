import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";

const inputCls =
  "rounded-lg border border-border bg-bg-card px-3.5 py-3 text-[14px] text-text-primary placeholder:text-text-muted transition-colors focus:border-defend focus:outline-none focus:ring-[3px] focus:ring-defend/10";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SubpageHero
        title="참가 신청"
        desc="9월 · 11월 대회 참가 신청서입니다. 정식 모집이 열리면 접수가 시작되며, 세부 일정은 확정되는 대로 안내드립니다."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[640px] px-6 sm:px-8">
          {submitted ? (
            <div className="animate-page-in flex flex-col items-center gap-3 rounded-[14px] border border-border bg-bg-card px-5 py-16 text-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-defend/35 bg-defend/10 text-[26px] text-defend [animation:pop-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
                ✓
              </div>
              <h3 className="text-[20px] font-bold text-text-primary">신청이 접수되었습니다</h3>
              <p className="mb-3 max-w-[380px] text-[14px] text-text-secondary">
                모집 시작 및 대회 일정이 확정되면 기재하신 연락처로 안내드립니다. 문의사항은 문의 게시판을 이용해주세요.
              </p>
              <Link
                to="/board"
                className="rounded-lg border border-border-strong px-[18px] py-2.5 font-mono text-[13px] font-semibold text-text-primary transition-all hover:border-defend hover:text-defend active:scale-[0.97]"
              >
                문의 게시판 가기
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-7 flex items-start gap-3 rounded-lg border border-amber/25 bg-amber/[0.06] px-4 py-3.5">
                <p className="text-[12.5px] leading-[1.6] text-text-secondary">
                  현재 9월 · 11월 대회의 상세 일정과 참가 자격은 확정 전입니다. 아래 정보를 미리 남겨두시면 모집 시작
                  시 우선 안내드립니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="name">
                    이름 <span className="text-attack">*</span>
                  </label>
                  <input id="name" required placeholder="홍길동" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="student-id">
                    학번 <span className="text-attack">*</span>
                  </label>
                  <input id="student-id" required placeholder="2024xxxxx" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="dept">
                    학과 <span className="text-attack">*</span>
                  </label>
                  <input id="dept" required placeholder="디지털보안학과" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="phone">
                    연락처 <span className="text-attack">*</span>
                  </label>
                  <input id="phone" type="tel" required placeholder="010-0000-0000" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="email">
                    이메일 <span className="text-attack">*</span>
                  </label>
                  <input id="email" type="email" required placeholder="example@cju.ac.kr" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="team">
                    팀 구성 (선택)
                  </label>
                  <textarea
                    id="team"
                    rows={3}
                    placeholder="함께 참가할 팀원이 있다면 이름 · 학번을 적어주세요. 팀이 아직 없다면 비워두셔도 됩니다."
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-text-secondary" htmlFor="note">
                    하고 싶은 말 (선택)
                  </label>
                  <textarea id="note" rows={3} placeholder="궁금한 점이나 남기고 싶은 말을 자유롭게 적어주세요." className={`${inputCls} resize-y`} />
                </div>

                <label className="flex items-center gap-2 text-[13px] text-text-secondary">
                  <input type="checkbox" required className="h-4 w-4 accent-defend" />
                  개인정보 수집·이용에 동의합니다. <span className="text-attack">*</span>
                </label>

                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-attack px-7 py-[15px] font-mono text-[14.5px] font-semibold text-white transition-all hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)] active:scale-[0.98]"
                >
                  신청서 제출하기
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
