import { Link } from "react-router-dom";
import { EVENT } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="mb-1 font-mono text-[15px] font-bold tracking-tight text-text-primary">{EVENT.name} {EVENT.year}</p>
            <p className="max-w-[280px] text-[13px] leading-relaxed text-text-muted">
              청주대학교 사이버공격방어대회 · CJU RISE 사이버보안 융합인재 양성사업단
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13.5px] text-text-secondary sm:flex sm:gap-8">
            <Link className="transition-colors hover:text-attack" to="/about">대회 소개</Link>
            <Link className="transition-colors hover:text-attack" to="/results">운영 성과</Link>
            <Link className="transition-colors hover:text-attack" to="/join">참가 안내</Link>
            <Link className="transition-colors hover:text-attack" to="/contact">문의하기</Link>
            <Link className="transition-colors hover:text-attack" to="/board">문의 게시판</Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11.5px] text-text-muted">
          <span>© {EVENT.year} {EVENT.name}. 청주대학교.</span>
          <span>ATTACK. DEFEND. SURVIVE.</span>
        </div>
      </div>
    </footer>
  );
}
