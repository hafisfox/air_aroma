import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { fragrances } from "../data/products";

export default function Fragrances() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<Record<string, number>>({});

  const getImg = (id: string) => activeImageIdx[id] ?? 0;
  const setImg = (id: string, idx: number) =>
    setActiveImageIdx((prev) => ({ ...prev, [id]: idx }));

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      {/* Hero */}
      <section
        id="fragrances-hero"
        aria-label="Fragrances collection introduction"
        className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium mb-4"
          >
            {isAr ? "مجموعتنا" : "Our Collection"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            {isAr ? "العطور" : "Fragrances"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            {isAr
              ? "صُنعت لأرقى الأذواق. تمتد مجموعتنا من الأخشاب والراتنجات العريقة إلى أعذب مزيج من الحمضيات المعاصرة، المُصمَّمة خصيصًا للمساحات الفاخرة."
              : "Crafted for discerning tastes. Our palette ranges from rich woods and resins, to fresh, contemporary citrus blends perfectly tailored for premium spaces."}
          </motion.p>
          {/* count pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-xs text-white/40 tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
            {fragrances.length} {isAr ? "عطرًا مُصمَّمًا" : "signature scents"}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section
        id="fragrances-collection"
        aria-label="Fragrance collection"
        className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {fragrances.map((fragrance, idx) => {
            const imgIdx = getImg(fragrance.id);
            const isOpen = activeId === fragrance.id;
            const name = isAr ? fragrance.nameAr : fragrance.nameEn;
            const story = isAr ? fragrance.storyAr : fragrance.storyEn;
            const notes = isAr ? fragrance.notesAr : fragrance.notesEn;
            const chars = isAr ? fragrance.characteristicsAr : fragrance.characteristicsEn;
            const usedBy = isAr ? fragrance.usedByAr : fragrance.usedByEn;
            const ifEnjoyed = isAr ? fragrance.ifYouEnjoyedAr : fragrance.ifYouEnjoyedEn;

            return (
              <motion.article
                key={fragrance.id}
                id={`fragrance-${fragrance.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.07 }}
                className="group flex flex-col bg-[#0f0f0f] border border-white/5 rounded-sm overflow-hidden hover:border-brand-gold/20 transition-colors duration-500"
              >
                {/* Image + size switcher */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIdx}
                      src={fragrance.images[imgIdx].file}
                      alt={`${name} — Air Aroma ${isAr ? "عطر فاخر" : "premium fragrance"}`}
                      width="1200"
                      height="1500"
                      loading="lazy"
                      decoding="async"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  {/* Size toggle chips */}
                  {fragrance.images.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      {fragrance.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setImg(fragrance.id, i)}
                          className={`text-[10px] px-2.5 py-1 rounded-full border transition-all duration-200 ${
                            i === imgIdx
                              ? "bg-brand-gold border-brand-gold text-brand-black font-semibold"
                              : "border-white/20 text-white/60 hover:border-white/40"
                          }`}
                        >
                          {img.size}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Characteristics badge */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    {chars.slice(0, 2).map((c, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-widest bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 px-2 py-0.5 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h2 className="text-xl font-light tracking-wide mb-1">{name}</h2>
                    <p className="text-white/30 uppercase tracking-[0.2em] text-[10px]">
                      {notes.slice(0, 4).join(" · ")}
                      {notes.length > 4 && " ..."}
                    </p>
                  </div>

                  <p className="text-white/50 font-light leading-relaxed text-[14px] line-clamp-3">
                    {story}
                  </p>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setActiveId(isOpen ? null : fragrance.id)}
                    className="mt-auto text-[11px] uppercase tracking-widest text-brand-gold/70 hover:text-brand-gold transition-colors duration-200 flex items-center gap-2 group/btn"
                    aria-expanded={isOpen}
                    aria-controls={`details-${fragrance.id}`}
                  >
                    <span>{isOpen ? (isAr ? "إخفاء" : "Hide details") : (isAr ? "التفاصيل الكاملة" : "Full details")}</span>
                    <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>↓</span>
                  </button>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`details-${fragrance.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                          {/* Full notes */}
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                              {isAr ? "مكونات العطر" : "Scent Notes"}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {notes.map((note, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] border border-white/10 rounded-full px-2.5 py-0.5 text-white/60"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* All characteristics */}
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                              {isAr ? "الخصائص" : "Characteristics"}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {chars.map((c, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] bg-brand-gold/10 border border-brand-gold/20 rounded-full px-2.5 py-0.5 text-brand-gold"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Simple Goodness */}
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                              {isAr ? "بساطة التصميم" : "Simple Goodness"}
                            </p>
                            <ul className="space-y-1 text-[12px] text-white/50 font-light">
                              {(isAr
                                ? ["مكونات بأعلى جودة", "عطر علاجي معتمد (IFRA)", "خالٍ من الكحول", "خالٍ من البارابين", "مناسب للنباتيين"]
                                : ["Highest quality ingredients", "IFRA certified aromatherapy fragrance", "No Alcohol or carrier oils", "No Parabens & GMO Free", "Vegan Friendly"]
                              ).map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="text-brand-gold text-xs">✓</span> {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* If you enjoyed */}
                          {ifEnjoyed && ifEnjoyed.length > 0 && (
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                                {isAr ? "إذا أعجبك" : "If You Enjoyed"}
                              </p>
                              <p className="text-[12px] text-white/50 italic">{ifEnjoyed.join(", ")}</p>
                            </div>
                          )}

                          {/* Used by */}
                          {usedBy && usedBy.length > 0 && (
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                                {isAr ? "الأماكن المناسبة" : "Used By"}
                              </p>
                              <p className="text-[12px] text-white/50">{usedBy.join(", ")}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
