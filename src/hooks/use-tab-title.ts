"use client";

import { useEffect } from "react";

const ORIGINAL_TITLE = "Time to Kommit | Are you ready?";
const AWAY_TITLE = "Still kommiting? \u{1F440}";

export function useTabTitle() {
  useEffect(() => {
    function handleVisibility() {
      document.title = document.hidden ? AWAY_TITLE : ORIGINAL_TITLE;
    }

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);
}
