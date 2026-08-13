export default function KeyVisual() {
  return (
    <svg viewBox="0 0 220 220" className="h-auto w-full max-w-[560px]" aria-hidden="true">
      <defs>
        <clipPath id="kv-shield-clip">
          <path d="M110,14 L188,46 L188,108 C188,158 154,192 110,206 C66,192 32,158 32,108 L32,46 Z" />
        </clipPath>
        <linearGradient id="kv-shield-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-defend)" />
          <stop offset="48%" stopColor="var(--color-defend-dark)" />
          <stop offset="52%" stopColor="var(--color-attack-dark)" />
          <stop offset="100%" stopColor="var(--color-attack)" />
        </linearGradient>
      </defs>

      <g clipPath="url(#kv-shield-clip)">
        <rect x="0" y="0" width="220" height="220" fill="url(#kv-shield-grad)" opacity="0.16" />
      </g>

      <path
        d="M110,14 L188,46 L188,108 C188,158 154,192 110,206 C66,192 32,158 32,108 L32,46 Z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
      />
      <path d="M110,20 L110,200" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />

      {/* corner nodes with radiating circuit traces, reusing hero network-graph motion */}
      <line className="hv-path" x1="32" y1="46" x2="10" y2="30" stroke="var(--color-defend)" strokeWidth="1.5" />
      <circle className="hv-node" cx="10" cy="30" r="3.5" fill="var(--color-defend)" />

      <line className="hv-path" x1="32" y1="108" x2="8" y2="120" stroke="var(--color-defend)" strokeWidth="1.5" style={{ animationDelay: "0.2s" }} />
      <circle className="hv-node" cx="8" cy="120" r="3.5" fill="var(--color-defend)" style={{ animationDelay: "0.2s" }} />

      <line className="hv-path" x1="188" y1="46" x2="210" y2="30" stroke="var(--color-attack)" strokeWidth="1.5" style={{ animationDelay: "0.35s" }} />
      <circle className="hv-node" cx="210" cy="30" r="3.5" fill="var(--color-attack)" style={{ animationDelay: "0.35s" }} />

      <line className="hv-path" x1="188" y1="108" x2="212" y2="120" stroke="var(--color-attack)" strokeWidth="1.5" style={{ animationDelay: "0.5s" }} />
      <circle className="hv-node" cx="212" cy="120" r="3.5" fill="var(--color-attack)" style={{ animationDelay: "0.5s" }} />

      {/* captured-flag mark at the center */}
      <line x1="100" y1="66" x2="100" y2="154" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M100,72 L136,86 L100,100 Z" fill="white" />
      <circle cx="100" cy="154" r="4" fill="white" />
    </svg>
  );
}
