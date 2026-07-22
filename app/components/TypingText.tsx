"use client";

import { useEffect, useState } from "react";

export default function TypingText({ phrases }: { phrases: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1600);
      return () => clearTimeout(t);
    }

    const current = phrases[phraseIdx];

    if (!deleting && charIdx === current.length) {
      setPaused(true);
      setDeleting(true);
      return;
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const speed = deleting ? 40 : 70;
    const t = setTimeout(() => {
      setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
      setCharIdx((c) => c + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(t);
  }, [charIdx, deleting, paused, phraseIdx, phrases]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-emerald-400 font-thin">|</span>
    </span>
  );
}
