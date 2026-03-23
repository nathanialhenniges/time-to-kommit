"use client";

import { useState, useEffect } from "react";

const TAGLINES = [
  'git commit -m "no turning back"',
  "Your future self will thank you.",
  "Merge day is coming.",
  "Push or perish.",
  "No rebasing allowed.",
  "The diff is real.",
];

export function useTagline(): { text: string; visible: boolean } {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TAGLINES.length);
        setVisible(true);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return { text: TAGLINES[index], visible };
}
