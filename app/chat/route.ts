export async function POST(req: Request) {
  const body = await req.json();

  return new Response(
    JSON.stringify({
      reply: "You said: " + body.message,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}