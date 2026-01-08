"use client";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageTitle from "@/components/elements/PageTitle";
import { ChatMessage, ChatCommand } from "@/types";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: "Halo! Saya Open AI. Bagaimana saya bisa membantu?",
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [commands] = useState<ChatCommand[]>([
    { command: "/about-yusuf", description: "About Yusuf" },
    { command: "/help", description: "Show command feature" },
    { command: "/clear", description: "Clear all chat" },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setShowSuggestions(value.startsWith("/"));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      sendMessage();
    }
  };

  const selectCommand = (command: string) => {
    setInput(command);
    setShowSuggestions(false);
  };

  const sendMessage = async () => {
    if (!input.trim() || isCooldown) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);

    setInput("");
    setShowSuggestions(false);

    setIsTyping(true);
    setIsCooldown(true);

    setTimeout(() => {
      setIsCooldown(false);
    }, 3000);

    let botResponse = "";

    if (input.toLowerCase() === "/about-yusuf") {
      botResponse =
        "Yusuf is a 19-year-old web developer specializing in React.js and Node.js. He is passionate about building modern and scalable web applications using Next.js, Express.js, and MongoDB. He is also interested in server management, including VPS configuration and deployment.";
    } else if (input.toLowerCase() === "/help") {
      botResponse = "List command: /about-yusuf, /help, /clear.";
    } else if (input.toLowerCase() === "/clear") {
      setMessages([]);
      setIsTyping(false);
      return;
    } else {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "Nama Anda adalah Zaileys AI" },
            newMessage,
          ],
        }),
      });

      const data = await res.json();
      console.log("✅ Received API Response:", data);
      botResponse = data.content || "No response from AI";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="p-8">
      <PageTitle title="Chat Bot" description="Chat with Open AI" />
      <div className="mt-8 flex h-screen flex-col rounded-lg bg-gray-100">
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-md rounded-lg p-4 text-sm shadow-md md:max-w-lg ${
                msg.role === "user"
                  ? "ml-auto bg-indigo-500 text-white"
                  : "bg-white text-gray-800"
              }`}
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "90%",
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.content}
              </ReactMarkdown>
            </div>
          ))}
          {isTyping && (
            <div className="max-w-md animate-pulse rounded-lg bg-gray-200 p-3 text-gray-500 shadow-md md:max-w-lg">
              Bot sedang mengetik...
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="relative flex w-full items-center border-t border-gray-300 bg-white p-4">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={
              isCooldown
                ? "Tunggu sebentar sebelum mengirim pesan..."
                : "Tulis pesan atau gunakan command seperti /about-yusuf"
            }
            className="w-full rounded border border-gray-300 px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isCooldown}
          />
          <button
            onClick={sendMessage}
            className={`ml-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-md ${
              isCooldown
                ? "cursor-not-allowed bg-gray-400"
                : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
            }`}
            disabled={isCooldown}
          >
            Kirim
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute  top-full z-10 mb-8 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
            {commands
              .filter((cmd) =>
                cmd.command.toLowerCase().startsWith(input.toLowerCase()),
              )
              .map((cmd, index) => (
                <div
                  key={index}
                  onClick={() => selectCommand(cmd.command)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  <p className="font-semibold text-gray-700">{cmd.command}</p>
                  <p className="text-xs text-gray-500">{cmd.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
