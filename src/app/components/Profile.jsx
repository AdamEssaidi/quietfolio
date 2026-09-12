import { about, socials } from "@/data/data";

const socialLinks = [
    {
        label: "GitHub",
        href: socials.github,
        external: true,
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4 4 0 0 0 9 18v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: socials.linkedin,
        external: true,
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <path d="M2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: socials.email,
        external: false,
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.9 1.9 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
];

export default function Profile() {
    return (
        <section className="pt-8 sm:pt-12" aria-labelledby="profile-name">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div
                    role="img"
                    aria-label="Adam Essaidi monogram"
                    className="relative grid size-24 shrink-0 place-items-center overflow-hidden rounded-3xl bg-base-content text-base-100 shadow-sm ring-1 ring-base-content/10 sm:size-28"
                >
                    <span aria-hidden="true" className="absolute inset-3 rounded-2xl border border-base-100/20" />
                    <span aria-hidden="true" className="absolute -right-5 -top-5 size-16 rounded-full border border-base-100/15" />
                    <span aria-hidden="true" className="relative text-2xl font-black tracking-[-0.08em] sm:text-3xl">
                        AE
                    </span>
                    <span aria-hidden="true" className="absolute bottom-4 h-px w-8 bg-base-100/30" />
                </div>
                <div className="min-w-0">
                    <p className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-base-content/55">
                        {about.brand}
                    </p>
                    <h1 id="profile-name" className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {about.name}
                    </h1>
                    <p className="mt-2 text-base font-medium text-base-content/80 sm:text-lg">
                        {about.role}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-base-content/60">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {about.location}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-base-content/65 sm:text-base">
                        {about.headline}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Professional profiles">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target={social.external ? "_blank" : undefined}
                        rel={social.external ? "noopener noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-base-content/15 px-3 text-sm font-semibold transition-colors hover:border-base-content/40 hover:bg-base-200 sm:gap-2 sm:px-4"
                    >
                        {social.icon}
                        {social.label}
                        {social.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                    </a>
                ))}
            </div>
        </section>
    );
}
