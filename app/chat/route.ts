export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    reply: "You said: " + body.message,
  });
}