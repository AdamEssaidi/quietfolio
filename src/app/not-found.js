import Link from "next/link";

export const metadata = {
    title: "Page not found",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <main id="main-content" className="flex min-h-[65vh] items-center py-12">
            <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-content/50">
                    404 · Page not found
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    This page does not exist.
                </h1>
                <p className="mt-4 leading-7 text-base-content/70">
                    The address may be incorrect, or the page may have moved. You can return to the portfolio and continue from there.
                </p>
                <Link href="/" className="mt-7 inline-flex min-h-11 items-center rounded-full bg-base-content px-5 text-sm font-bold text-base-100 transition-opacity hover:opacity-85">
                    Return home
                </Link>
            </div>
        </main>
    );
}
