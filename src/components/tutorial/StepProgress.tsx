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
  const progressPercent =
    steps.length > 1
      ? Math.round((currentIndex / (steps.length - 1)) * 100)
      : 0;

  return (
    <nav aria-label="Tutorial progress" className="w-full">
      {/* Progress bar track + fill — Design System §6.8 */}
      <div
        className="relative h-2 bg-mist rounded-pill overflow-hidden mb-4"
        role="progressbar"
        aria-valuenow={currentIndex + 1}
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-label={`Step ${currentIndex + 1} of ${steps.length}`}
      >
        <div
          className="absolute left-0 top-0 h-full bg-circuit-blue rounded-pill transition-all duration-lg ease-brand"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step dots — Design System §6.8 */}
      <ol className="flex items-start overflow-x-auto pb-2">
        {steps.map((step, i) => {
          const isDone = i < currentIndex;
          const isCurrent = i === currentIndex;

          return (
            <li
              key={step.slug}
              className="flex flex-col items-center shrink-0"
              style={{ width: `${100 / steps.length}%`, minWidth: 40 }}
            >
              <a
                href={`/learn/${tutorialSlug}/${step.slug}`}
                aria-current={isCurrent ? "step" : undefined}
                aria-label={`Step ${i + 1}: ${step.title}`}
                className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-sm ease-brand focus:outline-none focus:ring-2 focus:ring-circuit-blue focus:ring-offset-2",
                  isDone && "bg-spark-green hover:bg-green-600",
                  isCurrent &&
                    "bg-circuit-blue ring-2 ring-circuit-blue ring-offset-2",
                  !isDone && !isCurrent && "bg-mist hover:bg-neutral-400"
                )}
              >
                {isDone && (
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className="sr-only">{i + 1}</span>
              </a>
              <span
                className={cn(
                  "mt-1.5 text-center leading-tight hidden sm:block text-[11px] px-0.5",
                  isCurrent ? "text-circuit-blue font-semibold" : "text-slate"
                )}
              >
                {i + 1}
              </span>
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
