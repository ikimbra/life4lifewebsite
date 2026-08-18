"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a headline figure up when it scrolls into view.
 *
 * Progressive enhancement, deliberately: the server renders the real, final
 * value as ordinary text. Without JS, with reduced motion, or before
 * hydration on a slow connection, the correct number is simply there. The
 * animation only ever replaces a number the reader could already see.
 *
 * That matters more than usual here. These are a charity's impact figures,
 * the thing a sceptical donor checks. Rendering them into a pseudo-element
 * so CSS could animate them would make them unselectable and hide them from
 * assistive technology, which is a bad trade for a flourish.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    /* Split "5,000+" into 5000 and "+", "100%" into 100 and "%". Anything
       without a leading number is left alone. */
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) return;
    const target = Number(match[1].replace(/,/g, ""));
    const suffix = match[2];
    if (!Number.isFinite(target) || target <= 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        observer.disconnect();

        const DURATION = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          /* Matches --ease-out: fast start, settles into the final value. */
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(target * eased);
          setDisplay(current.toLocaleString("en-GB") + suffix);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
