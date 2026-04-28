"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Tristan, a Backend Developer from Quezon City. Feel free to ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-80 h-96
          bg-white dark:bg-zinc-900 rounded-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.2)] border border-zinc-200 dark:border-zinc-700
          flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3
            border-b border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Chat with Tristan
              </span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={16} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2 bg-white dark:bg-zinc-900">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.role === "bot" && (
                  <img
                    src="photos/profile-tristan.png"
                    alt="Tristan"
                    className="w-6 h-6 rounded-full object-cover shrink-0 block"
                  />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-br-none"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2">
                <img
                  src="photos/profile-tristan.png"
                  alt="Tristan"
                  className="w-6 h-6 rounded-full object-cover shrink-0 block"
                />
                <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 text-xs px-3 py-2 rounded-xl rounded-bl-none">
                  Typing...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-zinc-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-xs px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700
                bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900
                hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:opacity-40 transition-colors"
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 flex items-center justify-center gap-2
          p-3 sm:px-4 sm:py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full
          shadow-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all duration-200 z-50"
      >
        <MessageCircle size={16} />
        <span className="hidden sm:inline text-sm font-medium">Chat with Tristan</span>
      </button>
    </>
  );
}
