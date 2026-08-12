const LOG_LINES: { time: string; tag?: "DEFEND" | "ATTACK" | "SYSTEM" | "SCORE"; text: string }[] = [
  { time: "14:02:11", tag: "DEFEND", text: "team_03 patched web-01 (CVE-2024-11029)" },
  { time: "14:02:44", tag: "ATTACK", text: "team_01 → team_05 web-02 FLAG_CAPTURED" },
  { time: "14:03:02", tag: "SYSTEM", text: "취약점팩 2/5 공개 — pwn-01, crypto-01" },
  { time: "14:03:37", tag: "ATTACK", text: "team_06 → team_02 pwn-01 FLAG_CAPTURED" },
  { time: "14:04:05", tag: "DEFEND", text: "team_02 리셋 완료 · 서비스 정상화 OK" },
  { time: "14:04:51", tag: "ATTACK", text: "team_04 → team_01 web-01 FLAG_CAPTURED" },
  { time: "14:05:18", tag: "DEFEND", text: "team_05 patched pwn-01" },
  { time: "14:05:49", tag: "SCORE", text: "team_01 32,730 · team_02 21,272" },
];

const TAG_CLASS: Record<string, string> = {
  DEFEND: "text-defend font-bold",
  ATTACK: "text-attack font-bold",
  SYSTEM: "text-text-muted",
  SCORE: "text-text-muted",
};

function LogLines() {
  return (
    <>
      {LOG_LINES.map((line, i) => (
        <div key={i} className="whitespace-nowrap">
          <span className="mr-2.5 text-text-muted">{line.time}</span>
          {line.tag && <span className={TAG_CLASS[line.tag]}>{line.tag}</span>} {line.text}
        </div>
      ))}
    </>
  );
}

export default function TerminalLog() {
  return (
    <div className="reveal self-start overflow-hidden rounded-[10px] border border-border-strong bg-gradient-to-b from-bg-card to-bg-surface shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_30px_70px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="ml-2 font-mono text-[11.5px] text-text-muted">live · match.log</span>
      </div>
      <div className="h-[268px] overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-[2.1] text-text-secondary">
        <div className="log-scroll">
          <LogLines />
          <LogLines />
        </div>
      </div>
    </div>
  );
}
