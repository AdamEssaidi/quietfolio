export default function ProjectCard({ project }) {
    const card = (
        <article className="h-full rounded-2xl border border-base-content/15 bg-base-100 p-5 transition-colors hover:border-base-content/30 hover:bg-base-200/30 group-hover:border-base-content/40 group-hover:bg-base-200/40">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-base-content/50">
                        {project.organization}
                    </p>
                </div>
                {project.link ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-base-content/70 sm:text-[15px]">
                {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used for ${project.title}`}>
                {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
                        {tag}
                    </li>
                ))}
            </ul>
        </article>
    );

    if (!project.link) {
        return card;
    }

    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl">
            {card}
        </a>
    );
}
