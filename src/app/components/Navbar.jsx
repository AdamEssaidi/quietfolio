"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects", activePath: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/contact", activePath: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) {
            return undefined;
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", nextTheme);
        window.localStorage.setItem("theme", nextTheme);
    }

    function handleNavigation(event, link) {
        setMenuOpen(false);

        if (pathname !== "/" || !link.href.startsWith("/#")) {
            return;
        }

        const target = document.getElementById(link.href.slice(2));

        if (!target) {
            return;
        }

        event.preventDefault();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        target.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
        });
        window.history.pushState(null, "", link.href);
    }

    return (
        <header className="sticky top-3 z-50 pt-3">
            <nav aria-label="Primary navigation" className="relative flex min-h-14 items-center justify-between rounded-2xl border border-base-content/10 bg-base-100/90 px-3 shadow-sm backdrop-blur-md sm:px-4">
                <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Adam Essaidi - Home" className="flex size-10 items-center justify-center rounded-xl bg-base-content text-sm font-black tracking-tight text-base-100">
                    AE
                </Link>

                <div className="hidden items-center gap-1 sm:flex">
                    {links.map((link) => {
                        const isCurrent = link.activePath === pathname;

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={(event) => handleNavigation(event, link)}
                                aria-current={isCurrent ? "page" : undefined}
                                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-base-200 hover:text-base-content ${isCurrent ? "bg-base-200 text-base-content" : "text-base-content/70"}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-1">
                    <button type="button" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle color theme" className="inline-flex size-10 items-center justify-center rounded-xl text-base-content/70 transition-colors hover:bg-base-200 hover:text-base-content">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden size-5 dark:block" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                    </button>
                    <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`} className="inline-flex size-10 items-center justify-center rounded-xl text-base-content/70 transition-colors hover:bg-base-200 hover:text-base-content sm:hidden">
                        {menuOpen ? (
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {menuOpen ? (
                    <div id="mobile-navigation" className="absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl border border-base-content/10 bg-base-100 p-2 shadow-lg sm:hidden">
                        {links.map((link) => {
                            const isCurrent = link.activePath === pathname;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={(event) => handleNavigation(event, link)}
                                    aria-current={isCurrent ? "page" : undefined}
                                    className={`rounded-xl px-4 py-3 text-sm font-semibold hover:bg-base-200 hover:text-base-content ${isCurrent ? "bg-base-200 text-base-content" : "text-base-content/75"}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                ) : null}
            </nav>
        </header>
    );
}
