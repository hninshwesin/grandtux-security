import { ServiceIcon, type IconName } from "./Icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconName;
  href?: string;
  featured?: boolean;
};

export function ServiceCard({ title, description, icon, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-4 rounded-xl border bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-elevated hover:shadow-[0_0_28px_rgba(43,108,255,0.18)] ${
        featured ? "border-accent/45 shadow-[0_0_24px_rgba(43,108,255,0.12)]" : "border-border-subtle"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan shadow-[0_0_18px_rgba(43,108,255,0.25)] transition-shadow group-hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]">
        <ServiceIcon name={icon} className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <span
        className={`mt-auto h-0.5 w-10 rounded-full bg-gradient-accent transition-all duration-300 group-hover:w-16 ${
          featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </article>
  );
}
