import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    reply: `Hi 👋 You said: ${body.message}`,
  });
}