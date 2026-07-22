import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutPoints, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About GrandTux Security Labs — independent offensive security consultant focused on research-led assessments and clear reporting.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-subtle bg-background-navy/50 py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            eyebrow="About"
            title="Independent Offensive Security &"
            accent="Cybersecurity Services"
            description="GrandTux Security Labs helps organizations uncover weaknesses before adversaries do — with research-led testing, practical remediation guidance, and reports that communicate risk clearly."
          />
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl" />
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={420}
              height={220}
              className="relative w-full drop-shadow-[0_0_30px_rgba(43,108,255,0.35)]"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why GrandTux"
            title="Built to impress with"
            accent="substance."
            description="A sharp, professional practice focused on outcomes — not theater."
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {aboutPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-border-subtle bg-surface/70 p-6 transition-colors hover:border-accent/35"
              >
                <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-background-navy/60 py-16">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              {site.tagline}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
              Mission: make systems harder to break — and risks easier to understand.
            </h2>
          </div>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
