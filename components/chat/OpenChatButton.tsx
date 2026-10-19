"use client";

import * as React from "react";
import { EVENT_CHAT } from "@/lib/motion";

export function OpenChatButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(EVENT_CHAT))}
    >
      {children}
    </button>
  );
}
