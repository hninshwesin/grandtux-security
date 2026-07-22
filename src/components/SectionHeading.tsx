type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="text-gradient">{accent}</span>
          </>
        ) : null}
      </h2>
      {description ? <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
