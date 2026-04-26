import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Read incoming request safely
    const body = await req.json();

    console.log("🔥 CHAT ROUTE HIT");
    console.log("📩 Incoming message:", body);

    // 2. Extract user message (fallback included)
    const userMessage = body?.message || "";

    // 3. Basic safety check
    if (!userMessage) {
      return NextResponse.json(
        { reply: "No message received." },
        { status: 400 }
      );
    }

    // 4. TEMP AI RESPONSE (replace later with OpenAI or agent logic)
    const reply = `👋 Hi! You said: "${userMessage}"`;

    console.log("🤖 Reply sent:", reply);

    // 5. Return response to frontend
    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json(
      { reply: "Server error occurred." },
      { status: 500 }
    );
  }
}