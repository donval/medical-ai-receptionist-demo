export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const message = body.message || "";

    console.log("User message:", message);

    // ✅ Simple working response (no AI yet, just to confirm everything works)
    const reply = `You said: ${message}`;

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    console.error("API ERROR:", err);

    return new Response(
      JSON.stringify({ reply: "Server error occurred" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}