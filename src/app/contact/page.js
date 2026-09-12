import { about, socials } from "@/data/data";

export const metadata = {
    title: "Contact",
    description: "Contact Adam Essaidi about full-stack software engineering roles, projects, and collaborations.",
};

const contactMethods = [
    {
        title: "Email",
        value: about.email,
        href: socials.email,
        external: false,
        description: "The best way to reach me for a project or professional opportunity.",
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/adam-essaidi",
        href: socials.linkedin,
        external: true,
        description: "Connect with me and follow my professional experience.",
    },
];

export default function ContactPage() {
    return (
        <main id="main-content" className="py-10 sm:py-14">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-content/50">Contact</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something useful.</h1>
                <p className="mt-4 leading-7 text-base-content/70">
                    I am open to conversations about software engineering roles, full-stack projects, and thoughtful collaborations. Choose the channel that works best for you.
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-base-content/55">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Based in {about.location}
                </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactMethods.map((method) => (
                    <a
                        key={method.title}
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                        className="group rounded-2xl border border-base-content/15 p-5 transition-colors hover:border-base-content/40 hover:bg-base-200/40"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="text-lg font-bold">{method.title}</h2>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17 17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-base-content/65">{method.description}</p>
                        <p className="mt-4 break-words text-sm font-semibold">{method.value}</p>
                    </a>
                ))}
            </div>
        </main>
    );
}
