import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function MountReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCentered = align === "center";

  return (
    <div
      className={cx(
        "section-intro",
        isCentered && "section-intro--center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  );
}

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}) {
  return (
    <Link to={to} className={cx(buttonClassName(variant), className)}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}) {
  return (
    <a href={href} className={cx(buttonClassName(variant), className)}>
      {children}
    </a>
  );
}

export function ActionRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("action-row", className)}>{children}</div>;
}

export function BulletList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className={cx("bullet-list", dark && "bullet-list--dark")}>
      {items.map((item) => (
        <li key={item}>
          <span className="bullet-list__dot" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="faq-stack">
      {items.map((item, index) => (
        <div key={item.question}>
          <Reveal delay={index * 0.06}>
            <details className="faq-item">
              <summary className="faq-question">
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          </Reveal>
        </div>
      ))}
    </div>
  );
}

export function FinalCta({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
  tone?: "dark" | "light";
}) {
  return (
    <section className={cx("cta-band", tone === "light" && "cta-band--light")}>
      <div className="section-inner cta-band__inner">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          body={body}
          align="center"
        />
        <ActionRow className="justify-center">
          <ActionLink to={primary.to}>{primary.label}</ActionLink>
          {secondary ? (
            <ActionLink to={secondary.to} variant="secondary">
              {secondary.label}
            </ActionLink>
          ) : null}
        </ActionRow>
      </div>
    </section>
  );
}

function buttonClassName(variant: "primary" | "secondary" | "subtle") {
  if (variant === "secondary") {
    return "button-secondary";
  }

  if (variant === "subtle") {
    return "button-subtle";
  }

  return "button-primary";
}
