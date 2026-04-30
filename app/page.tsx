"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setReply(data.reply || data.error);

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Receptionist</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />

      <button onClick={handleSend}>
        {loading ? "Sending..." : "Send"}
      </button>

      <p><b>Response:</b> {reply}</p>
    </div>
  );
}