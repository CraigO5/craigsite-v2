"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send, Sparkles } from "lucide-react";
import { findResponse, suggestedQuestions } from "@/lib/chat-responses";
import ScreenHeader from "./ScreenHeader";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm a little bot that knows all about Craig. Ask me anything — his work, his tools, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const ask = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    // Simulated thinking delay
    setTimeout(() => {
      const answer = findResponse(trimmed);
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      setTyping(false);
    }, 600);
  };

  return (
    <section id="ask" className="mx-auto max-w-5xl px-6 pb-20">
      <ScreenHeader
        title="Ask me anything."
        subtitle="A friendly bot that knows Craig's work. Try a suggestion below."
        right={
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles size={12} className="text-accent" />
            beta
          </span>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-sm">
        <div
          ref={scrollRef}
          className="max-h-80 min-h-64 space-y-3 overflow-y-auto p-5"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {m.role === "bot" && (
                <Image
                  alt="Craig"
                  src="/craig.jpg"
                  width={28}
                  height={28}
                  className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                />
              )}
              <div
                className={`animate-fade-in max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-accent text-white"
                    : "bg-white/8 text-white/85"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex items-end gap-2">
              <Image
                alt="Craig"
                src="/craig.jpg"
                width={28}
                height={28}
                className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
              />
              <div className="flex gap-1 rounded-2xl bg-white/8 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:240ms]" />
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 border-t border-white/5 px-5 py-3">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => ask(q)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition-all duration-200 hover:border-accent/40 hover:text-white"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex items-center gap-2 border-t border-white/5 p-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you want to know?"
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}
