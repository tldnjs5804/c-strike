import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";

const inputCls =
  "rounded-lg border border-border bg-bg-card px-3.5 py-3 text-[14px] text-text-primary placeholder:text-text-muted transition-colors focus:border-defend focus:outline-none focus:ring-[3px] focus:ring-defend/10";

export default function Write() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SubpageHero title="문의 남기기" desc="대회 관련 궁금한 점을 남겨주시면 운영진이 확인 후 답변드립니다." />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[640px] px-6 sm:px-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 rounded-[14px] border border-border bg-bg-card px-5 py-16 text-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-defend/35 bg-defend/10 text-[26px] text-defend">
                ✓
              </div>
              <h3 className="text-[20px] font-bold text-text-primary">문의가 등록되었습니다</h3>
              <p className="mb-3 max-w-[380px] text-[14px] text-text-secondary">
                운영진 확인 후 답변이 등록되며, 문의 게시판에서 답변 상태를 확인하실 수 있습니다.
              </p>
              <Link
                to="/board"
                className="rounded-lg border border-border-strong px-[18px] py-2.5 font-mono text-[13px] font-semibold text-text-primary transition-colors hover:border-defend hover:text-defend"
              >
                문의 게시판 가기
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-secondary" htmlFor="w-title">
                  제목 <span className="text-attack">*</span>
                </label>
                <input id="w-title" required placeholder="문의 제목을 입력해주세요" className={inputCls} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-secondary" htmlFor="w-name">
                  작성자 <span className="text-attack">*</span>
                </label>
                <input id="w-name" required placeholder="이름 또는 닉네임" className={inputCls} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-secondary" htmlFor="w-contact">
                  답변받을 연락처(이메일) <span className="text-attack">*</span>
                </label>
                <input id="w-contact" type="email" required placeholder="example@cju.ac.kr" className={inputCls} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-secondary" htmlFor="w-body">
                  내용 <span className="text-attack">*</span>
                </label>
                <textarea
                  id="w-body"
                  required
                  rows={7}
                  placeholder="문의하실 내용을 자세히 적어주세요."
                  className={`${inputCls} resize-y`}
                />
              </div>

              <label className="flex items-center gap-2 text-[13px] text-text-secondary">
                <input type="checkbox" required className="h-4 w-4 accent-defend" />
                개인정보 수집·이용에 동의합니다. <span className="text-attack">*</span>
              </label>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-attack px-7 py-[15px] font-mono text-[14.5px] font-semibold text-white transition-all hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)]"
              >
                문의 등록하기
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
