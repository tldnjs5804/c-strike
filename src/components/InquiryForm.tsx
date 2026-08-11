import { useState, type FormEvent } from "react";

const inputCls =
  "rounded-lg border border-border bg-bg-surface px-3.5 py-3 text-[14px] text-text-primary placeholder:text-text-muted transition-colors focus:border-defend focus:outline-none focus:ring-[3px] focus:ring-defend/10";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-page-in flex h-full flex-col items-center justify-center gap-3 rounded-[14px] border border-border bg-bg-card px-6 py-14 text-center">
        <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-defend/35 bg-defend/10 text-[22px] text-defend [animation:pop-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
          ✓
        </div>
        <h4 className="text-[16px] font-bold text-text-primary">문의가 등록되었습니다</h4>
        <p className="max-w-[320px] text-[13px] text-text-secondary">
          운영진 확인 후 답변이 등록되며, 위 문의 게시판에서 답변 상태를 확인하실 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] rounded-[14px] border border-border bg-bg-card p-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-[12.5px] font-semibold text-text-secondary" htmlFor="w-title">
          제목 <span className="text-attack">*</span>
        </label>
        <input id="w-title" required placeholder="문의 제목을 입력해주세요" className={inputCls} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-semibold text-text-secondary" htmlFor="w-name">
            작성자 <span className="text-attack">*</span>
          </label>
          <input id="w-name" required placeholder="이름/닉네임" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-semibold text-text-secondary" htmlFor="w-contact">
            연락처(이메일) <span className="text-attack">*</span>
          </label>
          <input id="w-contact" type="email" required placeholder="example@cju.ac.kr" className={inputCls} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[12.5px] font-semibold text-text-secondary" htmlFor="w-body">
          내용 <span className="text-attack">*</span>
        </label>
        <textarea
          id="w-body"
          required
          rows={4}
          placeholder="문의하실 내용을 자세히 적어주세요."
          className={`${inputCls} resize-y`}
        />
      </div>

      <label className="flex items-center gap-2 text-[12.5px] text-text-secondary">
        <input type="checkbox" required className="h-4 w-4 accent-defend" />
        개인정보 수집·이용에 동의합니다. <span className="text-attack">*</span>
      </label>

      <button
        type="submit"
        className="mt-1 rounded-lg bg-attack px-6 py-3 font-mono text-[13.5px] font-semibold text-white transition-all hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)] active:scale-[0.98]"
      >
        문의 등록하기
      </button>
    </form>
  );
}
