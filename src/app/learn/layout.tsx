import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn — Arduino Starter Co",
  description:
    "Step-by-step beginner tutorials. Build your first circuit in under 30 minutes.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cloud">
      <header className="bg-white border-b border-mist px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="font-heading font-bold text-circuit-blue text-lg hover:opacity-80 transition-opacity"
          >
            Arduino Starter Co
          </a>
          <a
            href="/learn"
            className="text-sm text-slate hover:text-ink transition-colors"
          >
            All tutorials
          </a>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
