type IconProps = { className?: string };

const sw = 1.6;

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    </svg>
  );
}

export function IconCrosshair({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2" />
    </svg>
  );
}

export function IconNetwork({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 8v4M12 12L6.5 17M12 12l5.5 5" />
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5.5" cy="19" r="2.2" />
      <circle cx="18.5" cy="19" r="2.2" />
    </svg>
  );
}

export function IconCube({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3.3l7.5 4.2v9L12 20.7l-7.5-4.2v-9L12 3.3z" />
      <path d="M12 12.2v8.5M12 12.2L4.5 7.7M12 12.2l7.5-4.5" />
    </svg>
  );
}

export function IconFlag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 21V4" />
      <path d="M6 4.5h12.5l-3.3 4 3.3 4H6" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 5.5h16v10H9.5L5 20v-4.5H4v-10z" />
      <path d="M8 9.5h8M8 12.3h5" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="6.2" rx="1.3" />
      <rect x="4" y="13.8" width="16" height="6.2" rx="1.3" />
      <path d="M7.2 7.1h.01M7.2 16.9h.01" />
    </svg>
  );
}

export function IconTrophy({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.5 4h9v4.2a4.5 4.5 0 01-9 0V4z" />
      <path d="M7.5 5H4.3v1.8a3 3 0 003 3M16.5 5h3.2v1.8a3 3 0 01-3 3" />
      <path d="M12 12.7v3M9.3 19.5h5.4M10.3 16.7h3.4v2.8h-3.4z" />
    </svg>
  );
}

export function IconCup({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 8h11v5.5a5 5 0 01-5 5h-1a5 5 0 01-5-5V8z" />
      <path d="M16 9.3h1.6a2.4 2.4 0 010 4.8H16" />
      <path d="M8 4.2c0 1-1.1 1-1.1 2.1M12.2 4.2c0 1-1.1 1-1.1 2.1" />
    </svg>
  );
}
