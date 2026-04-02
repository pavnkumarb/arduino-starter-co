export default function TutorialSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-white border-b border-mist px-6 py-4 sticky top-0 z-50">
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
    </>
  );
}
