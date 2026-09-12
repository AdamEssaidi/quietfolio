import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/data";

export const metadata = {
    title: "Projects",
    description:
        "Selected full-stack and public-sector software projects delivered by Adam Essaidi using .NET, Spring Boot, Angular, React, and relational databases.",
};

export default function ProjectsPage() {
    const allProjects = [...projects.pinProjects, ...projects.otherProjects];

    return (
        <main id="main-content" className="py-10 sm:py-14">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-content/50">Portfolio</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
                <p className="mt-4 leading-7 text-base-content/70">
                    A selection of information systems and business applications delivered for universities and Moroccan public institutions.
                </p>
                <p className="mt-3 text-sm leading-6 text-base-content/55">
                    These are professional client projects, so public source code and live links are not available.
                </p>
            </div>
            <div className="mt-8 grid gap-3">
                {allProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </main>
    );
}
