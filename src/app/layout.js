import "./globals.css";
import Script from "next/script";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { about, seo, socials } from "@/data/data";

export const metadata = {
    title: {
        default: seo.title,
        template: `%s | ${about.name}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: about.name }],
    creator: about.name,
    category: "technology",
    icons: {
        icon: "/icon.svg",
    },
    openGraph: {
        title: seo.title,
        description: seo.description,
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary",
        title: seo.title,
        description: seo.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about.name,
    jobTitle: "Full-Stack Software Engineer",
    email: socials.email,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Rabat",
        addressCountry: "MA",
    },
    sameAs: [socials.github, socials.linkedin],
};

const themeScript = `
    (function () {
        try {
            var savedTheme = localStorage.getItem("theme");
            var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));
        } catch (error) {}
    })();
`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                <Script id="theme-init" strategy="beforeInteractive">
                    {themeScript}
                </Script>
            </head>
            <body className="bg-base-100 text-base-content antialiased">
                <a href="#main-content" className="skip-link">Skip to content</a>
                <div className="mx-auto min-h-screen w-full max-w-3xl px-4 sm:px-6">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            </body>
        </html>
    );
}
