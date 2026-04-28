export async function POST(req: Request) {
  return new Response(
    JSON.stringify({ message: "API works" }),
    { status: 200 }
  );
}