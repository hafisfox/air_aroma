import type { SecondaryNavItem } from "../data/referenceContent";
import type { Locale } from "../seo/site";

export default function SecondaryNav({
  items,
  locale,
  label,
}: {
  items: SecondaryNavItem[];
  locale: Locale;
  label: string;
}) {
  return (
    <nav className="secondary-nav" aria-label={label}>
      <div className="reference-container secondary-nav__inner">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="secondary-nav__link"
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            {item.label[locale]}
          </a>
        ))}
      </div>
    </nav>
  );
}

