import type { Variants } from "framer-motion";

/** One easing for the whole site: fast start, long settle, like heavy stock coming to rest. */
export const EASE_IRON = [0.16, 1, 0.3, 1] as const;

export const fadeReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_IRON } },
};

/** Reduced-motion replacement: opacity only, no travel. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const staggerReveal = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** A headline line sliding up out of a clipped mask. */
export const textLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE_IRON } },
};

export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.2, ease: EASE_IRON } },
};

export const WHATSAPP_NUMBER = "918853358005";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Cross-component events, so the chat, the sticky bar and the configurator can talk without a store. */
export const EVENT_PREFILL = "ironsirony:prefill";
export const EVENT_CHAT = "ironsirony:chat";

export interface PrefillDetail {
  type?: string;
  need?: string;
}
