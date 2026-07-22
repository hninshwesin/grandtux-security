import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/Icons";
import { engagementPrinciples, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Penetration testing and security assessment services: web, mobile, API & network, manual testing, reporting, and remediation review.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border-subtle bg-background-navy/50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Penetration Testing &"
            accent="Security Assessment"
            description="Independent offensive security services designed to identify vulnerabilities, deliver clear reports, and guide remediation."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="group grid gap-5 rounded-xl border border-border-subtle bg-surface/70 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-elevated hover:shadow-[0_0_28px_rgba(43,108,255,0.14)] sm:grid-cols-[auto_1fr] sm:items-start sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-xs font-bold tracking-[0.18em] text-accent-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-background-navy/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Engagement Principles"
              title="Authorized. Scoped."
              accent="Confidential."
              description="Every engagement follows clear rules so testing stays professional, controlled, and useful."
            />
            <ul className="flex flex-col gap-3">
              {engagementPrinciples.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-border-subtle bg-surface/60 px-4 py-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Request an Assessment
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need a scoped security assessment?"
        description="Tell us about your applications, APIs, or external exposure — we’ll outline a professional engagement path."
      />
    </>
  );
}
