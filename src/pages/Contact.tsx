import type { FormEvent } from "react";
import { useState } from "react";
import SecondaryNav from "../components/SecondaryNav";
import {
  contactSecondaryNav,
  officeDetails,
} from "../data/referenceContent";
import {
  type ContactResponse,
  contactReasons,
  normalizeContactPayload,
  validateContactPayload,
} from "../lib/contact";
import { useLocaleRouting } from "../lib/localeRouting";

const countries = ["United States", "Australia", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Singapore", "India"];
const states = ["Alabama", "California", "Florida", "New York", "Texas", "Victoria", "Dubai", "Riyadh"];

export default function Contact() {
  const { locale } = useLocaleRouting();
  const isArabic = locale === "ar";
  const [status, setStatus] = useState<ContactResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const payload = normalizeContactPayload(Object.fromEntries(new FormData(form)));
    const validation = validateContactPayload(payload);

    if (!validation.isValid) {
      setStatus({
        ok: false,
        message: isArabic
          ? "يرجى مراجعة الحقول المطلوبة قبل الإرسال."
          : "Please review the required fields before submitting.",
        errors: validation.errors,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactResponse;

      setStatus(result);

      if (result.ok) {
        form.reset();
      }
    } catch {
      setStatus({
        ok: false,
        message: isArabic
          ? "تعذر إرسال الرسالة الآن. يرجى المحاولة لاحقاً أو مراسلتنا مباشرة."
          : "We could not send the message right now. Please try again later or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <SecondaryNav
        items={contactSecondaryNav}
        locale={locale}
        label={isArabic ? "أقسام التواصل" : "Contact sections"}
      />

      <section id="locations" className="contact-offices">
        <div className="reference-container contact-offices__grid">
          {[officeDetails.local, officeDetails.corporate].map((office) => (
            <article key={office.title.en} className="office-card">
              <h2>{office.title[locale]}</h2>
              <p dir="ltr">{office.lines.join("\n")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact-form" className="quiet-section">
        <form
          className="contact-form"
          method="post"
          action="/api/contact"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="locale" value={locale} />
          <div className="field hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="contact-form__grid">
            <Field label={isArabic ? "الاسم الأول" : "First name"} name="firstName" required />
            <Field label={isArabic ? "اسم العائلة" : "Last name"} name="lastName" required />
            <Field label={isArabic ? "الشركة" : "Company"} name="company" />

            <div className="field">
              <label>
                {isArabic ? "البريد الإلكتروني" : "Email"} <span className="required">*</span>
              </label>
              <div className="contact-form__row">
                <div>
                  <input name="email" type="email" required autoComplete="email" />
                  <p className="field__hint">{isArabic ? "أدخل البريد الإلكتروني" : "Enter Email"}</p>
                </div>
                <div>
                  <input name="emailConfirm" type="email" required autoComplete="email" />
                  <p className="field__hint">{isArabic ? "تأكيد البريد الإلكتروني" : "Confirm Email"}</p>
                </div>
              </div>
            </div>

            <Field label={isArabic ? "الهاتف" : "Phone"} name="phone" type="tel" />

            <SelectField
              label={isArabic ? "البلد" : "Country"}
              name="country"
              options={countries}
              required
            />
            <SelectField
              label={isArabic ? "الولاية / المنطقة" : "State"}
              name="state"
              options={states}
              required
            />
            <SelectField
              label={isArabic ? "سبب التواصل" : "Reason"}
              name="reason"
              options={[...contactReasons]}
              required
            />

            <div className="field">
              <label htmlFor="message">
                {isArabic ? "الرسالة" : "Message"} <span className="required">*</span>
              </label>
              <textarea id="message" name="message" required />
            </div>

            <label className="checkbox-field">
              <input name="subscribe" type="checkbox" defaultChecked />
              <span>{isArabic ? "الاشتراك في النشرة الإخبارية" : "Subscribe to our newsletter"}</span>
            </label>

            {status ? (
              <div className="form-status" data-tone={status.ok ? "success" : "error"} role="status">
                {status.message}
              </div>
            ) : null}

            <button type="submit" className="reference-button w-fit min-w-[160px]" disabled={isSubmitting}>
              {isSubmitting
                ? isArabic
                  ? "جار الإرسال..."
                  : "Submitting..."
                : isArabic
                  ? "إرسال"
                  : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {required ? <span className="required">*</span> : null}
      </label>
      <input id={name} name={name} type={type} required={required} />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {required ? <span className="required">*</span> : null}
      </label>
      <select id={name} name={name} required={required}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

