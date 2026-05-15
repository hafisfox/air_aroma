export interface Product {
  id: string;
  folderName: string;
  nameEn: string;
  nameAr: string;
  storyEn: string;
  storyAr: string;
  notesEn: string[];
  notesAr: string[];
  characteristicsEn: string[];
  characteristicsAr: string[];
  images: { size: string; file: string }[];
  type: "fragrance" | "diffuser";
  usedByEn?: string[];
  usedByAr?: string[];
  ifYouEnjoyedEn?: string[];
  ifYouEnjoyedAr?: string[];
}

export const products: Product[] = [
  {
    id: "amber-grand",
    folderName: "AMBER GRAND",
    nameEn: "Amber Grand",
    nameAr: "عنبر جراند",
    storyEn: "A look into a deeper sense of place, warmth remains present as allure unfolds. Lush and decadent for self-satisfaction, hours passed ruminating over unkept bouquets and antique gemstones. Reflections of blush hued light flicker across velvet upholstered furniture, reaching the stature of tall ceilings with poetic fractures of age.",
    storyAr: "إحساس أعمق بالمكان، حيث يبقى الدفء فيه حاضرًا، وتطغى عليه الجاذبية في آنٍ واحدٍ. عطر آسر وساحر يعزز الرضا عن النفس؛ فالساعات تنقضي في التأمل وسط أجواء من باقات الزهور والأحجار الكريمة العتيقة المتناثرة في الأرجاء. تظهر انعكاسات وردية متلألئة رقيقة على الأثاث المخملي المريح، لتبلغ بذلك عنان المكان، وتحكي قصصًا من أعماق الذكريات.",
    notesEn: ["Italian Mandarin", "Benzoin Balsam", "Amber", "Musk", "Vanilla", "Jasmine", "Geranium", "Patchouli"],
    notesAr: ["اليوسفي الإيطالي", "بلسم البنزوين", "العنبر", "المسك", "الفانيليا", "الياسمين", "الجيرانيوم", "الباتشولي"],
    characteristicsEn: ["Aromatic", "Oriental", "Relaxing", "Warm"],
    characteristicsAr: ["فوَّاح", "شرقي", "مُريح", "دافئ"],
    images: [
      { size: "100ml", file: "/products/AMBER GRAND/100ml-Amber-Grand.jpg" },
      { size: "30ml", file: "/products/AMBER GRAND/30ml-Amber-Grand.jpg" },
    ],
    type: "fragrance",
    ifYouEnjoyedEn: ["Park Hyatt Scent"],
    ifYouEnjoyedAr: ["عطر بارك حياة"],
    usedByEn: ["Fashion Stores", "Hotels"],
    usedByAr: ["متاجر الأزياء", "الفنادق"],
  },
  {
    id: "cedar-mood",
    folderName: "CEDAR MOOD",
    nameEn: "Cedar Mood",
    nameAr: "سيدار مود",
    storyEn: "Legacy speaks through worn pages unfurling at the edges, exposed by dusty rays of light. Rough worn hands ponder the contours of an antique globe. Memories of worldly travels revolve on a spinning metal axis. Curiosity sparks a newfound venture, seeking the unfamiliar, forever the nomad.",
    storyAr: "تسرد لنا الصفحات القديمة عبق التاريخ العريق، وهي تتمايل في زهوٍ، وتتألق تحت أشعة النور الحالمة. هنالك من يعمل بجدٍ وتفانٍ لِيَحِيْكَ لنا عالمًا لا يضاهيه نظير. أما عن ذكريات الترحال المقطوعة هنا وهنالك، فهي تدور في فلك لا يعرف نهاية أبدًا. إنه الفضول البشري الذي يدفعنا إلى خوض غمار كل ما هو جديد بحثًا عن غير المألوف والتنقل بلا حدود.",
    notesEn: ["Lavender", "Cypress", "Rosemary", "Carnation", "Cedarwood", "Pine Needles", "Citrus", "Leather", "Moss", "Sandalwood"],
    notesAr: ["اللافندر", "السرو", "إكليل الجبل", "القرنفل", "خشب الأرز", "إبر الصنوبر", "الحمضيات", "الجلود", "الطحالب", "خشب الصندل"],
    characteristicsEn: ["Aromatic", "Comforting", "Spicy", "Woody"],
    characteristicsAr: ["فوَّاح", "مُريح", "حار", "خشبي"],
    images: [
      { size: "100ml", file: "/products/CEDAR MOOD/100ml-Cedar-Mood.jpg" },
      { size: "30ml", file: "/products/CEDAR MOOD/30ml-Cedar-Mood.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "ginger-flower",
    folderName: "GINGER FLOWER",
    nameEn: "Ginger Flower",
    nameAr: "زهرة الزنجبيل",
    storyEn: "The rarest of blooms, a crimson dream. Always elusive and seemingly unattainable. Peering through dense green, translucent notes of cool condensation amass. Shimmers of magenta graciously lead to inhalations of pineapple and violet. Sweet with spice, ginger flower unveils its beauty.",
    storyAr: "الزهرة الأندر بين مثيلات جنسها، إنها حلم بعيد المنال. دائمًا ما تراوغ محبيها وتجتذبهم إليها دون أن تتنازل عن كبريائها. إذا ما حدَّقت نظرك إلى الحديقة ذات الأشجار الكثيفة الخضراء، فستأسرك تلك الطبقات الشفافة من الندى المتكثف. وإذا ما أمعنت النظر في درجات الأرجواني المشرقة، فستُهيمن على أعماقك نفحات ذكية من الأناناس والبنفسج. لمسات حلوة وحارة ممتزجة معًا لتعبّر لنا عن جمال زهرة الزنجبيل.",
    notesEn: ["Fresh Cut Grass", "Lilac", "Pineapple", "Ginger Flower", "Violet", "Vanilla"],
    notesAr: ["العشب الطازج", "زهرة اللَّيْلَك", "الأناناس", "زهرة الزنجبيل", "البنفسج", "الفانيليا"],
    characteristicsEn: ["Floral", "Oriental", "Relaxing", "Verdant"],
    characteristicsAr: ["زهري", "شرقي", "مُريح", "مُورِق"],
    images: [
      { size: "100ml", file: "/products/GINGER FLOWER/100ml-Ginger-Flower.jpg" },
      { size: "30ml", file: "/products/GINGER FLOWER/30ml-Ginger-Flower.jpg" },
    ],
    type: "fragrance",
    ifYouEnjoyedEn: ["Langham Hotels Scent", "Langham Place Scent"],
    ifYouEnjoyedAr: ["عطر فنادق لانغهام", "عطر لانغهام بليس"],
    usedByEn: ["Hotels"],
    usedByAr: ["الفنادق"],
  },
  {
    id: "havana",
    folderName: "HAVANA",
    nameEn: "Havana",
    nameAr: "هافانا",
    storyEn: "Heavy in the hips as the heat sits in the air, luscious golden drips of grapes slither down a glass with a crimson kiss stain. Dark wooden corners hide a secret invitation deeper into the night, with the sweet craving of danger lingering and seduction brewing. A song of the underground beckons those who wish for the thrill, an unbridled willingness to lose oneself to rapture.",
    storyAr: "عطر أخَّاذ يتغلغل في الأعماق في أجواء تنبض بالأحاسيس التوَّاقة، ومن حوله تنساب قطرات ذهبية من شراب عنب في كأس تُظلِّلها قبلة مفعمة باللون القرمزي المثير. وفي ركن خافت وهادئ، توجد جلسة سمر خفية تتخذ من الليل سكنًا لها، حيث أجواء العشق المحبوب والإغراء المطلوب يُهيمنان على تلك اللحظات الاستثنائية.",
    notesEn: ["Dark Virginian Cedar", "Oak", "Vanilla", "Incense", "Tobacco Leaves", "Strawberry", "White Lily", "Fir Resin"],
    notesAr: ["خشب الأرز الفرجيني الداكن", "البلوط", "الفانيليا", "البخور", "أوراق التبغ", "الفراولة", "الزنبق الأبيض", "راتنج شجرة التنوب"],
    characteristicsEn: ["Aromatic", "Gourmand", "Smoky", "Woody"],
    characteristicsAr: ["فوَّاح", "لذيذ", "مدخن", "خشبي"],
    images: [
      { size: "100ml", file: "/products/HAVANA/100ml-Havana.jpg" },
      { size: "30ml", file: "/products/HAVANA/30ml-Havana.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "illuminate",
    folderName: "ILLUMINATE",
    nameEn: "Illuminate",
    nameAr: "إليومنيت",
    storyEn: "Luminous through a gradient sky, the central spark of a soft glow. Radiant and deep, gracefully descending through wide expanse. The ember that doesn't die, illuminating all that is. Felt as truth, a tangible light, the sinking sun as simultaneously permanent and fleeting.",
    storyAr: "درة تتلألأ في سماء ذات ألوان متدرجة، وبريق سرمدي يتشح بإشراقة ناعمة. عطر متوهج وعميق، ينتشر بخفةٍ في أرجاء الأماكن الفسيحة. إنه أشبه بجمرة لا يخفت ضوئها، فهو منبع النور لكل ما حوله. يشعر معه المرء وكأنه الحقيقة الكامنة، والضياء المنشود، والشمس الدانية التي تشرق وتغرب في دورة لا متناهية.",
    notesEn: ["Bergamot", "Orange", "Blood Orange", "Grapefruit", "Verbena", "Marine Air", "Asian Pear", "Lily Of The Valley", "Neroli", "White Musk", "Moss", "Cedarwood"],
    notesAr: ["البرغموت", "البرتقال", "البرتقال الأحمر", "الليمون الهندي", "عشبة رعي الحمام", "نفحات الهواء البحري", "الكمثرى الآسيوية", "زنبق الوادي", "زهر البرتقال", "المسك الأبيض", "الطحالب", "خشب الأرز"],
    characteristicsEn: ["Aquatic", "Bright", "Citrus", "Uplifting"],
    characteristicsAr: ["بحري", "قوي", "حمضي", "منشط"],
    images: [
      { size: "100ml", file: "/products/ILLUMINATE/100ml-Illuminate.jpg" },
      { size: "30ml", file: "/products/ILLUMINATE/30ml-Illuminate.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "saffron-suede",
    folderName: "SAFRRON SUEDE",
    nameEn: "Saffron Suede",
    nameAr: "سافرون سويد",
    storyEn: "Astride the dunes under starry skies, hypnotic rhythms surround. Stillness awoken by whispers of sage and purple saffron. Warm inhalations of sueded musk and leather fuel a sense of adventure, forever chasing the horizon.",
    storyAr: "على طول الكثبان الرملية تحت السماء المُرصعة بالنجوم، تحيط بك إيقاعات تبعث على الاسترخاء. يستيقظ السكون على همسات نبتة المريمية والزعفران الأرجواني. يُعزز العبق الدافئ للمسك الناعم والجلود حس المغامرة؛ انطلاقًا نحو الأفق إلى الأبد.",
    notesEn: ["Purple Saffron Flower", "Sage", "Patchouli Wood", "White Suede"],
    notesAr: ["زهرة الزعفران الأرجواني", "المريمية", "خشب الباتشولي", "جلد السويد الأبيض"],
    characteristicsEn: ["Aromatic", "Earthy", "Fresh", "Warm"],
    characteristicsAr: ["فوَّاح", "ترابي", "مُنعش", "دافئ"],
    images: [
      { size: "100ml", file: "/products/SAFRRON SUEDE/100ml-Saffron-Suede.jpg" },
      { size: "30ml", file: "/products/SAFRRON SUEDE/30ml-Saffron-Suede.jpg" },
    ],
    type: "fragrance",
    ifYouEnjoyedEn: ["R.M.Williams Signature Scent"],
    ifYouEnjoyedAr: ["عطر متميز في آر إم ويليامز"],
    usedByEn: ["Hotels", "Retail"],
    usedByAr: ["الفنادق", "محلات البيع بالتجزئة"],
  },
  {
    id: "sencha",
    folderName: "SENCHA",
    nameEn: "Sencha",
    nameAr: "سينشا",
    storyEn: "Calm, meticulous placement of smooth ceramic and finely tailored cloth. Soft earth tones reveal simplicity and sensibility in drawn out time. Deliberate presence and virtuous patience, slowly filling warm liquid. Freeing by its structural nature amongst near silence and fluidity, the tone of a pond come to stillness.",
    storyAr: "نسق هادئ ومتقن للمكان ينساب بسلاسة، مع لمسات غاية في الرقي. إيقاعات ترابية ناعمة تفوح بالبساطة والحسِّ المرهف كلما استغرقت فيها. أريج ذو حضور طاغٍ وتأثير عميق، ينهمر بهدوء على كل ما يعترض طريقه. ذو طبيعة منتظمة تجمع بين السكون والرشاقة، لتسود الطمأنينة في الأرجاء كافةً.",
    notesEn: ["Green Tea", "Bergamot", "Lemon", "Cardamom", "Rose", "Thyme", "Violet", "Nutmeg", "Jasmine", "Mate", "Musk", "Cedarwood", "Guaiac Wood"],
    notesAr: ["الشاي الأخضر", "البرغموت", "الليمون", "الهيل", "الورد", "الزعتر", "البنفسج", "جوزة الطيب", "الياسمين", "عشبة المتّة", "المسك", "خشب الأرز", "خشب الجياك"],
    characteristicsEn: ["Citrus", "Clean", "Soft Floral", "Verdant"],
    characteristicsAr: ["حمضي", "نقي", "زهري ناعم", "مُورِق"],
    images: [
      { size: "100ml", file: "/products/SENCHA/100ml-Sencha.jpg" },
      { size: "30ml", file: "/products/SENCHA/30ml-Sencha.jpg" },
    ],
    type: "fragrance",
    ifYouEnjoyedEn: ["Intercontinental Hotel Scent"],
    ifYouEnjoyedAr: ["عطر فندق إنتركونتيننتال"],
    usedByEn: ["Department Stores", "Retail Stores"],
    usedByAr: ["المتاجر الكبرى المتعددة الأقسام", "متاجر البيع بالتجزئة"],
  },
  {
    id: "spice-trader",
    folderName: "SPICE TRADER",
    nameEn: "Spice Trader",
    nameAr: "سبايس تريدر",
    storyEn: "The creaks of a rolling wood wagon's wheels are barely heard amongst the soundtrack of chatter, clinking metals, and camel's groans. Overfilled with colorful plant powders, the wagon barrels a sharp turn, passing through intricately woven rugs, hanging tall and creating private corners for negotiation. Vibrant bohemian fabrics resonate with the newly dried leather shoes and spices in the souks.",
    storyAr: "في أجواء يعلوها صوت عجلات العربات المسرعة، وتُهيمن على وقعها الأحاديث المتعالية، وارتطام الأجزاء المعدنية ببعضها، وأنين الجِمال المُحَمَّلة بالخيرات. توجد عليها أكوام من خلاصات النباتات ذات الألوان البديعة. وبعدها، تنعطف العربة بقوةٍ لتتبختر فوق أبسطة منسوجة ببراعة، فتخطف بذلك الأنظار إلى هيبتها، وتجمع الراغبين في نيل ما بها.",
    notesEn: ["Sage", "Leather", "Cardamom", "Cinnamon", "Blackberry", "Rose", "Port", "Myrrh", "Violet"],
    notesAr: ["المريمية", "الجلود", "الهيل", "القرفة", "التوت الأسود", "الورد", "نبيذ البورت", "عشبة المُر", "البنفسج"],
    characteristicsEn: ["Floral", "Rich", "Woody"],
    characteristicsAr: ["زهري", "غني", "خشبي"],
    images: [
      { size: "100ml", file: "/products/SPICE TRADER/100ml-Spice-Trader.jpg" },
      { size: "30ml", file: "/products/SPICE TRADER/30ml-Spice-Trader.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "sunkissed",
    folderName: "SUNKISSED",
    nameEn: "Sunkissed",
    nameAr: "صن كيسد",
    storyEn: "Boldly curious with tangled wet hair huddling together in a summer glow. A hint of a crush glints through fruity lips as the game of truth or dare takes center stage. Gathered in seclusion away from supervision, rebellion reaches out its hand with a kiss, creating minted memories never to be forgotten, forever young.",
    storyAr: "فضولي وجريء مع شعر رطب متشابك يتأنق في إطلالة صيفية مشرقة. لحظات من الافتتان بشفاه جذابة تدعو إلى البوح بالحقيقة أو الإقدام على فعل جسور تحت الأضواء. وفي منأى بعيد عن الأنظار، يُحطم القيود بقبلة يطبعها على يدها، ليترك بخلدها ذكرى لا تُنسى تمنحهما الشباب السرمدي.",
    notesEn: ["Orange Oil Bitter", "Sweet Basil", "Mandarin", "Jasmine", "Lime", "Juniper Berries", "Peppermint", "Spearmint"],
    notesAr: ["زيت البرتقال المر", "الريحان الحلو", "اليوسفي", "الياسمين", "الليمون", "توت العرعر", "النعناع", "النعناع المدبب"],
    characteristicsEn: ["Bright", "Citrus", "Minty"],
    characteristicsAr: ["قوي", "حمضي", "برائحة النعناع"],
    images: [
      { size: "100ml", file: "/products/SUNKISSED/100ml-Sunkissed.jpg" },
      { size: "30ml", file: "/products/SUNKISSED/30ml-Sunkissed.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "white-tea",
    folderName: "WHITE TEA",
    nameEn: "White Tea",
    nameAr: "الشاي الأبيض",
    storyEn: "All perception points to the focus of a Camellia bud just about to blossom. A clarity of delicate freshness and suppleness of beauty. Orchestrated growth had led to this moment, when the power contained is most potent and pure, an offering and unfurling. Clear, simple, untarnished.",
    storyAr: "تدل الحواس على تركيز زهرة الكاميليا الرقيقة التي ستخرج لتوّها من برعمها. إنها أيقونة النضارة الناعمة والجمال الساحر. لقد استغرقت مراحل نمو مجيدة حتى تنبت زهرة هكذا؛ إنها قوة داخلية وليدة النقاء تتجلى للعيان متمايلة بين هذا وذاك. عطر صافٍ، وبسيط، ولا تشوبه شائبة.",
    notesEn: ["Green Leaf", "Rose", "Orris", "Apricot", "Jasmine", "White Tea Leaves", "Musk"],
    notesAr: ["الأوراق الخضراء", "الورد", "جذور السوسن", "المشمش", "الياسمين", "أوراق الشاي الأبيض", "المسك"],
    characteristicsEn: ["Floral", "Green", "Musky"],
    characteristicsAr: ["زهري", "نباتي", "مسكي"],
    images: [
      { size: "100ml", file: "/products/WHITE TEA/100ml-White-Tea.jpg" },
      { size: "30ml", file: "/products/WHITE TEA/30ml-White-Tea.jpg" },
    ],
    type: "fragrance",
  },
  {
    id: "aromax",
    folderName: "AROMAX",
    nameEn: "Aromax Oil Diffuser",
    nameAr: "جهاز آروماكس لنشر الزيوت العطرية",
    storyEn: "The Aromax essential oil diffuser is the result of nature and technology combined. Stylish and beautiful, the Aromax aroma diffuser is perfect for scenting your home with essential oils. The anodized aluminum housing comes in four colors ready to complement any interior. With a whisper silent nebulizer and adjustable fragrance output, the Aromax home diffuser will keep your space smelling great.",
    storyAr: "يجمع جهاز آروماكس الأساسي لنشر الزيوت العطرية في تصميمه ما بين الطبيعة والتكنولوجيا في آنٍ واحدٍ. يُعَد جهاز آروماكس الأنيق والجميل لنشر العطور مثاليًا من أجل تعطير منزلك بالزيوت الأساسية. يأتي هيكل الألومنيوم المؤكسد بأربعة ألوان جاهزة لكي تنسّقه مع أي ديكور داخلي. بفضل الرذاذة الخافتة ومزية نثر العطر القابلة للتعديل، سيحافظ جهاز آروماكس المنزلي لنشر العطور على رائحة مكانك رائعة.",
    notesEn: [],
    notesAr: [],
    characteristicsEn: ["Adjustable scent output", "Whisper silent", "4 beautiful colors", "10,000 ft³ coverage"],
    characteristicsAr: ["كمية عطر قابلة للضبط", "صوت خافت", "4 ألوان جميلة", "تغطية 10000 قدم مكعبة"],
    images: [
      { size: "Black", file: "/products/AROMAX/Aromax-Black-01.jpg" },
      { size: "Gold", file: "/products/AROMAX/Aromax-Gold-01.jpg" },
      { size: "Silver", file: "/products/AROMAX/Aromax-Silver-01.jpg" },
      { size: "Red", file: "/products/AROMAX/Red-Aromax.jpg" },
    ],
    type: "diffuser",
  },
];

export const fragrances = products.filter((p) => p.type === "fragrance");
export const diffuserProducts = products.filter((p) => p.type === "diffuser");
