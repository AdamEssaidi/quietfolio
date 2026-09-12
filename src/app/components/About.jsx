import Link from "next/link";
import { about } from "@/data/data";

export default function About() {
    return (
        <section className="section-block scroll-mt-24" id="about" aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">
                About
            </h2>
            <div className="space-y-3 text-base leading-7 text-base-content/75">
                <p>{about.about}</p>
                <p>
                    I care about clear architecture, dependable delivery, and software that stays maintainable as it grows. If you would like to discuss a project or collaboration, {" "}
                    <Link href="/contact" className="font-semibold text-base-content underline decoration-base-content/30 underline-offset-4 hover:decoration-base-content">
                        get in touch
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
