import {
  TUTORIALS,
  getTutorial,
  getTutorialStep,
  getAdjacentSteps,
} from "@/lib/tutorials";

describe("TUTORIALS data", () => {
  it("has at least one tutorial", () => {
    expect(TUTORIALS.length).toBeGreaterThan(0);
  });

  it("project-1 has 7 steps", () => {
    const tutorial = getTutorial("project-1");
    expect(tutorial).toBeDefined();
    expect(tutorial!.steps).toHaveLength(7);
  });

  it("every step has a slug, title, and description", () => {
    for (const tutorial of TUTORIALS) {
      for (const step of tutorial.steps) {
        expect(step.slug).toBeTruthy();
        expect(step.title).toBeTruthy();
        expect(step.description).toBeTruthy();
      }
    }
  });

  it("all step slugs are unique within a tutorial", () => {
    for (const tutorial of TUTORIALS) {
      const slugs = tutorial.steps.map((s) => s.slug);
      const unique = new Set(slugs);
      expect(unique.size).toBe(slugs.length);
    }
  });
});

describe("getTutorial", () => {
  it("returns the tutorial for a known slug", () => {
    const t = getTutorial("project-1");
    expect(t).toBeDefined();
    expect(t!.slug).toBe("project-1");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getTutorial("does-not-exist")).toBeUndefined();
  });
});

describe("getTutorialStep", () => {
  it("returns correct step and index", () => {
    const result = getTutorialStep("project-1", "2-wire-the-led");
    expect(result).toBeDefined();
    expect(result!.step.slug).toBe("2-wire-the-led");
    expect(result!.index).toBe(1);
  });

  it("returns undefined for unknown tutorial", () => {
    expect(getTutorialStep("nope", "2-wire-the-led")).toBeUndefined();
  });

  it("returns undefined for unknown step", () => {
    expect(getTutorialStep("project-1", "99-fake-step")).toBeUndefined();
  });

  it("includes the parent tutorial in the result", () => {
    const result = getTutorialStep("project-1", "1-whats-in-the-box");
    expect(result!.tutorial.slug).toBe("project-1");
  });
});

describe("getAdjacentSteps", () => {
  const tutorial = getTutorial("project-1")!;

  it("first step has no prev", () => {
    const { prev, next } = getAdjacentSteps(tutorial, 0);
    expect(prev).toBeNull();
    expect(next).not.toBeNull();
    expect(next!.slug).toBe(tutorial.steps[1].slug);
  });

  it("last step has no next", () => {
    const lastIndex = tutorial.steps.length - 1;
    const { prev, next } = getAdjacentSteps(tutorial, lastIndex);
    expect(next).toBeNull();
    expect(prev).not.toBeNull();
    expect(prev!.slug).toBe(tutorial.steps[lastIndex - 1].slug);
  });

  it("middle step has both prev and next", () => {
    const { prev, next } = getAdjacentSteps(tutorial, 3);
    expect(prev).not.toBeNull();
    expect(next).not.toBeNull();
    expect(prev!.slug).toBe(tutorial.steps[2].slug);
    expect(next!.slug).toBe(tutorial.steps[4].slug);
  });
});

describe("wiring diagrams", () => {
  it("steps with wiring diagrams have at least one connection", () => {
    const tutorial = getTutorial("project-1")!;
    for (const step of tutorial.steps) {
      if (step.wiringDiagram) {
        expect(step.wiringDiagram.connections.length).toBeGreaterThan(0);
        expect(step.wiringDiagram.altText).toBeTruthy();
      }
    }
  });
});

describe("code snippets", () => {
  it("steps with code snippets have non-empty code", () => {
    const tutorial = getTutorial("project-1")!;
    for (const step of tutorial.steps) {
      if (step.codeSnippet) {
        expect(step.codeSnippet.code.trim().length).toBeGreaterThan(0);
        expect(step.codeSnippet.filename).toBeTruthy();
      }
    }
  });
});
