import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OPENAI_API_KEY");
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = await req.json();
    const message: string = body.message;

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a medical receptionist." },
        { role: "user", content: message },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ?? "No response";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
    });

  } catch (error: any) {
    console.error("API ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message || "Server error" }),
      { status: 500 }
    );
  }
}