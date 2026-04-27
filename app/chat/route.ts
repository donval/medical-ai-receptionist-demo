export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message || "No message";

  return new Response(
    JSON.stringify({ reply: `You said: ${message}` }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}