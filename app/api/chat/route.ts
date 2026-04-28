export async function POST(req: Request) {
  try {
    // ✅ Check if API key exists (safe logging)
    console.log("API KEY EXISTS:", !!process.env.OPENAI_API_KEY);

    // Optional: log first few characters (still safe-ish)
    if (process.env.OPENAI_API_KEY) {
      console.log(
        "API KEY STARTS WITH:",
        process.env.OPENAI_API_KEY.slice(0, 5)
      );
    }

    const body = await req.json();
    const message = body.message;

    // 🔁 Simple test response (replace later with real AI call)
    return new Response(
      JSON.stringify({
        reply: "API route is working",
        received: message,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("FULL ERROR:", err);

    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}