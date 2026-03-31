import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTutorialStep, getAdjacentSteps, TUTORIALS } from "@/lib/tutorials";
import StepProgress from "@/components/tutorial/StepProgress";
import WiringDiagram from "@/components/tutorial/WiringDiagram";
import VideoClip from "@/components/tutorial/VideoClip";
import CodeBlock from "@/components/tutorial/CodeBlock";

interface PageProps {
  params: {
    tutorialSlug: string;
    stepSlug: string;
  };
}

export function generateStaticParams() {
  return TUTORIALS.flatMap((tutorial) =>
    tutorial.steps.map((step) => ({
      tutorialSlug: tutorial.slug,
      stepSlug: step.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const result = getTutorialStep(params.tutorialSlug, params.stepSlug);
  if (!result) return {};
  return {
    title: `${result.step.title} — ${result.tutorial.title} — Arduino Starter Co`,
    description: result.step.description,
  };
}

export default function TutorialStepPage({ params }: PageProps) {
  const result = getTutorialStep(params.tutorialSlug, params.stepSlug);
  if (!result) notFound();

  const { tutorial, step, index } = result;
  const { prev, next } = getAdjacentSteps(tutorial, index);

  return (
    <div>
      {/* Progress */}
      <StepProgress
        steps={tutorial.steps}
        currentIndex={index}
        tutorialSlug={tutorial.slug}
      />

      <div className="mt-8">
        {/* Step header */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-1">
            {tutorial.title} · {step.duration}
          </p>
          <h1 className="font-heading text-2xl font-bold text-ink">
            {step.title}
          </h1>
        </div>

        {/* Description */}
        <p className="text-ink leading-relaxed mb-8">{step.description}</p>

        {/* Wiring diagram */}
        {step.wiringDiagram && (
          <div className="mb-8">
            <WiringDiagram diagram={step.wiringDiagram} />
          </div>
        )}

        {/* Video clip */}
        {step.videoClip && (
          <div className="mb-8">
            <VideoClip clip={step.videoClip} />
          </div>
        )}

        {/* Code snippet */}
        {step.codeSnippet && (
          <div className="mb-8">
            <CodeBlock snippet={step.codeSnippet} />
          </div>
        )}

        {/* Tips */}
        {step.tips && step.tips.length > 0 && (
          <div className="mb-8 rounded-xl bg-circuit-blue/5 border border-circuit-blue/20 p-5">
            <p className="text-xs font-semibold text-circuit-blue uppercase tracking-wide mb-3">
              Tips
            </p>
            <ul className="space-y-2">
              {step.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink">
                  <span className="text-circuit-blue mt-0.5" aria-hidden="true">
                    •
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Checkpoints */}
        {step.checkpoints && step.checkpoints.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">
              Before you continue — check these off:
            </p>
            <ul className="space-y-2">
              {step.checkpoints.map((checkpoint, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <span
                    className="mt-0.5 w-4 h-4 rounded border-2 border-mist shrink-0"
                    aria-hidden="true"
                  />
                  {checkpoint}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation */}
        <nav
          className="flex items-center justify-between gap-4 pt-6 border-t border-mist"
          aria-label="Step navigation"
        >
          {prev ? (
            <a
              href={`/learn/${tutorial.slug}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-slate hover:text-ink transition-colors"
            >
              <span aria-hidden="true">←</span>
              <span>{prev.title}</span>
            </a>
          ) : (
            <span />
          )}

          {next ? (
            <a
              href={`/learn/${tutorial.slug}/${next.slug}`}
              className="inline-flex items-center gap-2 bg-circuit-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-circuit-blue focus:ring-offset-2"
            >
              <span>{next.title}</span>
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <a
              href="/learn"
              className="inline-flex items-center gap-2 bg-spark-green text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-spark-green focus:ring-offset-2"
            >
              All tutorials
            </a>
          )}
        </nav>
      </div>
    </div>
  );
}
