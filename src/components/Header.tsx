"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/content";
import { Button } from "./Button";
import { IconClose, IconMenu } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={280}
            height={84}
            className="h-12 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-accent-cyan" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="ghost" className="px-4 py-2 text-sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border-subtle p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border-subtle bg-background-navy lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    active ? "bg-accent/10 text-accent-cyan" : "text-muted hover:bg-surface hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
