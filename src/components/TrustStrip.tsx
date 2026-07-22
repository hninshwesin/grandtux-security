import { platforms } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-border-subtle bg-background-navy/80 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">
          Built for modern security stacks
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {platforms.map((name) => (
            <li
              key={name}
              className="font-display text-sm font-semibold tracking-widest text-muted-dim transition-colors hover:text-muted sm:text-base"
            >
              {name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
