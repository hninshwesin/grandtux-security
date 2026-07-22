import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { IconGlobe, IconMail } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${site.email} for authorized penetration testing and security assessments.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border-subtle bg-background-navy/50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Start a professional"
            accent="engagement."
            description="Reach out for penetration testing and security assessment inquiries. Testing is performed only with prior written authorization."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface/70 p-7 transition-all duration-300 hover:border-accent/45 hover:shadow-[0_0_28px_rgba(43,108,255,0.16)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
                <IconMail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-white">Email</h2>
                <p className="mt-1 text-sm text-muted">Preferred for assessment inquiries</p>
                <p className="mt-4 text-base font-medium text-accent-cyan transition-colors group-hover:text-white">
                  {site.email}
                </p>
              </div>
            </a>

            <a
              href={site.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface/70 p-7 transition-all duration-300 hover:border-accent/45 hover:shadow-[0_0_28px_rgba(43,108,255,0.16)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
                <IconGlobe className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-white">Website</h2>
                <p className="mt-1 text-sm text-muted">GrandTux Security Labs online</p>
                <p className="mt-4 text-base font-medium text-accent-cyan transition-colors group-hover:text-white">
                  {site.website}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-10 rounded-xl border border-accent/25 bg-accent/5 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              Authorized Security Testing Only
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              All discovered information, vulnerabilities, credentials, and technical details are treated as
              strictly confidential and used solely for the authorized security assessment.{" "}
              <span className="text-white">&ldquo;{site.closingLine}&rdquo;</span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
