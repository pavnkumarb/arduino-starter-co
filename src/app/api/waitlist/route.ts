import { NextRequest, NextResponse } from "next/server";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY ?? "";
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "";
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER ?? ""; // e.g. "us1"

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, source, utm_medium, utm_campaign } = body as Record<string, string>;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // If Mailchimp is not configured, accept the signup gracefully (useful during dev/staging).
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    console.warn("[waitlist] Mailchimp env vars not set — signup logged but not forwarded.", { email, source });
    return NextResponse.json({ ok: true });
  }

  const mergeFields: Record<string, string> = {};
  if (source) mergeFields["SOURCE"] = source.slice(0, 255);
  if (utm_medium) mergeFields["UTM_MED"] = utm_medium.slice(0, 255);
  if (utm_campaign) mergeFields["UTM_CAMP"] = utm_campaign.slice(0, 255);

  try {
    const res = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: mergeFields,
        }),
      }
    );

    if (res.status === 400) {
      const data = (await res.json()) as { title?: string };
      // Member already exists — treat as success so UX isn't broken.
      if (data.title === "Member Exists") {
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json({ error: "Unable to subscribe. Please try again." }, { status: 400 });
    }

    if (!res.ok) {
      console.error("[waitlist] Mailchimp error", res.status, await res.text());
      return NextResponse.json({ error: "Unable to subscribe. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Fetch error", err);
    return NextResponse.json({ error: "Network error. Please try again." }, { status: 502 });
  }
}
