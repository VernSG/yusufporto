"use client";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Halo! Saya Open AI. Bagaimana saya bisa membantu?",
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Untuk efek bot mengetik
  const [commands] = useState([
    { command: "/about-yusuf", description: "Penjelasan tentang Yusuf" },
    { command: "/help", description: "Dapatkan bantuan tentang fitur AI" },
    { command: "/clear", description: "Bersihkan semua chat di layar" },
  ]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Auto-scroll ke bawah setiap kali pesan baru ditambahkan
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInput(value);

    // Tampilkan suggestions jika input diawali dengan "/"
    if (value.startsWith("/")) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && input.trim()) {
      sendMessage(); // Kirim pesan saat Enter ditekan
    }
  };

  const selectCommand = (command: any) => {
    setInput(command); // Masukkan command yang dipilih ke input
    setShowSuggestions(false); // Sembunyikan dropdown
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);

    setInput("");
    setShowSuggestions(false);

    setIsTyping(true); // Bot mulai mengetik

    let botResponse = "";

    if (input.toLowerCase() === "/about-yusuf") {
      botResponse =
        "Yusuf adalah seorang pengembang berbakat yang memiliki keahlian dalam membangun aplikasi AI dan bot Discord.";
    } else if (input.toLowerCase() === "/help") {
      botResponse =
        "Daftar command yang tersedia: /about-yusuf, /help, /clear.";
    } else if (input.toLowerCase() === "/clear") {
      // Clear semua pesan
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
      console.log("✅ Received API Response:", data); // Debugging
      botResponse = data.content || "No response from AI";
    }

    // Simulasikan waktu mengetik
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsTyping(false); // Selesai mengetik
    }, 1500); // Animasi mengetik selama 1,5 detik
  };

  return (
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

      <div className="relative flex items-center border-t border-gray-300 bg-white p-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Tulis pesan atau gunakan command seperti /about-yusuf"
          className="w-full rounded border border-gray-300 px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={sendMessage}
          className="ml-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
        >
          Kirim
        </button>
      </div>

      {showSuggestions && (
        <ul className="absolute bottom-20 left-4 z-10 w-full max-w-md rounded-lg bg-white shadow-md">
          {commands.map((cmd, index) => (
            <li
              key={index}
              onClick={() => selectCommand(cmd.command)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              <strong>{cmd.command}</strong>: {cmd.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
