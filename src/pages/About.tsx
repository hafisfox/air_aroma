import { motion } from "motion/react";
import { useLocaleRouting } from "../lib/localeRouting";

export default function About() {
  const { isArabic } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "عن Air Aroma",
        subtitle:
          "نؤمن بأن الرائحة عنصر تصميم حقيقي، وليست مجرد طبقة إضافية. لهذا نربط بين تصميم العطر والتشغيل وتجربة المستخدم داخل المساحة.",
        storyTitle: "تصميم عطري يجمع بين الإحساس والأداء",
        storyP1:
          "تعمل Air Aroma عند نقطة التقاء الهوية العطرية بالخبرة التشغيلية. نحن نهتم باتجاه العطر نفسه، لكننا نهتم أيضاً بكيفية انتشاره داخل المساحة وكيفية الحفاظ على الجودة والثبات اليومي.",
        storyP2:
          "هذا النهج مهم خصوصاً لمشروعات الضيافة الراقية والتجزئة والمساكن ذات المعايير العالية في السعودية والخليج، حيث يجب أن تبدو التجربة متسقة منذ لحظة الوصول وحتى أدق التفاصيل.",
        whyChoose: "لماذا Air Aroma؟",
        features: [
          {
            title: "تفكير استراتيجي",
            description:
              "نربط اتجاه العطر مع نوع المساحة والهوية والعائد المطلوب من التجربة.",
          },
          {
            title: "مكتبة عطرية مرنة",
            description:
              "يمكن البدء من مجموعات عطرية قائمة أو تطوير اتجاه مخصص للمشروع.",
          },
          {
            title: "أنظمة نشر مناسبة للموقع",
            description:
              "نساعد في اختيار النظام الأنسب للمساحات الصغيرة والكبيرة مع مراعاة الاستخدام اليومي.",
          },
        ],
      }
    : {
        title: "About Air Aroma",
        subtitle:
          "We see scent as a genuine design layer, not a decorative extra. That is why our work connects fragrance direction with operations and the lived experience of a space.",
        storyTitle: "Fragrance thinking that balances feeling and performance",
        storyP1:
          "Air Aroma works at the intersection of scent identity and operational reality. We care about the fragrance itself, but we also care about how it moves through a space and how quality is maintained over time.",
        storyP2:
          "That approach matters most for hospitality, retail, and premium residential projects in Saudi Arabia and the GCC, where the experience has to feel consistent from first arrival through the smallest detail.",
        whyChoose: "Why Air Aroma?",
        features: [
          {
            title: "Strategic Fragrance Thinking",
            description:
              "We connect scent direction to the space type, brand character, and the commercial outcome the experience should support.",
          },
          {
            title: "Flexible Fragrance Library",
            description:
              "Teams can start from existing blends or use them as the first step toward a custom scent brief.",
          },
          {
            title: "Right-Sized Diffusion",
            description:
              "We help match the scent concept to hardware that makes sense for both scale and everyday operation.",
          },
        ],
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="border-b border-white/10 px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-light leading-tight text-white sm:text-6xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/60"
          >
            {copy.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 border-b border-white/10 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <div className="lg:pr-12">
          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl">
            {copy.storyTitle}
          </h2>
          <p className="mt-8 text-[15px] leading-8 text-white/60">
            {copy.storyP1}
          </p>
          <p className="mt-6 text-[15px] leading-8 text-white/60">
            {copy.storyP2}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] overflow-hidden bg-[#111]"
        >
          <img
            src="https://images.unsplash.com/photo-1541888048496-e2a1e6417721?auto=format&fit=crop&q=80"
            alt={
              isArabic
                ? "مساحة معمارية فاخرة تعبّر عن التصميم الحسي"
                : "Luxury architectural interior representing sensory design"
            }
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-80"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-3xl font-light tracking-wide text-white"
        >
          {copy.whyChoose}
        </motion.h2>
        <div className="grid gap-12 sm:grid-cols-3">
          {copy.features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-8 h-px w-16 bg-white/20" aria-hidden="true" />
              <h3 className="mb-4 text-lg font-light text-white">{feature.title}</h3>
              <p className="text-[14px] leading-7 text-white/50">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
