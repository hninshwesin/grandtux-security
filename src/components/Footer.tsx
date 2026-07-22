import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-background-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <p className="font-display text-lg font-bold tracking-wide text-white">
            GRAND<span className="text-gradient">TUX</span>
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Independent Offensive Security &amp; Cybersecurity Services.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Navigate</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Contact</p>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent-cyan">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-cyan"
              >
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="tracking-wide">
            Authorized Security Testing Only &nbsp;|&nbsp; &ldquo;{site.closingLine}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
