import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AMENITIES,
  BOARD_POSTS,
  BONUS_STATS,
  EVENT,
  HERO_STATS,
  JOIN_ITEMS,
  LEADERBOARD,
  PURPOSES,
  RESULTS_OVERVIEW,
  RULES,
  SATISFACTION,
  TARGETS,
  TARGETS_NOTE,
} from "../data/content";
import { Card, SectionSub, SectionTitle, Eyebrow, Tag } from "../components/ui";
import CountUp from "../components/CountUp";
import MatchFlow from "../components/MatchFlow";
import InquiryForm from "../components/InquiryForm";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [hash]);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="border-b border-border pb-16 pt-[128px] sm:pb-24 sm:pt-[160px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="hero-stagger">
            <p className="mb-5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-defend">
              {EVENT.eyebrow}
            </p>

            <h1 className="mb-6 font-mono text-[clamp(38px,6vw,76px)] font-extrabold leading-[1.02] tracking-tight">
              <span className="bg-gradient-to-b from-white to-[#c7cee0] bg-clip-text text-transparent">{EVENT.name}</span>
              <span className="ml-3 text-attack" style={{ textShadow: "0 0 24px rgba(255,70,85,0.35)" }}>
                {EVENT.year}
              </span>
            </h1>

            <div className="mb-7 flex flex-wrap gap-4 font-mono text-[15px] font-bold tracking-[0.06em]">
              <span className="text-attack">{EVENT.slogan[0]}</span>
              <span className="text-defend">{EVENT.slogan[1]}</span>
              <span className="text-text-primary">{EVENT.slogan[2]}</span>
            </div>

            <p className="mb-10 max-w-[480px] text-[16.5px] leading-relaxed text-text-secondary">{EVENT.desc}</p>

            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 rounded-lg bg-attack px-6 py-3 font-mono text-[13.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)]"
              >
                지금 신청하기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="reveal self-start rounded-[10px] border border-border-strong bg-bg-card p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              FILE No. CJU-2026-CSTRIKE
            </p>
            <dl className="flex flex-col divide-y divide-border">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between py-3.5 first:pt-0 last:pb-0">
                  <dt className="text-[13px] text-text-secondary">{s.label}</dt>
                  <dd className="font-mono text-[26px] font-bold text-text-primary">
                    <CountUp value={parseInt(s.num, 10)} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-center gap-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-wide text-defend">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-defend" />
              접수 상태 · 확인 중
            </div>
          </div>
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>BRIEFING · 대회 소개</Eyebrow>
          <SectionTitle>대회가 만드는 것</SectionTitle>
          <SectionSub>
            단순 문제풀이(Jeopardy)를 넘어선 실전형 공격·방어(Attack-Defense) 대회. 실제 침해 대응 환경을 모사해
            진짜 실무형 보안 인재를 발굴합니다.
          </SectionSub>

          <div className="reveal stagger-children mb-16 flex flex-col gap-3.5">
            {PURPOSES.map((p) => (
              <div key={p} className="flex items-start gap-3.5 rounded-[10px] border border-border bg-bg-card px-5 py-[18px]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-defend/10 text-[12px] font-bold text-defend">
                  ✓
                </span>
                <p className="text-[14.5px] leading-[1.7] text-text-secondary">{p}</p>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-2 text-[19px] font-bold text-text-primary">어떻게 진행되나요?</h3>
          <p className="reveal mb-6 text-[13.5px] text-text-secondary">
            방어와 공격을 동시에, 반복적으로 수행하며 취약점이 단계적으로 공개됩니다.
          </p>
          <div className="mb-16">
            <MatchFlow />
          </div>

          <h3 className="reveal mb-5 text-[17px] font-bold text-text-primary">세부 운영 정보</h3>
          <div className="reveal stagger-children mb-16 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {RULES.map((r) => (
              <div key={r.term} className="flex items-start gap-3.5 rounded-[10px] border border-border bg-bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-surface-alt text-[18px]">
                  {r.icon}
                </span>
                <div>
                  <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wide text-text-muted">{r.term}</p>
                  <p className="text-[14px] leading-relaxed text-text-secondary">{r.value}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-5 text-[17px] font-bold text-text-primary">공략해야 할 취약점</h3>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div className="reveal stagger-children flex flex-col gap-3">
              {TARGETS.map((t) => (
                <div key={t.tag} className="flex items-baseline gap-3.5 rounded-lg border border-border bg-bg-card px-4 py-3.5">
                  <span className="min-w-16 shrink-0 font-mono text-[11px] font-bold text-attack">{t.tag}</span>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="reveal rounded-lg border border-border bg-bg-surface px-5 py-4 text-[13px] leading-relaxed text-text-secondary">
              {TARGETS_NOTE}
            </p>
          </div>

          <div
            className="reveal mt-16 rounded-[14px] border border-amber/25 p-8 sm:p-10"
            style={{ background: "linear-gradient(135deg, rgba(255,185,55,0.06), rgba(23,29,43,0.4))" }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="mb-2 font-mono text-[11.5px] font-semibold uppercase tracking-wide text-amber">BONUS ZONE</p>
                <h3 className="mb-3 text-[24px] font-bold text-text-primary">보너스 구간</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  A/D 서비스와 별개로 모든 팀이 접근 가능한 공용 Jeopardy 구역. 공방 소강상태 시 몰입도를 유지하고
                  팀 전략 다양성을 부여합니다.
                </p>
              </div>
              <div className="reveal stagger-children flex flex-col gap-3.5">
                {BONUS_STATS.map((b) => (
                  <div key={b.label} className="flex items-baseline gap-3">
                    <span className="min-w-[110px] font-mono text-[18px] font-bold text-amber">{b.value}</span>
                    <span className="text-[12.5px] text-text-muted">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section id="results" className="scroll-mt-[68px] border-b border-border bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>AFTER ACTION REPORT · 운영 성과</Eyebrow>
          <SectionTitle>지난 대회는 이랬습니다</SectionTitle>
          <SectionSub>
            CJU C-Strike 사이버공격방어대회 · 2026년 6월 22일 진행. 처음 참가하는 분들이 신뢰하고 신청할 수 있도록
            지난 대회 결과를 그대로 공개합니다.
          </SectionSub>

          <div className="reveal stagger-children mb-12 grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_OVERVIEW.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 border-border bg-bg-card p-5 ${
                  i !== RESULTS_OVERVIEW.length - 1 ? "sm:border-r" : ""
                } border-b sm:border-b-0`}
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-defend">{item.label}</span>
                <span className="text-[14.5px] font-medium leading-snug text-text-primary">{item.value}</span>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-5 text-[17px] font-bold text-text-primary">최종 순위</h3>
          <div className="reveal mb-12 rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="flex flex-col">
              <div className="grid grid-cols-[36px_1fr_70px] gap-3 pb-2.5 font-mono text-[11px] uppercase tracking-wide text-text-muted sm:grid-cols-[48px_1fr_100px_120px]">
                <span>순위</span>
                <span>팀</span>
                <span>점수</span>
                <span className="hidden sm:block" />
              </div>
              <div className="reveal stagger-children">
                {LEADERBOARD.map((row) => (
                  <div
                    key={row.team}
                    className={`row-accent grid grid-cols-[36px_1fr_70px] items-center gap-3 border-b border-border py-3 pl-3 text-[14px] last:border-none sm:grid-cols-[48px_1fr_100px_120px] ${
                      row.rank === 1 ? "rounded-lg bg-gradient-to-r from-amber/10 to-transparent" : ""
                    }`}
                  >
                    <span className={`font-mono font-bold ${row.rank === 1 ? "text-[16px] text-amber" : "text-text-secondary"}`}>
                      {row.rank}
                    </span>
                    <span className="font-semibold text-text-primary">{row.team}</span>
                    <span className={`font-mono ${row.rank === 1 ? "font-bold text-amber" : "text-text-secondary"}`}>
                      <CountUp value={row.score} format={(n) => n.toLocaleString()} />
                    </span>
                    <span className="hidden h-1.5 overflow-hidden rounded-full bg-bg-surface-alt sm:block">
                      <i
                        className="bar-fill block h-full rounded-full"
                        style={{ width: `${row.pct}%`, background: row.rank === 1 ? "var(--color-amber)" : "var(--color-defend)" }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-[18px] border-t border-dashed border-border pt-4 text-[12px] text-text-muted">
              ※ 참가자 실명은 결과보고서에 기재되어 있으나, 외부 공개용 페이지 게재 여부는 확인 중입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card>
              <p className="mb-3.5 text-[14px] text-text-secondary">24명 중 17명 응답 · 5점 척도 4점 이상 = 긍정</p>
              <div className="reveal stagger-children flex flex-col gap-2.5">
                {SATISFACTION.map((s) => (
                  <div key={s.label} className="grid grid-cols-[110px_1fr_34px] items-center gap-2.5 text-[12.5px] sm:grid-cols-[120px_1fr_34px]">
                    <span className="text-text-secondary">{s.label}</span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-bg-surface-alt">
                      <i className="bar-fill block h-full rounded-full bg-defend" style={{ width: `${s.pct}%` }} />
                    </span>
                    <b className="text-right font-mono font-semibold text-text-primary">{s.count}</b>
                  </div>
                ))}
              </div>
              <p className="mt-3.5 text-[12.5px] leading-relaxed text-text-muted">
                주요 긍정 의견 — 공방전 방식, 팀 협업, 문제 다양성, 운영진 지원
              </p>
            </Card>

            <Card>
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-lg bg-attack/10 text-[16px] text-attack">
                ☕
              </div>
              <h3 className="mb-2.5 text-[17px] font-bold text-text-primary">참가자 편의</h3>
              <ul className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                  <li key={a} className="flex gap-1.5 text-[14px] text-text-secondary">
                    <span className="font-bold text-defend">›</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- JOIN ---------- */}
      <section id="join" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>MISSION BRIEF · 참가 안내</Eyebrow>
          <SectionTitle>참가 전 확인할 것</SectionTitle>
          <SectionSub>9월 · 11월 대회 예정 — 상세 일정과 조건은 확정되는 대로 공개합니다.</SectionSub>

          <div className="reveal rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="reveal stagger-children mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {JOIN_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 rounded-lg border border-border bg-bg-surface p-4">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">{item.label}</span>
                  <span
                    className={
                      item.pending
                        ? "inline-flex items-center gap-1.5 font-mono text-[12.5px] text-amber before:content-['○']"
                        : "text-[14px] text-text-secondary"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
              <p className="max-w-[400px] text-[13.5px] text-text-muted">
                신청은 구글 폼으로 받습니다. 이름·학번·연락처·팀 구성 정보를 준비해주세요.
              </p>
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 rounded-lg bg-attack px-7 py-[15px] font-mono text-[14.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)]"
              >
                지금 신청하기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="scroll-mt-[68px] bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>SUPPORT · 문의하기</Eyebrow>
          <SectionTitle>문의하기</SectionTitle>
          <SectionSub>운영 관련 공지, 장애, 이의제기는 Discord 채널과 아래 문의 게시판을 통해 접수합니다.</SectionSub>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[17px] font-bold text-text-primary">문의 게시판</h3>
                <p className="font-mono text-[12px] text-text-muted">
                  총 <b className="text-text-primary">{BOARD_POSTS.length}</b>건
                </p>
              </div>
              <div className="reveal stagger-children overflow-hidden rounded-xl border border-border bg-bg-card">
                <div className="hidden grid-cols-[100px_1fr_80px] gap-3 border-b border-border bg-bg-surface px-4 py-3 font-mono text-[10.5px] uppercase tracking-wide text-text-muted sm:grid">
                  <span>상태</span>
                  <span>제목</span>
                  <span>작성일</span>
                </div>
                {BOARD_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="row-accent grid grid-cols-[76px_1fr] items-center gap-3 border-b border-border py-3.5 pl-3.5 pr-4 text-[13px] transition-colors last:border-none hover:bg-bg-surface-alt sm:grid-cols-[100px_1fr_80px]"
                  >
                    <Tag variant={post.status === "답변완료" ? "defend" : "amber"}>{post.status}</Tag>
                    <span className="font-medium text-text-primary">{post.title}</span>
                    <span className="hidden font-mono text-[11.5px] text-text-muted sm:block">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[17px] font-bold text-text-primary">문의 남기기</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
