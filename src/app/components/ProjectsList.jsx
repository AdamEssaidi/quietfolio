import Link from "next/link";
import { projects } from "@/data/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <section className="section-block scroll-mt-24" id="projects" aria-labelledby="projects-heading">
            <div className="mb-5 flex items-end justify-between gap-4">
                <h2 id="projects-heading" className="section-title mb-0">
                    Selected Projects
                </h2>
                <Link href="/projects" className="shrink-0 text-sm font-semibold underline decoration-base-content/30 underline-offset-4 hover:decoration-base-content">
                    View all
                </Link>
            </div>
            <div className="grid gap-3">
                {projects.pinProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
