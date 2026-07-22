import { Button } from "./Button";
import { Container } from "./Container";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to strengthen your defenses?",
  description = "Authorize an assessment with GrandTux Security Labs. Identify risks. Report clearly. Secure what matters.",
}: CtaBandProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,108,255,0.18),transparent_65%)]" />
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="font-display max-w-xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">{description}</p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
