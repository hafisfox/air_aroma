import { useLocaleRouting } from "../lib/localeRouting";
import { ActionLink, MountReveal } from "../components/brand/BrandPrimitives";

export default function NotFound() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  return (
    <div className="section-inner flex min-h-[78vh] items-center py-32">
      <MountReveal className="surface-panel mx-auto flex w-full max-w-4xl flex-col items-center gap-6 p-8 text-center md:p-12">
        <span className="kicker-pill">404</span>
        <h1 className="hero-title max-w-[9ch]">
          {isArabic ? "الصفحة المطلوبة غير موجودة." : "The page you were looking for is no longer here."}
        </h1>
        <p className="hero-body max-w-[42rem]">
          {isArabic
            ? "يمكنك العودة إلى الصفحة الرئيسية أو متابعة استكشاف الخدمات والمنتجات للعثور على المسار الأنسب."
            : "You can return to the homepage or continue exploring the services and products to find the right route back into the site."}
        </p>
        <ActionLink to={toLocalePath("/")}>
          {isArabic ? "العودة للرئيسية" : "Return Home"}
        </ActionLink>
      </MountReveal>
    </div>
  );
}
