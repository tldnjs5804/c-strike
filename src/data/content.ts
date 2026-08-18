export const EVENT = {
  name: "C-STRIKE",
  year: "2026",
  slogan: ["ATTACK.", "DEFEND.", "SURVIVE."],
  org: "청주대학교 사이버공격방어대회",
  eyebrow: "CJU RISE 사이버보안 융합인재 양성 · 청주대학교",
  desc: "청주대학교 사이버공격방어대회 — 실전형 Attack-Defense로 검증하는 진짜 보안 실력",
};

// 참가 신청 구글 폼 URL. 실제 폼이 만들어지면 이 값만 교체하면 사이트 전체에 반영됩니다.
export const GOOGLE_FORM_URL = "";

// 대회 타임라인 양 끝 — 한 번만 일어나는 시작(팀 편성)과 끝(채점).
// 그 사이 전체 구간은 방어·공격이 대회 시간 내내 반복되는 공방전 구간입니다.
export const MATCH_FLOW = {
  before: { title: "팀 편성 & 서버 배포" },
  after: { title: "채점 & 순위 확정" },
};

// 취약점팩 공개 일정 — 타임라인 위 시간(h) 눈금으로 표시.
export const VULN_RELEASE_HOURS = [0, 2, 4, 6, 8];

export const PURPOSES = [
  { title: "역량 강화", desc: "실전형 공격·방어 역량 강화 · 팀 협업 능력 배양" },
  { title: "인재 발굴", desc: "실무형 보안 인재 발굴" },
  { title: "체계 수립", desc: "정례 대회 체계 수립 · 독립 운영 기반 마련" },
];

export const RULES = [
  { term: "방식", value: "Attack & Defense" },
  { term: "네트워크", value: "OpenVPN 전용 내부망 · 참가자망/운영망 분리" },
  { term: "팀 환경", value: "컨테이너 기반 · 원클릭 리셋" },
  { term: "채점", value: "플래그 자동 생성 · 공격 로그 기반 부정행위 검증" },
  { term: "소통 채널", value: "Discord · 티켓 시스템 연동" },
];

export const TARGETS = [
  { tag: "WEB", desc: "로그인 우회 · DB 조작 · 요청 변조" },
  { tag: "PWNABLE", desc: "메모리 취약점 기반 바이너리 익스플로잇" },
  { tag: "기타", desc: "네트워크 · 암호 취약점 (선택)" },
];

export const TARGETS_NOTE = {
  lead: "팀별 문제는 다르게, 난이도는 동일하게",
  rest: " — 공정성을 확보합니다.",
};

export const BONUS_STATS = [
  { value: "5~10개", label: "혼합 문제 수 (웹·포렌식·암호학)" },
  { value: "20~30%", label: "전체 점수 비중" },
  { value: "동적 배점", label: "먼저 풀수록 고득점, 최저 하한점수 보장" },
];

// 상금 규모는 스폰서십 확정 전 잠정 수치입니다.
export const PRIZES = [
  { tier: "대상", amount: "100만원", winners: "1팀", highlight: true },
  { tier: "최우수상", amount: "50만원", winners: "1팀", highlight: false },
  { tier: "우수상", amount: "30만원", winners: "2팀", highlight: false },
  { tier: "장려상", amount: "10만원", winners: "2팀", highlight: false },
];

export const RESULTS_OVERVIEW = [
  { label: "일시", value: "2026년 6월 22일 (월) · 10:00 – 22:00" },
  { label: "참가 규모", value: "총 24명 · 6팀" },
  { label: "참가 학과", value: "디지털보안학과, 인공지능소프트웨어학과" },
  { label: "운영 방식", value: "Attack & Defense" },
];

export const LEADERBOARD = [
  { rank: 1, team: "1팀", score: 32730, pct: 100 },
  { rank: 2, team: "2팀", score: 21272, pct: 65 },
  { rank: 3, team: "3팀", score: 17820, pct: 54 },
  { rank: 4, team: "4팀", score: 13210, pct: 40 },
  { rank: 5, team: "6팀", score: 9128, pct: 28 },
  { rank: 6, team: "5팀", score: 2128, pct: 7 },
];

export const SATISFACTION = [
  { label: "보안 역량 향상", pct: 88, count: "15명" },
  { label: "공지·문의 대응", pct: 88, count: "15명" },
  { label: "전반 만족도", pct: 76, count: "13명" },
  { label: "대회 방식 흥미도", pct: 76, count: "13명" },
];

export const AMENITIES = [
  "청주대 주변 카페 10곳 섭외 · 참가팀 희망 카페 선택 운영",
  "인당 1만 원 자체 제작 쿠폰(음료·디저트) 지원",
  "개인 노트북 기반 팀별 참여",
];

export const JOIN_ITEMS = [
  { label: "일정 · 시간 · 장소", value: "확정 전", pending: true },
  { label: "참가 자격 · 팀 구성", value: "확정 전", pending: true },
  { label: "대회 방식", value: "Attack & Defense", pending: false },
  { label: "참가 혜택", value: "확정 전", pending: true },
];

export const BOARD_POSTS = [
  { id: 5, title: "9월 대회 참가 자격 관련 문의드립니다", author: "김**", date: "2026.08.09", status: "답변완료" as const },
  { id: 4, title: "팀 구성 인원 수는 몇 명까지 가능한가요?", author: "이**", date: "2026.08.07", status: "답변완료" as const },
  { id: 3, title: "노트북 스펙 관련 안내 부탁드려요", author: "박**", date: "2026.08.05", status: "답변대기" as const },
  { id: 2, title: "대회 당일 주차 가능 여부 문의", author: "최**", date: "2026.08.02", status: "답변완료" as const },
  { id: 1, title: "지난 대회 문제 자료 열람 가능할까요?", author: "정**", date: "2026.07.29", status: "답변대기" as const },
];
