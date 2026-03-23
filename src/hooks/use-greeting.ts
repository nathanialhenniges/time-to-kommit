"use client";

import { useState, useEffect } from "react";

export function useGreeting(): string {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning, early committer.");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon. Ready to ship?");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good evening, code crafter.");
    } else {
      setGreeting("Hey night owl. Still kommitting?");
    }
  }, []);

  return greeting;
}
