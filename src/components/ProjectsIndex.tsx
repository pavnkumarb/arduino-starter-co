"use client";

import { useState } from "react";
import Link from "next/link";

type Difficulty = "Beginner" | "Intermediate";
type Filter = "All" | Difficulty;

interface Project {
  number: number;
  title: string;
  tagline: string;
  difficulty: Difficulty;
  time: string;
  skills: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    number: 1,
    title: "Blink",
    tagline: "Your first LED, blinking in under 5 minutes",
    difficulty: "Beginner",
    time: "30 min",
    skills: ["pinMode", "digitalWrite", "delay"],
    href: "/learn/project-1/1-whats-in-the-box",
  },
  {
    number: 2,
    title: "Traffic Light",
    tagline: "Wire three LEDs and write your first loop",
    difficulty: "Beginner",
    time: "45 min",
    skills: ["Arrays", "for loops", "State machines"],
    href: "/learn/project-2/1-whats-in-the-box",
  },
  {
    number: 3,
    title: "Temperature Monitor",
    tagline: "Read a sensor and print live data",
    difficulty: "Beginner",
    time: "60 min",
    skills: ["Libraries", "Serial.print", "DHT11"],
    href: "/learn/project-3/1-what-is-pwm",
  },
  {
    number: 4,
    title: "Distance Alarm",
    tagline: "Build a proximity sensor that beeps",
    difficulty: "Intermediate",
    time: "60 min",
    skills: ["pulseIn", "Conditionals", "HC-SR04"],
    href: "/learn/project-4/1-meet-the-servo",
  },
  {
    number: 5,
    title: "Motor Controller",
    tagline: "Spin a motor forward, backward, and at speed",
    difficulty: "Intermediate",
    time: "75 min",
    skills: ["PWM", "analogWrite", "L298N"],
    href: "/learn/project-5/1-meet-the-lcd",
  },
];

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner: "bg-circuit-blue/10 text-circuit-blue",
  Intermediate: "bg-builder-orange/10 text-orange-700",
};

const FILTER_BUTTONS: Filter[] = ["All", "Beginner", "Intermediate"];

export default function ProjectsIndex() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = PROJECTS.filter((project) => {
    const matchesDifficulty =
      activeFilter === "All" || project.difficulty === activeFilter;
    const q = query.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      project.title.toLowerCase().includes(q) ||
      project.tagline.toLowerCase().includes(q) ||
      project.skills.some((s) => s.toLowerCase().includes(q));
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cloud">
      {/* Page header */}
      <div className="bg-white border-b border-mist">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-heading font-bold text-h1 text-midnight mb-3">
            Arduino Project Library
          </h1>
          <p className="font-body text-body-lg text-slate max-w-2xl">
            Five free beginner projects — pick one to start or work through them
            all. Each is self-contained with wiring diagrams, code, and video
            walkthroughs.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-content mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {/* Search input */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-md border border-mist bg-white font-body text-body text-ink placeholder:text-slate focus:outline-none focus:shadow-focus focus:border-circuit-blue transition-colors duration-sm"
              aria-label="Search projects by title or skill"
            />
          </div>

          {/* Difficulty filter */}
          <div
            className="flex gap-2 flex-wrap"
            role="group"
            aria-label="Filter by difficulty"
          >
            {FILTER_BUTTONS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                className={`px-4 py-2 rounded-pill font-body font-semibold text-label transition-colors duration-sm focus-visible:outline-none focus-visible:shadow-focus ${
                  activeFilter === label
                    ? "bg-circuit-blue text-white"
                    : "bg-white text-ink border border-mist hover:border-circuit-blue hover:text-circuit-blue"
                }`}
                aria-pressed={activeFilter === label}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <main className="max-w-content mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-body text-body-lg text-slate">
              No projects match your search.
            </p>
            <button
              type="button"
              onClick={() => { setQuery(""); setActiveFilter("All"); }}
              className="mt-4 font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Arduino tutorial projects"
          >
            {filtered.map((project) => (
              <li key={project.number}>
                <article className="border border-mist rounded-xl bg-white overflow-hidden hover:border-circuit-blue hover:shadow-md transition-all duration-sm h-full flex flex-col">
                  {/* Thumbnail slot */}
                  <div
                    className="h-40 bg-gradient-to-br from-circuit-blue/10 to-spark-green/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="font-heading font-bold text-display text-circuit-blue/20 select-none">
                      {project.number}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    {/* Badges */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-pill bg-midnight/10 text-midnight font-body font-semibold text-label">
                        Project {project.number}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-pill font-body font-semibold text-label ${DIFFICULTY_STYLES[project.difficulty]}`}
                      >
                        {project.difficulty}
                      </span>
                      <span className="font-body text-body-sm text-slate">
                        {project.time}
                      </span>
                    </div>

                    {/* Title + tagline */}
                    <div className="flex-1">
                      <h2 className="font-heading font-semibold text-h3 text-midnight mb-1">
                        {project.title}
                      </h2>
                      <p className="font-body text-body-sm text-slate">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Skill tags */}
                    <div className="flex gap-2 flex-wrap">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-sm bg-cloud font-code text-body-sm text-ink"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={project.href}
                      className="mt-1 inline-flex items-center gap-1 font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus self-start"
                      aria-label={`Start tutorial ${project.number}: ${project.title}`}
                    >
                      Start tutorial →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
