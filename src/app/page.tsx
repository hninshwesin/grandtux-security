import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { homeServiceCards, processSteps, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />

        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div className="flex flex-col gap-6">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">
              {site.tagline}
            </p>
            <h1 className="animate-fade-up-delay-1 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Securing Systems.
              <br />
              Protecting <span className="text-gradient">Futures.</span>
            </h1>
            <p className="animate-fade-up-delay-2 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              We research vulnerabilities, secure infrastructure, and deliver assessments that help teams
              identify risk, report clearly, and protect what matters.
            </p>
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <Button href="/labs" variant="primary">
                Explore Labs
              </Button>
              <Button href="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-lg">
            <div className="animate-pulse-ring pointer-events-none absolute h-72 w-72 rounded-full border border-accent/25 sm:h-96 sm:w-96" />
            <div
              className="animate-pulse-ring pointer-events-none absolute h-[22rem] w-[22rem] rounded-full border border-accent-cyan/15 sm:h-[28rem] sm:w-[28rem]"
              style={{ animationDelay: "1.2s" }}
            />
            <div className="animate-float relative z-10">
              <div className="pointer-events-none absolute inset-[18%] rounded-full bg-accent/20 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-hero.png"
                alt={`${site.name} logo`}
                width={640}
                height={640}
                className="relative mx-auto h-auto w-full max-w-[280px] bg-transparent drop-shadow-[0_0_48px_rgba(43,108,255,0.5)] sm:max-w-[340px] lg:max-w-[380px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Security by Research. Built for"
            accent="Impact."
            description="Offensive security assessments grounded in real attacker techniques — with reporting your team can act on."
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeServiceCards.map((card, index) => (
              <ServiceCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                featured={index === 0}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-background-navy/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Engagement Process"
            title="From authorization to"
            accent="remediation."
            description="A clear, professional path — authorized testing only, scoped carefully, reported thoroughly."
            className="mb-12"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
