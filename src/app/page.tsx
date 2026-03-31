export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-brand-gradient text-white px-6 py-24 text-center">
        <h1 className="font-heading text-5xl font-bold mb-6">
          Build your first circuit.
        </h1>
        <p className="font-body text-xl mb-10 max-w-xl mx-auto">
          Everything you need is in the box — tested and ready. Your first
          working project in under 30 minutes.
        </p>
        <a
          href="#kit"
          className="inline-block bg-builder-orange text-white font-body font-semibold text-sm tracking-wide px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Get the Kit
        </a>
      </section>
    </main>
  );
}
