"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";
import Link from "next/link";
import { BRIEF_SPACES, BRIEF_TYPES, matchIntent, WELCOME, type Reply } from "@/data/assistant";
import { buildWhatsAppMessage } from "@/lib/enquiry";
import { EASE_IRON, EVENT_CHAT, EVENT_PREFILL, PREFILL_KEY, whatsappLink } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "bot" | "you"; reply?: Reply; text: string };


export function ChatAssistant() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [brief, setBrief] = React.useState<{ type?: string; space?: string }>({});
  const [step, setStep] = React.useState<"idle" | "type" | "space" | "done">("idle");
  const idRef = React.useRef(0);
  const logRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const launcherRef = React.useRef<HTMLButtonElement>(null);

  const push = React.useCallback((m: Omit<Msg, "id">) => {
    setMsgs((cur) => [...cur, { ...m, id: ++idRef.current }]);
  }, []);

  const botSay = React.useCallback(
    (reply: Reply) => {
      if (reduce) return push({ from: "bot", text: reply.text, reply });
      setTyping(true);
      window.setTimeout(() => {
        setTyping(false);
        push({ from: "bot", text: reply.text, reply });
      }, 450);
    },
    [push, reduce]
  );

  const openChat = React.useCallback(() => {
    setOpen(true);
  }, []);

  React.useEffect(() => {
    window.addEventListener(EVENT_CHAT, openChat);
    return () => window.removeEventListener(EVENT_CHAT, openChat);
  }, [openChat]);

  React.useEffect(() => {
    if (open && msgs.length === 0) push({ from: "bot", text: WELCOME.text, reply: WELCOME });
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [open, msgs.length, push]);

  React.useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [msgs, typing, reduce]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const startBrief = () => {
    setStep("type");
    setBrief({});
    botSay({ text: "Good. What are you building?", chips: BRIEF_TYPES });
  };

  const handle = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    push({ from: "you", text });
    setInput("");

    if (step === "type" && BRIEF_TYPES.includes(text)) {
      setBrief({ type: text });
      setStep("space");
      return botSay({ text: "And what kind of space is it for?", chips: BRIEF_SPACES });
    }
    if (step === "space" && BRIEF_SPACES.includes(text)) {
      setBrief((b) => ({ ...b, space: text }));
      setStep("done");
      return botSay({
        text: "That is enough to start. Next is a short description of what you have in mind, and ideally a few photos. Continue in the project form, or message us on WhatsApp with this brief.",
        handoff: true,
      });
    }
    if (/start (my )?brief|start a project|get started|begin/i.test(text)) return startBrief();
    if (/^contact us$/i.test(text)) return botSay(matchIntent("contact"));
    botSay(matchIntent(text));
  };

  const continueInForm = () => {
    setOpen(false);
    const here = document.getElementById("start");
    if (here) {
      window.dispatchEvent(new CustomEvent(EVENT_PREFILL, { detail: { type: brief.type, space: brief.space } }));
      here.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    } else {
      try {
        sessionStorage.setItem(PREFILL_KEY, JSON.stringify({ type: brief.type, space: brief.space }));
      } catch {}
      router.push("/contact#start");
    }
  };

  const waText = buildWhatsAppMessage({ projectType: brief.type, space: brief.space });

  if (pathname === "/quote") return null;

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="chat-panel"
        className={cn(
          "fixed z-40 right-4 bottom-3 md:right-6 md:bottom-6 h-[52px] md:h-14 flex items-center gap-3 px-4 md:px-5",
          "bg-canvas-bg text-iron-950 border border-iron-950/15 shadow-[0_10px_40px_rgba(0,0,0,0.22)]",
          "micro font-medium hover:bg-accent-amber transition-colors duration-300"
        )}
      >
        <MessageSquare className="w-4 h-4" aria-hidden="true" />
        <span className="hidden md:inline">Ask about your project</span>
        <span className="sr-only md:hidden">Ask about your project</span>
      </button>

      <AnimatePresence>
        {open && (
          <m.section
            id="chat-panel"
            role="dialog"
            aria-label="Project guide"
            className="fixed z-50 inset-x-0 bottom-0 md:inset-x-auto md:right-6 md:bottom-24 md:w-[400px] h-[min(78svh,640px)] bg-iron-950 text-canvas-bg flex flex-col border border-canvas-bg/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: EASE_IRON }}
          >
            <header className="flex items-center justify-between px-5 h-14 border-b border-canvas-bg/10 shrink-0">
              <div>
                <p className="micro text-accent-amber">Project guide</p>
              </div>
              <button
                type="button"
                aria-label="Close assistant"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                className="w-11 h-11 -mr-3 flex items-center justify-center"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </header>

            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
            >
              {msgs.map((m, idx) => {
                const last = idx === msgs.length - 1;
                return (
                  <div key={m.id} className={cn("max-w-[88%]", m.from === "you" ? "ml-auto" : "")}>
                    <p
                      className={cn(
                        "text-[0.95rem] leading-relaxed px-4 py-3",
                        m.from === "you"
                          ? "bg-canvas-bg text-iron-950"
                          : "bg-iron-800 text-canvas-bg/90"
                      )}
                    >
                      {m.text}
                    </p>
                    {m.from === "bot" && last && m.reply && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.reply.handoff && (
                          <>
                            <button
                              type="button"
                              onClick={continueInForm}
                              className="micro min-h-[40px] px-4 bg-accent-amber text-iron-950 font-medium"
                            >
                              Continue in project form
                            </button>
                            <a
                              href={whatsappLink(waText)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="micro min-h-[40px] px-4 inline-flex items-center border border-canvas-bg/30"
                            >
                              Send on WhatsApp
                            </a>
                          </>
                        )}
                        {m.reply.links?.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="micro min-h-[40px] px-4 inline-flex items-center bg-canvas-bg text-iron-950 font-medium"
                          >
                            {l.label}
                          </Link>
                        ))}
                        {m.reply.chips?.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handle(c)}
                            className="text-[0.82rem] min-h-[40px] px-3.5 border border-canvas-bg/25 hover:border-accent-amber hover:text-accent-amber transition-colors"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {typing && (
                <p className="micro text-canvas-bg/50" aria-label="Assistant is typing">
                  …
                </p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handle(input);
              }}
              className="shrink-0 flex border-t border-canvas-bg/10"
            >
              <label htmlFor="chat-input" className="sr-only">
                Your question
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about gates, railings, custom work…"
                autoComplete="off"
                className="flex-1 bg-transparent px-5 h-14 text-[16px] placeholder:text-canvas-bg/40 focus:outline-none focus-visible:bg-iron-800"
              />
              <button type="submit" aria-label="Send" className="w-14 flex items-center justify-center hover:text-accent-amber">
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </m.section>
        )}
      </AnimatePresence>
    </>
  );
}
