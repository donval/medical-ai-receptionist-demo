import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Read request body
    const body = await req.json();

    console.log("🔥 API HIT - /api/chat");
    console.log("📩 Received message:", body);

    const userMessage = body?.message;

    // Validate input
    if (!userMessage) {
      return NextResponse.json(
        { reply: "No message received." },
        { status: 400 }
      );
    }

    // TEMP RESPONSE (replace later with AI model / OpenAI)
    const reply = `👋 Hello! You said: "${userMessage}"`;

    console.log("🤖 Reply sent:", reply);

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json(
      { reply: "Internal server error." },
      { status: 500 }
    );
  }
}