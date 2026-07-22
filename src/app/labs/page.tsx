import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { labFocus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "GrandTux Security Labs — research-minded offensive security methodology, assessment tooling mindset, and responsible practice.",
};

export default function LabsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-70" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Labs"
            title="Research-minded."
            accent="Operator-ready."
            description="GrandTux Security Labs approaches offensive security as a craft — disciplined methodology, practical tooling, and responsible engagement from start to finish."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {labFocus.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-border-subtle bg-surface/70 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(43,108,255,0.14)] sm:p-8"
              >
                <h2 className="font-display text-xl font-semibold text-white">{item.title}</h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
                <span className="mt-2 h-0.5 w-12 rounded-full bg-gradient-accent" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-background-navy/60 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Lab Ethos
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
              Identify. Report. <span className="text-gradient">Secure.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We do not chase noise. We pursue signal — real vulnerabilities, clear evidence, and remediation
              paths that help defenders close the gap. Testing is authorized only, scoped carefully, and
              handled with strict confidentiality.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Bring a tough problem to the lab"
        description="Whether you need a full assessment or a focused review, GrandTux is ready to engage professionally."
      />
    </>
  );
}
