import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";
import { BOARD_POSTS } from "../data/content";

export default function Board() {
  return (
    <>
      <SubpageHero title="문의 게시판" desc="운영 관련 공지, 장애, 이의제기 등 접수된 문의와 답변 상태를 확인할 수 있습니다." />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[13.5px] text-text-muted">
              총 <b className="text-text-primary">{BOARD_POSTS.length}</b>건의 문의
            </p>
            <Link
              to="/write"
              className="rounded-md bg-attack px-4 py-2.5 font-mono text-[13px] font-semibold text-white transition-all hover:bg-attack-dark active:scale-[0.96]"
            >
              문의 남기기
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-bg-card">
            <div className="hidden grid-cols-[100px_1fr_90px_100px] gap-3.5 bg-bg-surface-alt px-5 py-4 font-mono text-[11px] uppercase tracking-wide text-text-muted sm:grid">
              <span>번호</span>
              <span>제목</span>
              <span>작성자</span>
              <span>작성일</span>
            </div>
            {BOARD_POSTS.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[64px_1fr] items-center gap-3.5 border-b border-border px-5 py-4 text-[13.5px] transition-all last:border-none hover:translate-x-0.5 hover:bg-bg-surface-alt sm:grid-cols-[100px_1fr_90px_100px]"
              >
                <span
                  className={`w-fit rounded-full px-2.5 py-1 font-mono text-[11px] font-bold ${
                    post.status === "답변완료" ? "bg-defend/10 text-defend" : "bg-amber/10 text-amber"
                  }`}
                >
                  {post.status}
                </span>
                <span className="font-medium text-text-primary">{post.title}</span>
                <span className="hidden font-mono text-[12px] text-text-muted sm:block">{post.author}</span>
                <span className="hidden font-mono text-[12px] text-text-muted sm:block">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
