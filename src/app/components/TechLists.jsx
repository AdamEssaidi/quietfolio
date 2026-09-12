import { skillGroups } from "@/data/data";

export default function TechLists() {
    return (
        <section className="section-block scroll-mt-24" id="skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Technical Skills
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <article key={group.title} className="rounded-2xl border border-base-content/15 p-5 last:sm:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/55">
                            {group.title}
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                            {group.items.map((skill) => (
                                <li key={skill} className="rounded-lg bg-base-200 px-3 py-1.5 text-sm font-medium">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
