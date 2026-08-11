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

// 대회 흐름 — 1) 한 번 일어나는 준비, 2) 대회 시간 내내 반복되는 공방전, 3) 한 번 일어나는 마감.
// 가운데 단계가 실제 "Attack-Defense"의 핵심이라 시각적으로도 다른 두 단계보다 크게 강조합니다.
export const MATCH_FLOW = {
  before: { icon: "🖥️", title: "팀 편성 & 서버 배포", desc: "팀별 독립 컨테이너 서버 배정, OpenVPN으로 대회 전용망 접속" },
  core: {
    icon: "⚔️🛡️",
    title: "공방전 — Attack ⇄ Defend",
    desc: "내 서버는 방어하면서 동시에 상대 서버를 공격. 대회 시간 내내 이 두 가지를 계속 반복합니다.",
  },
  after: { icon: "🏆", title: "채점 & 순위 확정", desc: "플래그 자동 검증, 공격 성공 시 점수 즉시 반영" },
};

// 취약점팩 공개 시점 (대회 시작 후 경과 시간, 단위: 시간)
export const VULN_RELEASE_HOURS = [0, 2, 4, 6, 8];

export const HERO_STATS = [
  { num: "24", label: "지난 대회 참가자(명)" },
  { num: "6", label: "참가 팀" },
  { num: "12", label: "운영 시간" },
];

export const PURPOSES = [
  "우수 학생 발굴 및 전공 분야 재학생들의 실전형 공격·방어 역량 강화 및 팀 기반 협업 능력 배양",
  "실제 침해 대응 환경을 모사한 Attack-Defense 방식 운영을 통한 실무형 보안 인재 발굴",
  "청주대학교 RISE 사업 연계 사이버보안 교육 생태계 내 정례 대회 체계 수립 및 향후 독립 운영 기반 마련",
];

export const RULES = [
  { icon: "⚔️", term: "방식", value: "Attack & Defense" },
  { icon: "🌐", term: "네트워크", value: "OpenVPN 기반 대회 전용 내부망, 참가자망·운영망 독립 운영" },
  { icon: "📦", term: "팀 환경", value: "컨테이너 기반 독립 운영, 원클릭 리셋 지원" },
  { icon: "🚩", term: "채점", value: "플래그 자동 생성·주입, 공격/피공격/시각/취약점 정보로 추적·부정행위 검증" },
  { icon: "💬", term: "소통 채널", value: "Discord 채널·스레드로 공지·장애·이의제기 접수, 티켓 시스템 연동" },
];

export const TARGETS = [
  { tag: "WEB", desc: "로그인 우회, 데이터베이스 조작, 서버 요청 변조 등 웹 서비스 취약점" },
  { tag: "PWNABLE", desc: "메모리 취약점을 활용한 프로그램 제어 취약점 (바이너리)" },
  { tag: "기타", desc: "네트워크 프로토콜, 암호 취약점 등 선택적 포함" },
];

export const TARGETS_NOTE =
  "취약점팩 5개, 대회 시작 후 0 / 2 / 4 / 6 / 8시간 시점에 전 팀 동시 순차 공개 — 팀별 문제 세트는 다르게, 난이도는 동등하게 구성해 공정성을 확보합니다.";

export const BONUS_STATS = [
  { value: "5~10개", label: "혼합 문제 수 (웹·포렌식·암호학)" },
  { value: "20~30%", label: "전체 점수 비중" },
  { value: "동적 배점", label: "먼저 풀수록 고득점, 최저 하한점수 보장" },
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
  { label: "일정 · 시간 · 장소", value: "확정 전 · Coming soon", pending: true },
  { label: "참가 자격 · 팀 구성", value: "확정 전 · Coming soon", pending: true },
  { label: "대회 방식", value: "Attack & Defense (위 대회 소개 참조)", pending: false },
  { label: "참가 혜택", value: "확정 전 · Coming soon", pending: true },
];

export const BOARD_POSTS = [
  { id: 5, title: "9월 대회 참가 자격 관련 문의드립니다", author: "김**", date: "2026.08.09", status: "답변완료" as const },
  { id: 4, title: "팀 구성 인원 수는 몇 명까지 가능한가요?", author: "이**", date: "2026.08.07", status: "답변완료" as const },
  { id: 3, title: "노트북 스펙 관련 안내 부탁드려요", author: "박**", date: "2026.08.05", status: "답변대기" as const },
  { id: 2, title: "대회 당일 주차 가능 여부 문의", author: "최**", date: "2026.08.02", status: "답변완료" as const },
  { id: 1, title: "지난 대회 문제 자료 열람 가능할까요?", author: "정**", date: "2026.07.29", status: "답변대기" as const },
];
