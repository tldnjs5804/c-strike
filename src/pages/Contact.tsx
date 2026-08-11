import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";
import { IndexBadge } from "../components/ui";

export default function Contact() {
  return (
    <>
      <SubpageHero
        eyebrow="SUPPORT · 04"
        title="문의하기"
        desc="운영 관련 공지, 장애, 이의제기는 Discord 채널과 문의 게시판을 통해 접수합니다."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <Link to="/board" className="offset-card offset-card-defend reveal flex flex-col justify-between gap-10 border-border p-8 sm:p-10">
              <div className="flex items-start justify-between">
                <IndexBadge n="A" variant="defend" />
                <span className="font-mono text-[20px] text-defend">→</span>
              </div>
              <div>
                <h3 className="mb-2.5 font-serif text-[22px] font-bold text-text-primary">문의 게시판</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">문의글 리스트, 답변 상태 표시</p>
              </div>
            </Link>
            <Link to="/write" className="offset-card offset-card-attack reveal flex flex-col justify-between gap-10 border-border p-8 sm:p-10">
              <div className="flex items-start justify-between">
                <IndexBadge n="B" variant="attack" />
                <span className="font-mono text-[20px] text-attack">→</span>
              </div>
              <div>
                <h3 className="mb-2.5 font-serif text-[22px] font-bold text-text-primary">문의 남기기</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">문의 작성 폼, 운영진 답변 열람</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
