"use client"

import { useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("")

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">AI Receptionist</h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Ask something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </div>
    </main>
  )
}