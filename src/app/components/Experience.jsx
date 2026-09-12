import { experience } from "@/data/data";

export default function Experience() {
    return (
        <section className="section-block scroll-mt-24" id="experience" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-title">
                Work Experience
            </h2>
            <ol className="space-y-4">
                {experience.map((item) => (
                    <li key={`${item.company}-${item.period}`} className="relative rounded-2xl border border-base-content/15 p-5 sm:p-6">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                            <div>
                                <h3 className="text-lg font-bold tracking-tight">{item.role}</h3>
                                <p className="font-medium text-base-content/70">{item.company}</p>
                            </div>
                            <time className="shrink-0 text-sm font-semibold text-base-content/50">{item.period}</time>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-base-content/70 sm:text-[15px]">{item.description}</p>
                        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used at ${item.company}`}>
                            {item.stack.map((technology) => (
                                <li key={technology} className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
}
