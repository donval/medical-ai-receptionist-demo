import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    console.log("Received:", message);

    // TEMP RESPONSE (replace with AI later)
    return NextResponse.json({
      reply: `You said: ${message}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}