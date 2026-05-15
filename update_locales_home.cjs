const fs = require('fs');

const enPath = './src/locales/en/translation.json';
const arPath = './src/locales/ar/translation.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

en.home = {
  slide1Title: "Sensory\n/\nBranding",
  slide1Desc: "Crafting signature fragrances for iconic brands.",
  slide2Title: "Custom Scent Design",
  slide2Desc: "Discover your distinctive brand scent.",
  slide3Title: "Premium Scent Diffusion",
  slide3Desc: "High-performance diffusers that make an impact.",
  slide4Title: "Fairmont Signature Scent",
  slide4Desc: "Discover our exclusive brand scented candles.",
  introTitle: "Scent Marketing Agency, designing fragrances for luxury brands",
  introP1: "Air Aroma is the leading scent marketing agency; we design custom fragrances for luxury brands around the world. With over 25 years experience offering scented air solutions, combined with an unrivaled global network, we help brands create memorable experiences for their customers through scent.",
  introP2Part1: "Our expertise includes custom ",
  introP2Part2: " design, natural ",
  introP2Part3: " and premium ",
  introP2Part4: " Systems. ",
  introP2Part5: " us to create your brand's Signature Fragrance.",
  signatureScent: "Signature Scent",
  essentialOils: "Essential Oils",
  aromaDiffuser: "Aroma Diffuser",
  contact: "Contact",
  featuredClients: "Featured Clients",
  view: "View",
  viewMoreClients: "View more clients",
  article1Title: "Sofitel and Air Aroma's Custom Fragrance Products",
  article1Desc: "Sofitel Hotels & Resorts has long understood that luxury is a feeling, and not just a simple combination of parts. As the largest international hospitality brand rooted in French heritage, Sofitel has built its identity around...",
  article2Title: "Who's Scenting?",
  article2Desc: "We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more.",
  readMore: "Read More"
};

ar.home = {
  slide1Title: "العلامات التجارية\n/\nالحسية",
  slide1Desc: "صناعة عطور مميزة للعلامات التجارية الشهيرة.",
  slide2Title: "تصميم العطور المخصصة",
  slide2Desc: "اكتشف رائحة علامتك التجارية المميزة.",
  slide3Title: "موزعات العطور الفاخرة",
  slide3Desc: "موزعات عالية الأداء تترك انطباعًا قويًا.",
  slide4Title: "عطر فيرمونت المميز",
  slide4Desc: "اكتشف شموعنا العطرية الحصرية.",
  introTitle: "وكالة تسويق الروائح، نصمم العطور للعلامات التجارية الفاخرة",
  introP1: "إير أروما هي وكالة رائدة في مجال تسويق الروائح؛ نقوم بتصميم عطور مخصصة للعلامات التجارية الفاخرة حول العالم. مع أكثر من ٢٥ عامًا من الخبرة في تقديم حلول الهواء المعطر، جنبًا إلى جنب مع شبكة عالمية لا مثيل لها، نساعد العلامات التجارية على خلق تجارب لا تُنسى لعملائها من خلال الرائحة.",
  introP2Part1: "تشمل خبراتنا تصميم ",
  introP2Part2: " المخصص، و",
  introP2Part3: " الطبيعية، وأنظمة ",
  introP2Part4: " الفاخرة. ",
  introP2Part5: " بنا لإنشاء عطر علامتك التجارية المميز.",
  signatureScent: "العطر المميز",
  essentialOils: "الزيوت العطرية",
  aromaDiffuser: "موزعات العطور",
  contact: "اتصل",
  featuredClients: "أبرز عملائنا",
  view: "عرض",
  viewMoreClients: "عرض المزيد من العملاء",
  article1Title: "منتجات العطور المخصصة لسوفيتيل وإير أروما",
  article1Desc: "لطالما أدركت فنادق ومنتجعات سوفيتيل أن الفخامة هي شعور، وليست مجرد مزيج بسيط من الأجزاء. بصفتها أكبر علامة تجارية دولية للضيافة متجذرة في التراث الفرنسي، بنت سوفيتيل هويتها حول...",
  article2Title: "من يعطر؟",
  article2Desc: "نحن نصمم روائح للفنادق ومتاجر البيع بالتجزئة والمؤسسات المالية والعلامات التجارية للأزياء والفعاليات والمنازل السكنية وغير ذلك الكثير.",
  readMore: "اقرأ المزيد"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
