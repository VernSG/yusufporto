"use client";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Halo! Saya Zaileys AI. Bagaimana saya bisa membantu?",
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Untuk efek bot mengetik
  const [commands] = useState([
    { command: "/about-yusuf", description: "Penjelasan tentang Yusuf" },
    { command: "/help", description: "Dapatkan bantuan tentang fitur AI" },
    { command: "/clear", description: "Bersihkan semua chat di layar" },
  ]);

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
    <div className="flex h-screen flex-col bg-gray-100">
      <header className="bg-blue-600 py-4 text-center text-lg font-semibold text-white">
        Chat dengan Zaileys AI
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs rounded-lg p-3 md:max-w-md ${
              msg.role === "user"
                ? "ml-auto self-end bg-blue-500 text-white"
                : "self-start bg-gray-300 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {isTyping && (
          <div className="max-w-xs animate-pulse self-start rounded-lg bg-gray-300 p-3 text-gray-900 md:max-w-md">
            Bot sedang mengetik...
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 border-t bg-white p-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Tulis pesan..."
            className="w-full rounded-lg border px-4 py-2 outline-none"
          />
          {/* Dropdown suggestions */}
          {showSuggestions && (
            <div className="absolute bottom-full z-10 mb-2 w-full rounded-lg border bg-white shadow-md">
              {commands
                .filter((cmd) => cmd.command.startsWith(input))
                .map((cmd, index) => (
                  <div
                    key={index}
                    onClick={() => selectCommand(cmd.command)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    <span className="font-bold">{cmd.command}</span>
                    <p className="text-sm text-gray-500">{cmd.description}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
        <button
          onClick={sendMessage}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
