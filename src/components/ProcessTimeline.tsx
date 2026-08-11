import { PROCESS_STEPS } from "../data/content";

export default function ProcessTimeline() {
  return (
    <div className="reveal stagger-children grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
      {PROCESS_STEPS.map((step, i) => {
        const ring =
          step.variant === "attack"
            ? "border-attack/40 bg-attack/10 text-attack"
            : step.variant === "defend"
              ? "border-defend/40 bg-defend/10 text-defend"
              : "border-border-strong bg-bg-surface-alt text-text-secondary";
        return (
          <div key={step.n} className="relative flex lg:pr-4">
            <div className="flex flex-1 flex-col gap-3 rounded-[10px] border border-border bg-bg-card p-5">
              <div className="flex items-center gap-2.5">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[16px] ${ring}`}>
                  {step.icon}
                </span>
                <span className="font-mono text-[11px] font-bold text-text-muted">STEP {step.n}</span>
              </div>
              <h4 className="text-[14.5px] font-bold text-text-primary">{step.title}</h4>
              <p className="text-[12.5px] leading-relaxed text-text-secondary">{step.desc}</p>
            </div>
            {i < PROCESS_STEPS.length - 1 && (
              <span className="pointer-events-none absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 font-mono text-[16px] text-text-muted lg:block">
                →
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
