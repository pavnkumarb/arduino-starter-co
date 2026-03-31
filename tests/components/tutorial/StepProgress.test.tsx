import { render, screen } from "@testing-library/react";
import StepProgress from "@/components/tutorial/StepProgress";
import { getTutorial } from "@/lib/tutorials";

const tutorial = getTutorial("project-1")!;

describe("StepProgress", () => {
  it("renders the correct step count label", () => {
    render(
      <StepProgress
        steps={tutorial.steps}
        currentIndex={0}
        tutorialSlug="project-1"
      />
    );
    expect(screen.getByText(`Step 1 of ${tutorial.steps.length}`)).toBeInTheDocument();
  });

  it("marks the current step with aria-current=step", () => {
    render(
      <StepProgress
        steps={tutorial.steps}
        currentIndex={2}
        tutorialSlug="project-1"
      />
    );
    const currentLink = screen.getByRole("link", {
      name: /Step 3:/,
    });
    expect(currentLink).toHaveAttribute("aria-current", "step");
  });

  it("shows a checkmark for completed steps", () => {
    render(
      <StepProgress
        steps={tutorial.steps}
        currentIndex={3}
        tutorialSlug="project-1"
      />
    );
    // Steps 1 and 2 (indices 0 and 1) should show ✓
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveTextContent("✓");
    expect(links[1]).toHaveTextContent("✓");
  });

  it("renders links for all steps", () => {
    render(
      <StepProgress
        steps={tutorial.steps}
        currentIndex={0}
        tutorialSlug="project-1"
      />
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(tutorial.steps.length);
  });

  it("links point to correct URLs", () => {
    render(
      <StepProgress
        steps={tutorial.steps}
        currentIndex={0}
        tutorialSlug="project-1"
      />
    );
    const firstLink = screen.getByRole("link", { name: /Step 1:/ });
    expect(firstLink).toHaveAttribute(
      "href",
      `/learn/project-1/${tutorial.steps[0].slug}`
    );
  });
});
