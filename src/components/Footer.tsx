import { Link } from "react-router-dom";
import { EVENT } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border py-12">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <span
            className="flex h-6 w-6 shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--color-attack), var(--color-defend))",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-text-primary">청주대학교 사이버공격방어대회</p>
            <p className="font-mono text-[11.5px] text-text-muted">CJU RISE 사이버보안 융합인재 양성사업단</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-text-secondary">
          <Link className="transition-colors hover:text-defend" to="/#about">대회 소개</Link>
          <Link className="transition-colors hover:text-defend" to="/#results">운영 성과</Link>
          <Link className="transition-colors hover:text-defend" to="/#join">참가 안내</Link>
          <Link className="transition-colors hover:text-defend" to="/#contact">문의하기</Link>
          <Link className="transition-colors hover:text-defend" to="/board">문의 게시판</Link>
        </nav>

        <p className="font-mono text-[12px] text-text-muted">
          © {EVENT.year} {EVENT.name}. 청주대학교.
        </p>
      </div>
    </footer>
  );
}
