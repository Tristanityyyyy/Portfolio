"use client";
import { useState } from "react";

type Message = { role: "user" | "bot"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg }),
    });
    const { reply } = await res.json();
    setMessages((m) => [...m, { role: "bot", text: reply }]);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 font-semibold text-sm">Chat</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${m.role === "user" ? "ml-auto bg-zinc-900 text-white dark:bg-white dark:text-black" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-xs text-zinc-400">Thinking…</div>}
          </div>
          <div className="flex border-t border-zinc-200 dark:border-zinc-700">
            <input
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none"
              placeholder="Ask me anything…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send} className="px-4 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Send</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black shadow-lg text-xl"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
