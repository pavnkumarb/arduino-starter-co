import Link from "next/link";

interface Project {
  number: number;
  title: string;
  tagline: string;
  difficulty: "Starter" | "Beginner" | "Intermediate";
  time: string;
  skills: [string, string, string];
  href: string;
}

const PROJECTS: Project[] = [
  {
    number: 1,
    title: "Blink",
    tagline: "Your first LED, blinking in under 5 minutes",
    difficulty: "Starter",
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

const DIFFICULTY_STYLES: Record<Project["difficulty"], string> = {
  Starter: "bg-spark-green/10 text-green-700",
  Beginner: "bg-circuit-blue/10 text-circuit-blue",
  Intermediate: "bg-builder-orange/10 text-orange-700",
};

export default function TutorialGrid() {
  return (
    <section
      className="py-16 px-6 bg-white"
      id="projects"
      aria-labelledby="grid-heading"
    >
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <h2
            id="grid-heading"
            className="font-heading font-bold text-h1 text-midnight mb-3"
          >
            5 free beginner Arduino projects
          </h2>
          <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
            Each tutorial is self-contained. Start with Project 1 or jump to
            whichever sounds most interesting — everything you need is explained
            along the way.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Arduino tutorial projects"
        >
          {PROJECTS.map((project) => (
            <li key={project.number}>
              <article className="border border-mist rounded-xl bg-white p-6 hover:border-circuit-blue hover:shadow-md transition-all duration-sm h-full flex flex-col gap-4">
                {/* Top row: badges */}
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
                  <h3 className="font-heading font-semibold text-h3 text-midnight mb-1">
                    {project.title}
                  </h3>
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

                {/* CTA link */}
                <Link
                  href={project.href}
                  className="font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus self-start"
                  aria-label={`Start tutorial ${project.number}: ${project.title}`}
                >
                  Start tutorial →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
