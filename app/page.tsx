 "use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi 👋 I’m your AI medical receptionist. You can say: Book an appointment, Reschedule, or Cancel."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input
    };

    const text = input.toLowerCase();

    let reply = "";

    // Simple AI receptionist logic
    if (text.includes("book")) {
      reply =
        "Sure 👍 Here are available slots:\n- Monday 10:00\n- Monday 14:00\n- Tuesday 11:00";
    } else if (text.includes("reschedule")) {
      reply =
        "Got it 👍 Please tell me your current appointment details (name + date).";
    } else if (text.includes("cancel")) {
      reply =
        "Understood 👍 Please confirm your name and appointment date to proceed with cancellation.";
    } else if (text.includes("hello") || text.includes("hi")) {
      reply =
        "Hello 👋 How can I help you today? You can book, reschedule, or cancel an appointment.";
    } else {
      reply =
        "I can help with booking, rescheduling, or cancelling appointments. Please tell me what you'd like to do.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      { role: "bot", content: reply }
    ]);

    setInput("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>AI Receptionist Demo</h2>

      {/* Chat box */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: 10,
          minHeight: 400,
          borderRadius: 8,
          background: "#fafafa"
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <b>{m.role === "user" ? "You" : "Receptionist"}:</b>
            <div style={{ whiteSpace: "pre-line" }}>{m.content}</div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <input
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc"
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            borderRadius: 6,
            background: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}