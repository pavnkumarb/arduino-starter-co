import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

interface FeedbackEntry {
  id: string;
  pageUrl: string;
  rating: "up" | "down";
  comment: string | null;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const FEEDBACK_FILE = path.join(DATA_DIR, "feedback.json");

async function readFeedback(): Promise<FeedbackEntry[]> {
  try {
    const raw = await readFile(FEEDBACK_FILE, "utf-8");
    return JSON.parse(raw) as FeedbackEntry[];
  } catch {
    return [];
  }
}

async function writeFeedback(entries: FeedbackEntry[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(FEEDBACK_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("pageUrl" in body) ||
    !("rating" in body) ||
    !("timestamp" in body)
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { pageUrl, rating, comment, timestamp } = body as Record<string, unknown>;

  if (typeof pageUrl !== "string" || (rating !== "up" && rating !== "down")) {
    return NextResponse.json({ error: "Invalid field values" }, { status: 400 });
  }

  const entry: FeedbackEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    pageUrl: pageUrl.slice(0, 500),
    rating,
    comment: typeof comment === "string" ? comment.slice(0, 1000) : null,
    timestamp: typeof timestamp === "string" ? timestamp : new Date().toISOString(),
  };

  const entries = await readFeedback();
  entries.push(entry);
  await writeFeedback(entries);

  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
}

export async function GET() {
  const entries = await readFeedback();
  return NextResponse.json(entries);
}
