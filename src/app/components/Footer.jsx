import Link from "next/link";
import { about } from "@/data/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-base-content/10 py-8 text-sm text-base-content/55">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p>© {currentYear} {about.name}.</p>
                <div className="flex gap-4">
                    <Link href="/projects" className="hover:text-base-content hover:underline">Projects</Link>
                    <Link href="/contact" className="hover:text-base-content hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
