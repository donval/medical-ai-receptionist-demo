export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional medical and dental receptionist. Be polite, helpful, and concise.",
        },
        {
          role: "user",
          content: body.message,
        },
      ],
    }),
  });

  const data = await response.json();

  return Response.json({
    reply: data.choices[0].message.content,
  });
}