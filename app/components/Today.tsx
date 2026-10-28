"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function todayLong() {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Read on the client so a statically built page doesn't show its build date
export default function Today() {
  const date = useSyncExternalStore(subscribe, todayLong, () => null);
  if (!date) return null;
  return (
    <>
      {date}
      <span className="mx-2.5 text-white/25" aria-hidden="true">|</span>
    </>
  );
}
