function bladePoints(cx: number, cy: number, angleDeg: number, length: number, width: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const dx = Math.cos(rad);
  const dy = Math.sin(rad);
  const px = -dy;
  const py = dx;
  const tipX = cx + dx * length;
  const tipY = cy + dy * length;
  const curveX = cx + dx * length * 0.58 + px * width * 0.5;
  const curveY = cy + dy * length * 0.58 + py * width * 0.5;
  const baseLx = cx + px * width * 0.32;
  const baseLy = cy + py * width * 0.32;
  const baseRx = cx - px * width * 0.32;
  const baseRy = cy - py * width * 0.32;
  return `${baseLx.toFixed(1)},${baseLy.toFixed(1)} ${curveX.toFixed(1)},${curveY.toFixed(1)} ${tipX.toFixed(1)},${tipY.toFixed(1)} ${baseRx.toFixed(1)},${baseRy.toFixed(1)}`;
}

const PIVOT = { x: 260, y: 235 };

const LEFT_BLADES = [
  { angle: -100, length: 175, width: 22 },
  { angle: -121, length: 155, width: 20 },
  { angle: -142, length: 132, width: 18 },
  { angle: -161, length: 108, width: 16 },
  { angle: -178, length: 82, width: 14 },
];

const RIGHT_BLADES = [
  { angle: -80, length: 175, width: 22 },
  { angle: -59, length: 155, width: 20 },
  { angle: -38, length: 132, width: 18 },
  { angle: -19, length: 108, width: 16 },
  { angle: -2, length: 82, width: 14 },
];

export default function TitleBurst() {
  return (
    <svg
      viewBox="0 0 520 260"
      className="pointer-events-none absolute -left-10 -top-[168px] h-[290px] w-[600px] opacity-[0.92] sm:-left-4 sm:-top-[188px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tb-defend" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-defend)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-defend)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-defend)" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="tb-attack" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-attack)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-attack)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-attack)" stopOpacity="0.95" />
        </linearGradient>
        <filter id="tb-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="tb-soft" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        {LEFT_BLADES.map((b, i) => (
          <clipPath id={`tb-clip-l${i}`} key={`clip-l${i}`}>
            <polygon points={bladePoints(PIVOT.x, PIVOT.y, b.angle, b.length, b.width)} />
          </clipPath>
        ))}
        {RIGHT_BLADES.map((b, i) => (
          <clipPath id={`tb-clip-r${i}`} key={`clip-r${i}`}>
            <polygon points={bladePoints(PIVOT.x, PIVOT.y, b.angle, b.length, b.width)} />
          </clipPath>
        ))}
      </defs>

      {/* soft ambient glow at the base where the two wings meet */}
      <ellipse cx={PIVOT.x} cy={PIVOT.y} rx="120" ry="70" fill="var(--color-attack)" opacity="0.12" filter="url(#tb-soft)" />
      <ellipse cx={PIVOT.x} cy={PIVOT.y} rx="90" ry="60" fill="var(--color-defend)" opacity="0.12" filter="url(#tb-soft)" />

      <g filter="url(#tb-glow)">
        {LEFT_BLADES.map((b, i) => (
          <polygon key={`l${i}`} points={bladePoints(PIVOT.x, PIVOT.y, b.angle, b.length, b.width)} fill="url(#tb-defend)" />
        ))}
        {RIGHT_BLADES.map((b, i) => (
          <polygon key={`r${i}`} points={bladePoints(PIVOT.x, PIVOT.y, b.angle, b.length, b.width)} fill="url(#tb-attack)" />
        ))}
      </g>

      {/* faint binary-digit texture on the two longest blades */}
      <g className="font-mono" fontSize="8" fill="white">
        <text x={PIVOT.x - 210} y={PIVOT.y - 70} opacity="0.16" clipPath="url(#tb-clip-l0)" letterSpacing="1">
          {Array.from({ length: 10 }).map((_, i) => (
            <tspan key={i} x={PIVOT.x - 230} dy="11">
              {i % 2 === 0 ? "01001101" : "01101011"}
            </tspan>
          ))}
        </text>
        <text x={PIVOT.x + 190} y={PIVOT.y - 70} opacity="0.16" clipPath="url(#tb-clip-r0)" letterSpacing="1">
          {Array.from({ length: 10 }).map((_, i) => (
            <tspan key={i} x={PIVOT.x + 195} dy="11">
              {i % 2 === 0 ? "01100001" : "01110100"}
            </tspan>
          ))}
        </text>
      </g>

      {/* bright tip highlights */}
      {LEFT_BLADES.slice(0, 2).map((b, i) => {
        const rad = (b.angle * Math.PI) / 180;
        const tx = PIVOT.x + Math.cos(rad) * b.length;
        const ty = PIVOT.y + Math.sin(rad) * b.length;
        return <circle key={`ltip${i}`} cx={tx} cy={ty} r="2.5" fill="white" opacity="0.9" filter="url(#tb-glow)" />;
      })}
      {RIGHT_BLADES.slice(0, 2).map((b, i) => {
        const rad = (b.angle * Math.PI) / 180;
        const tx = PIVOT.x + Math.cos(rad) * b.length;
        const ty = PIVOT.y + Math.sin(rad) * b.length;
        return <circle key={`rtip${i}`} cx={tx} cy={ty} r="2.5" fill="white" opacity="0.9" filter="url(#tb-glow)" />;
      })}
    </svg>
  );
}
