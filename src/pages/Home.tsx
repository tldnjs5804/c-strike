import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AMENITIES,
  BOARD_POSTS,
  BONUS_STATS,
  EVENT,
  JOIN_ITEMS,
  LEADERBOARD,
  PRIZES,
  PURPOSES,
  RESULTS_OVERVIEW,
  RULES,
  SATISFACTION,
  TARGETS,
  TARGETS_NOTE,
} from "../data/content";
import { Card, SectionSub, SectionTitle, Eyebrow } from "../components/ui";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CountUp from "../components/CountUp";
import MatchFlow from "../components/MatchFlow";
import InquiryForm from "../components/InquiryForm";
import HeroVisual from "../components/HeroVisual";
import TerminalLog from "../components/TerminalLog";
import TitleIcon from "../components/TitleIcon";
import SectionDots from "../components/SectionDots";
import { Box, Coffee, Crosshair, Flag, MessageSquare, Network, Trophy } from "lucide-react";

const RULE_ICONS = [Crosshair, Network, Box, Flag, MessageSquare];

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
      <SectionDots />

      {/* ---------- HERO ---------- */}
      <header id="hero" className="relative h-screen snap-start overflow-x-hidden overflow-y-auto border-b border-border pb-16 pt-[100px] sm:pb-24 sm:pt-[140px]">
        <div
          className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[110px]"
          style={{ background: "var(--color-attack)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full opacity-[0.14] blur-[110px]"
          style={{ background: "var(--color-defend)" }}
          aria-hidden="true"
        />
        <HeroVisual />
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="hero-stagger">
            <p className="mb-5 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-defend">
              {EVENT.eyebrow}
            </p>

            <div className="mb-6 flex items-center gap-4 sm:gap-5">
              <TitleIcon />
              <h1 className="font-mono text-[clamp(38px,6vw,76px)] font-extrabold leading-[0.97] tracking-tight text-text-primary">
                {EVENT.name} <span className="text-attack">{EVENT.year}</span>
              </h1>
            </div>

            <div className="mb-7 flex flex-wrap gap-4 font-mono text-[17.5px] font-bold tracking-[0.06em]">
              <span className="text-attack">{EVENT.slogan[0]}</span>
              <span className="text-defend">{EVENT.slogan[1]}</span>
              <span className="text-text-primary">{EVENT.slogan[2]}</span>
            </div>

            <p className="mb-10 max-w-[480px] text-[19px] leading-relaxed text-text-secondary">{EVENT.desc}</p>

            <div className="flex flex-wrap items-center gap-5">
              <Button asChild size="lg">
                <Link to="/apply" className="group">
                  지금 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <span className="font-mono text-[14.5px] text-text-secondary">9월 · 11월 대회 예정</span>
            </div>
          </div>

          <TerminalLog />
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="h-screen scroll-mt-[68px] snap-start overflow-y-auto border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>대회 소개</Eyebrow>
          <SectionTitle>대회가 만드는 것</SectionTitle>
          <SectionSub>
            단순 문제풀이(Jeopardy)를 넘어선 <b className="text-text-primary">실전형 공격·방어(Attack-Defense)</b> 대회.
            실제 침해 대응 환경을 모사해 진짜 실무형 보안 인재를 발굴합니다.
          </SectionSub>

          <div className="reveal stagger-children mb-16 flex flex-col gap-3.5">
            {PURPOSES.map((p) => (
              <div key={p} className="flex items-start gap-3.5 rounded-[10px] border border-border bg-bg-card px-5 py-[18px]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-defend/10 text-[13px] font-bold text-defend">
                  ✓
                </span>
                <p className="text-[16.5px] leading-[1.7] text-text-primary">{p}</p>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-2 text-[21.5px] font-bold text-text-primary">어떻게 진행되나요?</h3>
          <p className="reveal mb-6 text-[15.5px] text-text-secondary">
            방어와 공격을 동시에, 반복적으로 수행하며 취약점이 단계적으로 공개됩니다.
          </p>
          <div className="mb-16">
            <MatchFlow />
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">세부 운영 정보</h3>
          <div className="reveal stagger-children mb-16 flex flex-col divide-y divide-border rounded-[10px] border border-border bg-bg-card">
            {RULES.map((r, i) => {
              const Icon = RULE_ICONS[i];
              return (
                <div key={r.term} className="flex items-start gap-4 px-5 py-5 sm:items-center sm:gap-6 sm:px-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-defend/30 bg-defend/10 text-defend">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-1 sm:items-baseline sm:gap-8">
                    <span className="w-full shrink-0 text-[19px] font-extrabold text-defend sm:w-[132px]">
                      {r.term}
                    </span>
                    <p className="text-[15px] leading-relaxed text-text-secondary">{r.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">공략해야 할 취약점</h3>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div className="reveal stagger-children flex flex-col gap-3">
              {TARGETS.map((t) => (
                <div key={t.tag} className="flex items-baseline gap-3.5 rounded-lg border border-border bg-bg-card px-4 py-3.5">
                  <span className="min-w-16 shrink-0 font-mono text-[13px] font-bold text-attack">{t.tag}</span>
                  <p className="text-[15.5px] leading-relaxed text-text-primary">{t.desc}</p>
                </div>
              ))}
            </div>
            <Alert variant="defend" className="reveal">
              <b className="text-text-primary">{TARGETS_NOTE.lead}</b>
              {TARGETS_NOTE.rest}
            </Alert>
          </div>

          <div
            className="reveal mt-16 rounded-[14px] border border-defend/25 p-8 sm:p-10"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.07), rgba(20,22,27,0.4))" }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <h3 className="mb-3 text-[26px] font-bold text-text-primary">보너스 구간</h3>
                <p className="text-[16px] leading-relaxed text-text-secondary">
                  A/D 서비스와 별개로 <b className="text-text-primary">모든 팀이 접근 가능한 공용 Jeopardy 구역</b>.
                  공방 소강상태 시 몰입도를 유지하고 팀 전략 다양성을 부여합니다.
                </p>
              </div>
              <div className="reveal stagger-children flex flex-col gap-3.5">
                {BONUS_STATS.map((b) => (
                  <div key={b.label} className="flex items-baseline gap-3">
                    <span className="min-w-[110px] font-mono text-[19.5px] font-bold text-defend">{b.value}</span>
                    <span className="text-[14.5px] text-text-secondary">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal mt-16 rounded-[16px] border border-attack/25 bg-bg-card p-9 sm:p-14">
            <div className="mb-9 flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-attack/30 bg-attack/10 text-attack">
                <Trophy className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="text-[32px] font-bold text-text-primary">대회 상금</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[13px] py-4">구분</TableHead>
                  <TableHead className="text-[13px] py-4">상금</TableHead>
                  <TableHead className="text-right text-[13px] py-4 sm:text-left">인원</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {PRIZES.map((p) => (
                  <TableRow key={p.tier} className={p.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}>
                    <TableCell className={`py-6 font-semibold ${p.highlight ? "text-[20px] text-attack" : "text-[18px] text-text-primary"}`}>
                      {p.tier}
                    </TableCell>
                    <TableCell className={`py-6 font-mono font-bold ${p.highlight ? "text-[26px] text-attack" : "text-[21px] text-text-primary"}`}>
                      {p.amount}
                    </TableCell>
                    <TableCell className="py-6 text-right text-[16px] text-text-secondary sm:text-left">{p.winners}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-6 border-t border-dashed border-border pt-4 text-[14px] text-text-muted">
              ※ 상금 규모는 스폰서십 확정에 따라 변경될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section id="results" className="h-screen scroll-mt-[68px] snap-start overflow-y-auto border-b border-border bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>운영 성과</Eyebrow>
          <SectionTitle>지난 대회는 이랬습니다</SectionTitle>
          <SectionSub>
            CJU C-Strike 사이버공격방어대회 · 2026년 6월 22일 진행.{" "}
            <b className="text-text-primary">처음 참가하는 분들이 신뢰하고 신청할 수 있도록</b> 지난 대회 결과를
            그대로 공개합니다.
          </SectionSub>

          <div className="reveal stagger-children mb-12 grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_OVERVIEW.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 border-border bg-bg-card p-5 ${
                  i !== RESULTS_OVERVIEW.length - 1 ? "sm:border-r" : ""
                } border-b sm:border-b-0`}
              >
                <span className="font-mono text-[12.5px] font-bold uppercase tracking-wide text-defend">{item.label}</span>
                <span className="text-[16.5px] font-medium leading-snug text-text-primary">{item.value}</span>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">최종 순위</h3>
          <div className="reveal mb-12 rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-9 px-0">순위</TableHead>
                  <TableHead>팀</TableHead>
                  <TableHead className="text-right sm:text-left">점수</TableHead>
                  <TableHead className="hidden sm:table-cell" />
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {LEADERBOARD.map((row) => (
                  <TableRow
                    key={row.team}
                    className={row.rank === 1 ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}
                  >
                    <TableCell className={`px-0 font-mono font-bold ${row.rank === 1 ? "text-[17.5px] text-attack" : "text-text-secondary"}`}>
                      {row.rank}
                    </TableCell>
                    <TableCell className="font-semibold text-text-primary">{row.team}</TableCell>
                    <TableCell className={`text-right font-mono sm:text-left ${row.rank === 1 ? "font-bold text-attack" : "text-text-secondary"}`}>
                      <CountUp value={row.score} format={(n) => n.toLocaleString()} />
                    </TableCell>
                    <TableCell className="hidden w-[120px] sm:table-cell">
                      <span className="block h-1.5 overflow-hidden rounded-full bg-bg-surface-alt">
                        <i
                          className="bar-fill block h-full rounded-full"
                          style={{ width: `${row.pct}%`, background: row.rank === 1 ? "var(--color-attack)" : "var(--color-defend)" }}
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-[18px] border-t border-dashed border-border pt-4 text-[14px] text-text-muted">
              ※ 참가자 실명은 결과보고서에 기재되어 있으나, 외부 공개용 페이지 게재 여부는 확인 중입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card>
              <p className="mb-3.5 text-[16px] text-text-secondary">24명 중 17명 응답 · 5점 척도 4점 이상 = 긍정</p>
              <div className="reveal stagger-children flex flex-col gap-2.5">
                {SATISFACTION.map((s) => (
                  <div key={s.label} className="grid grid-cols-[110px_1fr_34px] items-center gap-2.5 text-[14.5px] sm:grid-cols-[120px_1fr_34px]">
                    <span className="text-text-secondary">{s.label}</span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-bg-surface-alt">
                      <i className="bar-fill block h-full rounded-full bg-defend" style={{ width: `${s.pct}%` }} />
                    </span>
                    <b className="text-right font-mono font-semibold text-text-primary">{s.count}</b>
                  </div>
                ))}
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-text-secondary">
                주요 긍정 의견 — 공방전 방식, 팀 협업, 문제 다양성, 운영진 지원
              </p>
            </Card>

            <Card>
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-lg border border-attack/30 bg-attack/10 text-attack">
                <Coffee className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2.5 text-[19.5px] font-bold text-text-primary">참가자 편의</h3>
              <ul className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                  <li key={a} className="flex gap-1.5 text-[16px] text-text-primary">
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
      <section id="join" className="flex h-screen scroll-mt-[68px] snap-start flex-col justify-center overflow-y-auto border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>참가 안내</Eyebrow>
          <SectionTitle>참가 전 확인할 것</SectionTitle>
          <SectionSub>9월 · 11월 대회 예정 — 상세 일정과 조건은 확정되는 대로 공개합니다.</SectionSub>

          <div className="reveal rounded-[14px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="reveal stagger-children mb-7 flex flex-col divide-y divide-border">
              {JOIN_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-full shrink-0 font-mono text-[13px] font-bold uppercase tracking-wide text-defend sm:w-[168px]">
                    {item.label}
                  </span>
                  {item.pending ? (
                    <Badge variant="muted" className="w-fit text-text-secondary">
                      {item.value}
                    </Badge>
                  ) : (
                    <span className="text-[16.5px] font-semibold text-text-primary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <Separator className="mb-6" />
            <div className="flex flex-wrap items-center justify-between gap-5">
              <p className="max-w-[400px] text-[15.5px] text-text-secondary">
                신청은 <b className="text-text-primary">구글 폼</b>으로 받습니다. 이름·학번·연락처·팀 구성 정보를
                준비해주세요.
              </p>
              <Button asChild size="lg">
                <Link to="/apply" className="group">
                  지금 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="flex h-screen scroll-mt-[68px] snap-start flex-col justify-center overflow-y-auto bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>문의하기</Eyebrow>
          <SectionTitle>문의하기</SectionTitle>
          <SectionSub>운영 관련 공지, 장애, 이의제기는 Discord 채널과 아래 문의 게시판을 통해 접수합니다.</SectionSub>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[19.5px] font-bold text-text-primary">문의 게시판</h3>
                <p className="font-mono text-[14px] text-text-muted">
                  총 <b className="text-text-primary">{BOARD_POSTS.length}</b>건
                </p>
              </div>
              <div className="reveal stagger-children overflow-hidden rounded-xl border border-border bg-bg-card">
                <div className="hidden grid-cols-[100px_1fr_80px] gap-3 border-b border-border bg-bg-surface px-4 py-3 font-mono text-[12px] uppercase tracking-wide text-text-secondary sm:grid">
                  <span>상태</span>
                  <span>제목</span>
                  <span>작성일</span>
                </div>
                {BOARD_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="grid grid-cols-[76px_1fr] items-center gap-3 border-b border-border py-3.5 pl-3.5 pr-4 text-[15px] transition-colors last:border-none hover:bg-bg-surface-alt sm:grid-cols-[100px_1fr_80px]"
                  >
                    <Badge variant={post.status === "답변완료" ? "defend" : "muted"}>{post.status}</Badge>
                    <span className="font-medium text-text-primary">{post.title}</span>
                    <span className="hidden font-mono text-[13.5px] text-text-muted sm:block">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[19.5px] font-bold text-text-primary">문의 남기기</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
