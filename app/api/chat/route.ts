import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    console.log("🔥 NEW AI CODE RUNNING");

    const body = await req.json();
    const message = body.message || "";

    console.log("User message:", message);
    console.log("API KEY EXISTS:", !!process.env.OPENAI_API_KEY);

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ reply: "Missing API key" }),
        { status: 500 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional AI receptionist. Be polite, helpful, and concise.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      completion.choices?.[0]?.message?.content || "No response from AI";

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("AI ERROR:", err);

    return new Response(
      JSON.stringify({ reply: "AI error occurred" }),
      { status: 500 }
    );
  }
}