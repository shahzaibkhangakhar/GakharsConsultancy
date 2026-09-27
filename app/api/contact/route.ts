import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    phone?: string;
    interest?: string;
    note?: string;
  };

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";
  const note = body.note?.trim() ?? "";

  if (!name || !email || !phone || !note) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const forwarded = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      interest,
      message: note,
      _subject: `Consultation: ${interest || "New request"} — ${name}`,
      _replyto: email,
      _template: "table",
    }),
  });

  if (!forwarded.ok) {
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
