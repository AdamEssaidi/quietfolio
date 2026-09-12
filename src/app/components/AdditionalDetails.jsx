import { languages, strengths } from "@/data/data";

export default function AdditionalDetails() {
    return (
        <section className="section-block" aria-label="Languages and core strengths">
            <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-2xl border border-base-content/15 p-5">
                    <h2 className="text-lg font-bold tracking-tight">Languages</h2>
                    <dl className="mt-4 space-y-3">
                        {languages.map((language) => (
                            <div key={language.name} className="flex items-center justify-between gap-4 text-sm">
                                <dt className="font-semibold">{language.name}</dt>
                                <dd className="text-base-content/60">{language.level}</dd>
                            </div>
                        ))}
                    </dl>
                </article>
                <article className="rounded-2xl border border-base-content/15 p-5">
                    <h2 className="text-lg font-bold tracking-tight">Core Strengths</h2>
                    <ul className="mt-4 space-y-2 text-sm text-base-content/70">
                        {strengths.map((strength) => (
                            <li key={strength} className="flex gap-2">
                                <span aria-hidden="true" className="text-base-content/40">•</span>
                                <span>{strength}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
