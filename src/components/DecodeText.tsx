import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-/<>";

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

/** Terminal-style decode-in effect: characters scramble, then lock in left-to-right. */
export default function DecodeText({
  text,
  as: Tag = "span",
  className = "",
  startDelay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  startDelay?: number;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const lockedUntil = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(text);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame.current += 1;
        if (frame.current % 2 === 0) lockedUntil.current += 1;

        if (lockedUntil.current >= text.length) {
          setDisplay(text);
          if (interval) clearInterval(interval);
          return;
        }

        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < lockedUntil.current) return ch;
              return randomGlyph();
            })
            .join("")
        );
      }, 40);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, startDelay]);

  return (
    <Tag className={className} aria-label={text}>
      {display}
    </Tag>
  );
}
