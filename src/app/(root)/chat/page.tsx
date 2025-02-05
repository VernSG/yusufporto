"use client";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "Nama Anda adalah Zaileys AI" },
          { role: "user", content: input },
        ],
      }),
    });

    const data = await res.json();
    console.log("✅ Received API Response:", data); // Debugging

    setResponse(data.content || "No response from AI");
  };

  return (
    <div>
      <h1>Chat AI</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tulis pesan..."
      />
      <button onClick={sendMessage}>Kirim</button>
      <p>Bot: {response}</p>
    </div>
  );
}
