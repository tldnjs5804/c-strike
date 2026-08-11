import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";
import { Tag } from "../components/ui";
import { BOARD_POSTS } from "../data/content";

export default function Board() {
  return (
    <>
      <SubpageHero eyebrow="INQUIRY LOG" title="문의 게시판" desc="운영 관련 공지, 장애, 이의제기 등 접수된 문의와 답변 상태를 확인할 수 있습니다." />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-[12.5px] text-text-muted">
              총 <b className="text-text-primary">{BOARD_POSTS.length}</b>건의 문의
            </p>
            <Link
              to="/write"
              className="offset-btn border border-attack bg-bg-base px-4 py-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-wide text-attack"
            >
              문의 남기기
            </Link>
          </div>

          <div className="reveal stagger-children border border-border">
            <div className="hidden grid-cols-[110px_1fr_90px_100px] gap-3.5 border-b border-border bg-bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-text-muted sm:grid">
              <span>상태</span>
              <span>제목</span>
              <span>작성자</span>
              <span>작성일</span>
            </div>
            {BOARD_POSTS.map((post) => (
              <div
                key={post.id}
                className="row-accent grid grid-cols-[86px_1fr] items-center gap-3.5 border-b border-border py-4 pl-4 pr-5 text-[13.5px] transition-colors last:border-none hover:bg-bg-surface-alt sm:grid-cols-[110px_1fr_90px_100px]"
              >
                <Tag variant={post.status === "답변완료" ? "defend" : "amber"}>{post.status}</Tag>
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
