import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import ProjectsIndex from "@/components/ProjectsIndex";
import LearnFooter from "@/components/tutorial/LearnFooter";

export const metadata: Metadata = {
  title: "Arduino Projects — 5 Free Beginner Tutorials | Arduino Starter Co",
  description:
    "Browse all 5 free Arduino beginner projects. Filter by difficulty or search by skill. Build your first circuit in 30 minutes.",
  alternates: {
    canonical: "https://arduinostarterco.com/projects",
  },
  openGraph: {
    title: "Arduino Projects — 5 Free Beginner Tutorials",
    description:
      "Browse all 5 free Arduino projects. Filter by difficulty and find the right one for your skill level.",
    url: "https://arduinostarterco.com/projects",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arduino Starter Co — 5 Free Beginner Projects",
      },
    ],
  },
};

const NAV_LINKS = [
  { label: "Kit", href: "/#kit" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Projects", href: "/projects" },
  { label: "Tutorials", href: "/learn" },
  { label: "Support", href: "/#support" },
];

export default function ProjectsPage() {
  return (
    <>
      <NavBar links={NAV_LINKS} />
      <ProjectsIndex />
      <LearnFooter />
    </>
  );
}
