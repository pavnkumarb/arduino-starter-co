import { TUTORIALS } from "@/lib/tutorials";

const DIFFICULTY_LABELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const DIFFICULTY_COLORS = {
  beginner: "bg-spark-green/10 text-green-700",
  intermediate: "bg-circuit-blue/10 text-blue-700",
  advanced: "bg-builder-orange/10 text-orange-700",
};

export default function LearnHubPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-ink mb-2">
        Tutorials
      </h1>
      <p className="text-slate mb-8">
        Follow along step-by-step. No experience needed — just grab your kit and
        open one of these.
      </p>

      <ul className="space-y-4">
        {TUTORIALS.map((tutorial) => (
          <li key={tutorial.slug}>
            <a
              href={`/learn/${tutorial.slug}/${tutorial.steps[0].slug}`}
              className="block rounded-xl border border-mist bg-white p-6 hover:border-circuit-blue hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading font-semibold text-lg text-ink mb-1">
                    {tutorial.title}
                  </h2>
                  <p className="text-slate text-sm mb-3">{tutorial.tagline}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span
                      className={`px-2 py-0.5 rounded-full font-medium ${DIFFICULTY_COLORS[tutorial.difficulty]}`}
                    >
                      {DIFFICULTY_LABELS[tutorial.difficulty]}
                    </span>
                    <span className="text-slate">
                      {tutorial.totalDuration}
                    </span>
                    <span className="text-slate">
                      {tutorial.steps.length} steps
                    </span>
                  </div>
                </div>
                <span className="text-circuit-blue text-xl mt-1" aria-hidden="true">
                  →
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
