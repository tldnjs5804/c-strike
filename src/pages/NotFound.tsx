import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 font-mono text-[13px] font-semibold uppercase tracking-widest text-attack">404 · FILE NOT FOUND</p>
      <h1 className="mb-3 font-serif text-[32px] font-bold text-text-primary">페이지를 찾을 수 없습니다</h1>
      <p className="mb-8 text-[14px] text-text-secondary">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="offset-btn border border-attack bg-bg-base px-7 py-[15px] font-mono text-[13.5px] font-semibold uppercase tracking-wide text-attack"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
