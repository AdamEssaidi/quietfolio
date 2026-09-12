import { education } from "@/data/data";

export default function Education() {
    return (
        <section className="section-block scroll-mt-24" id="education" aria-labelledby="education-heading">
            <h2 id="education-heading" className="section-title">
                Education
            </h2>
            <div className="space-y-3">
                {education.map((item) => (
                    <article key={item.degree} className="rounded-2xl border border-base-content/15 p-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                            <div>
                                <h3 className="font-bold leading-6">{item.degree}</h3>
                                <p className="mt-1 text-sm text-base-content/65">{item.school}</p>
                            </div>
                            <time className="shrink-0 text-sm font-semibold text-base-content/50">{item.period}</time>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
