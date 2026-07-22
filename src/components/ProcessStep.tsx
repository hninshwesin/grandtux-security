type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
};

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col gap-3 border-l border-accent/30 pl-5 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5">
      <span className="font-display text-xs font-bold tracking-[0.2em] text-accent-cyan">{step}</span>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
