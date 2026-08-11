import { Link } from "react-router-dom";
import { Eyebrow, SectionTitle, SectionSub, Card } from "../ui";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
        <Eyebrow>SUPPORT · 문의하기</Eyebrow>
        <SectionTitle>문의하기</SectionTitle>
        <SectionSub>운영 관련 공지, 장애, 이의제기는 Discord 채널과 문의 게시판을 통해 접수합니다.</SectionSub>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Link to="/board" className="reveal block">
            <Card className="h-full">
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-lg bg-defend/10 text-[16px] text-defend">
                ☰
              </div>
              <h3 className="mb-2.5 text-[17px] font-bold text-text-primary">문의 게시판</h3>
              <p className="text-[14px] text-text-secondary">문의글 리스트, 답변 상태 표시</p>
              <span className="mt-3.5 inline-block font-mono text-[12.5px] font-semibold text-defend">게시판 열기 →</span>
            </Card>
          </Link>
          <Link to="/write" className="reveal block">
            <Card className="h-full">
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-lg bg-attack/10 text-[16px] text-attack">
                ✎
              </div>
              <h3 className="mb-2.5 text-[17px] font-bold text-text-primary">문의 남기기</h3>
              <p className="text-[14px] text-text-secondary">문의 작성 폼, 운영진 답변 열람</p>
              <span className="mt-3.5 inline-block font-mono text-[12.5px] font-semibold text-defend">글쓰기 →</span>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
