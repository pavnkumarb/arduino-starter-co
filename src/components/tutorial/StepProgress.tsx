import { cn } from "@/lib/utils";
import type { TutorialStep } from "@/lib/tutorials";

interface StepProgressProps {
  steps: TutorialStep[];
  currentIndex: number;
  tutorialSlug: string;
}

export default function StepProgress({
  steps,
  currentIndex,
  tutorialSlug,
}: StepProgressProps) {
  return (
    <nav aria-label="Tutorial progress" className="w-full">
      <ol className="flex items-center gap-1 overflow-x-auto pb-2">
        {steps.map((step, i) => {
          const isDone = i < currentIndex;
          const isCurrent = i === currentIndex;

          return (
            <li key={step.slug} className="flex items-center gap-1 shrink-0">
              <a
                href={`/learn/${tutorialSlug}/${step.slug}`}
                aria-current={isCurrent ? "step" : undefined}
                aria-label={`Step ${i + 1}: ${step.title}`}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                  isDone &&
                    "bg-spark-green text-white hover:bg-green-600",
                  isCurrent &&
                    "bg-circuit-blue text-white ring-2 ring-circuit-blue ring-offset-2",
                  !isDone &&
                    !isCurrent &&
                    "bg-mist text-slate hover:bg-gray-200"
                )}
              >
                {isDone ? "✓" : i + 1}
              </a>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 w-4",
                    i < currentIndex ? "bg-spark-green" : "bg-mist"
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      <p className="text-sm text-slate mt-1">
        Step {currentIndex + 1} of {steps.length}
      </p>
    </nav>
  );
}
