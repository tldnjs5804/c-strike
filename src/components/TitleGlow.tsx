export default function TitleGlow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute left-1 top-[18px] h-[62px] w-[190px] rounded-full blur-[42px] sm:top-[22px] sm:h-[110px] sm:w-[340px] sm:blur-[62px]"
        style={{ background: "var(--color-defend)", opacity: 0.42 }}
      />
      <div
        className="absolute left-[160px] top-[22px] h-[56px] w-[110px] rounded-full blur-[38px] sm:left-[398px] sm:top-[22px] sm:h-[100px] sm:w-[210px] sm:blur-[56px]"
        style={{ background: "var(--color-attack)", opacity: 0.42 }}
      />

      <svg
        viewBox="0 0 600 40"
        className="absolute -left-1 top-[30px] h-[26px] w-[300px] overflow-visible sm:top-[58px] sm:h-[34px] sm:w-[600px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="tg-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-defend)" />
            <stop offset="100%" stopColor="var(--color-attack)" />
          </linearGradient>
        </defs>
        <line x1="4" y1="20" x2="596" y2="20" stroke="url(#tg-line)" strokeWidth="2" opacity="0.85" />
        <line x1="4" y1="20" x2="596" y2="20" stroke="url(#tg-line)" strokeWidth="7" opacity="0.16" />
        <circle className="hv-node" cx="4" cy="20" r="3" fill="var(--color-defend)" />
        <circle className="hv-node" cx="596" cy="20" r="3" fill="var(--color-attack)" style={{ animationDelay: "0.3s" }} />
      </svg>
    </div>
  );
}
