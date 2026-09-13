const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const seed = {
  // Bump when content below changes: the API refreshes content on start and keeps appointments/messages
  version: 2,

  settings: {
    clinicName: "Medika Klinika",
    phone: "(+99412) 555 55 55",
    phoneRaw: "+994125555555",
    whatsapp: "994505555555",
    email: "info@medika.az",
    addresses: ["Azadlıq pr. 100, Bakı, Azərbaycan", "Nizami küç. 25, Bakı, Azərbaycan"],
    workingHours: "Hər gün 08:00 – 22:00",
    socials: { facebook: "https://facebook.com", instagram: "https://instagram.com" },
  },

  about: {
    intro: [
      "Medika Klinika 2010-cu ildən bəri Bakıda müasir tibbi avadanlıqlar və təcrübəli həkim heyəti ilə pasiyentlərə yüksək keyfiyyətli diaqnostika və müalicə xidmətləri göstərir.",
      "Məqsədimiz hər bir pasiyentə fərdi yanaşma, şəffaf qiymət siyasəti və rahat xidmət təqdim etməkdir. Onlayn qeydiyyat sistemi ilə növbə gözləmədən istədiyiniz həkimin qəbuluna yazıla bilərsiniz.",
    ],
    highlights: ["Beynəlxalq akkreditasiya", "3 Tesla MRT aparatı", "24/7 təcili yardım", "Sığorta ilə xidmət", "Rus, ingilis, türk dillərində xidmət", "Elektron tibbi kart"],
    stats: [
      { value: 15, suffix: "+", label: "il təcrübə" },
      { value: 120, suffix: "+", label: "peşəkar həkim" },
      { value: 50000, suffix: "+", label: "məmnun pasiyent" },
      { value: 98, suffix: "%", label: "tövsiyə edənlər" },
    ],
    features: [
      { icon: "award", title: "Təcrübəli həkimlər", text: "Həkimlərimizin əksəriyyəti xaricdə təhsil almış və 10 ildən çox təcrübəyə malikdir." },
      { icon: "scan", title: "Müasir avadanlıq", text: "MRT, KT, rəqəmsal rentgen və ekspert səviyyəli USM aparatları." },
      { icon: "clock", title: "Növbəsiz qəbul", text: "Onlayn qeydiyyat ilə təyin olunmuş vaxtda gözləmədən qəbul olunun." },
      { icon: "shield", title: "Sığorta ilə xidmət", text: "Aparıcı sığorta şirkətləri ilə birbaşa əməkdaşlıq edirik." },
    ],
    values: [
      { icon: "heart", title: "Qayğı", text: "Hər pasiyentə ailə üzvümüz kimi yanaşırıq." },
      { icon: "sparkle", title: "Keyfiyyət", text: "Beynəlxalq protokollara uyğun diaqnostika və müalicə." },
      { icon: "users", title: "Komanda işi", text: "Mürəkkəb hallarda həkimlərimiz konsilium şəklində qərar verir." },
      { icon: "wallet", title: "Şəffaflıq", text: "Bütün qiymətlər əvvəlcədən bəllidir, gizli ödəniş yoxdur." },
    ],
    steps: [
      { icon: "doctor", title: "Həkimi seçin", text: "Şöbə və ya ixtisas üzrə sizə uyğun həkimi tapın." },
      { icon: "calendar", title: "Vaxtı təyin edin", text: "Onlayn formada rahat tarix və saatı qeyd edin." },
      { icon: "phone", title: "Təsdiq zəngi", text: "Operatorumuz 15 dəqiqə ərzində sizinlə əlaqə saxlayır." },
      { icon: "heart", title: "Qəbula gəlin", text: "Təyin olunmuş vaxtda növbəsiz qəbul olunun." },
    ],
    timeline: [
      { year: "2010", title: "Klinikanın açılışı", text: "3 şöbə və 12 həkimlə fəaliyyətə başladıq." },
      { year: "2014", title: "Diaqnostika mərkəzi", text: "KT və rəqəmsal rentgen kabinetləri istifadəyə verildi." },
      { year: "2018", title: "İkinci filial", text: "Nizami küçəsində yeni filialımız açıldı." },
      { year: "2022", title: "Beynəlxalq akkreditasiya", text: "Keyfiyyət standartlarına uyğunluq sertifikatı alındı." },
      { year: "2026", title: "3 Tesla MRT", text: "Regionda ən müasir MRT aparatlarından biri quraşdırıldı." },
    ],
    schedule: [
      { day: "Bazar ertəsi – Cümə", hours: "08:00 – 22:00" },
      { day: "Şənbə", hours: "09:00 – 20:00" },
      { day: "Bazar", hours: "10:00 – 18:00" },
      { day: "Təcili yardım", hours: "24/7" },
    ],
  },

  slides: [
    { id: 1, title: "Kardiologiya", subtitle: "Ürəyiniz etibarlı əllərdə", image: img("1638202993928-7267aad84c31"), departmentSlug: "kardiologiya" },
    { id: 2, title: "Stomatologiya", subtitle: "Sağlam və gözəl təbəssüm", image: img("1606811971618-4486d14f3f99"), departmentSlug: "stomatologiya" },
    { id: 3, title: "Cərrahiyyə", subtitle: "Müasir əməliyyat texnologiyaları", image: img("1581595220892-b0739db3ba8c"), departmentSlug: "cerrahiyye" },
    { id: 4, title: "Laboratoriya", subtitle: "Dəqiq və sürətli analizlər", image: img("1576671081837-49000212a370"), departmentSlug: "laboratoriya" },
    { id: 5, title: "Radiologiya", subtitle: "Yüksək dəqiqlikli diaqnostika", image: img("1666214280557-f1b5022eb634"), departmentSlug: "radiologiya" },
  ],

  services: [
    {
      id: 1, slug: "hekim-qebulu", title: "Həkim qəbulu", icon: "doctor", priceFrom: 30, image: img("1576089172869-4f5f6f315620"),
      description: "Təcrübəli mütəxəssislərin konsultasiyası",
      details: ["Bütün ixtisaslar üzrə həkim konsultasiyası: ilkin müayinə, diaqnozun qoyulması və müalicə planının hazırlanması.", "Qəbuldan sonra elektron tibbi kartınıza bütün təyinatlar əlavə olunur."],
      features: ["İlkin müayinə", "Anamnezin toplanması", "Müalicə planı", "Təkrar qəbul endirimi", "Elektron resept", "Nəticələrin izahı"],
      departmentSlugs: ["terapiya", "kardiologiya", "nevrologiya"],
    },
    {
      id: 2, slug: "laborator-analizler", title: "Analizlər", icon: "lab", priceFrom: 5, image: img("1579154204601-01588f351e67"),
      description: "Bütün növ laborator müayinələr",
      details: ["Tam avtomatlaşdırılmış laboratoriyamızda 1000-dən çox analiz növü aparılır.", "Nəticələr ən qısa zamanda elektron poçtunuza və ya WhatsApp-a göndərilir."],
      features: ["Ümumi qan analizi", "Biokimyəvi analizlər", "Hormonlar", "Vitaminlər", "İnfeksiyalar", "Genetik testlər"],
      departmentSlugs: ["laboratoriya"],
    },
    {
      id: 3, slug: "diaqnostika", title: "Diaqnostika", icon: "scan", priceFrom: 25, image: img("1666214280557-f1b5022eb634"),
      description: "USM, MRT, KT və rentgen",
      details: ["3 Tesla MRT, 128 kəsikli KT və rəqəmsal rentgen aparatları ilə dəqiq diaqnostika.", "Müayinə nəticələri radioloq tərəfindən eyni gün şərh olunur."],
      features: ["MRT", "Kompüter tomoqrafiya", "Ultrasəs müayinəsi", "Rəqəmsal rentgen", "Mamoqrafiya", "Doppleroqrafiya"],
      departmentSlugs: ["radiologiya"],
    },
    {
      id: 4, slug: "check-up", title: "Check-up", icon: "heart", priceFrom: 99, image: img("1576091160399-112ba8d25d1d"),
      description: "Kompleks sağlamlıq proqramları",
      details: ["Bir gün ərzində orqanizmin tam müayinəsi — analizlər, diaqnostika və həkim konsultasiyaları bir paketdə.", "Yaş və cinsə uyğun hazırlanmış proqramlar mövcuddur."],
      features: ["Bir gündə tam müayinə", "Fərdi koordinator", "Yekun həkim rəyi", "Səhər yeməyi", "Nəticələr bir qovluqda", "30%-ə qədər qənaət"],
      departmentSlugs: ["terapiya", "kardiologiya", "laboratoriya"],
    },
    {
      id: 5, slug: "eve-cagiris", title: "Evə çağırış", icon: "ambulance", priceFrom: 50,
      image: img("1584515933487-779824d29309"),
      description: "Həkimin evə çağırılması",
      details: ["Hərəkət imkanı məhdud pasiyentlər üçün həkim və tibb bacısı evə gəlir.", "Evdə analiz götürülməsi, sistem və iynə xidmətləri."],
      features: ["Həkim müayinəsi", "Evdə analiz", "EKQ", "Sistem qoyulması", "Yaşlılara qulluq", "Bakı daxilində 60 dəqiqə"],
      departmentSlugs: ["terapiya", "pediatriya"],
    },
    {
      id: 6, slug: "stomatoloji-xidmetler", title: "Stomatologiya", icon: "tooth", priceFrom: 20, image: img("1629909613654-28e377c37b09"),
      description: "Müalicə, implant və estetika",
      details: ["Terapevtik, ortopedik, cərrahi və estetik stomatologiya bir məkanda.", "Rəqəmsal 3D skan və mikroskop altında kanal müalicəsi."],
      features: ["Kariyes müalicəsi", "İmplantasiya", "Breket sistemləri", "Dişlərin ağardılması", "Vinirlər", "Uşaq stomatologiyası"],
      departmentSlugs: ["stomatologiya"],
    },
    {
      id: 7, slug: "usaq-saglamligi", title: "Uşaq sağlamlığı", icon: "baby", priceFrom: 35, image: img("1584515933487-779824d29309"),
      description: "Pediatr müşahidəsi və peyvəndlər",
      details: ["Yenidoğulmuşdan 18 yaşa qədər uşaqların müşahidəsi və müalicəsi.", "Uşaqlar üçün xüsusi dizayn olunmuş rahat gözləmə zonası."],
      features: ["Aylıq müşahidə", "Peyvənd təqvimi", "Məktəbə hazırlıq müayinəsi", "Allerqoloq", "Uşaq nevroloqu", "Loqoped"],
      departmentSlugs: ["pediatriya"],
    },
    {
      id: 8, slug: "onlayn-konsultasiya", title: "Onlayn konsultasiya", icon: "globe", priceFrom: 25, image: img("1576089172869-4f5f6f315620"),
      description: "Video zəng ilə həkim məsləhəti",
      details: ["Evdən çıxmadan video zəng vasitəsilə həkimlə məsləhətləşin.", "Analiz nəticələrinin şərhi və ikinci rəy xidməti."],
      features: ["Video konsultasiya", "Analizlərin şərhi", "İkinci rəy", "Elektron resept", "Xaricdəki pasiyentlər üçün", "Görüş qeydi"],
      departmentSlugs: ["terapiya", "kardiologiya", "nevrologiya"],
    },
  ],

  departments: [
    {
      id: 1, slug: "kardiologiya", name: "Kardiologiya", tagline: "Ürəyiniz etibarlı əllərdə", image: img("1638202993928-7267aad84c31", 1000),
      description: "Ürək-damar xəstəliklərinin diaqnostikası, müalicəsi və profilaktikası. EKQ, EXO-KQ, Holter monitorinq və stress testləri.",
      services: ["EKQ", "Exokardioqrafiya", "Holter monitorinq", "Stress test", "Arterial təzyiqin monitorinqi", "Aritmiyanın müalicəsi"],
      prices: [{ name: "Kardioloq qəbulu", price: "40 AZN" }, { name: "EKQ", price: "15 AZN" }, { name: "EXO-KQ", price: "50 AZN" }, { name: "Holter (24 saat)", price: "70 AZN" }],
    },
    {
      id: 2, slug: "stomatologiya", name: "Stomatologiya", tagline: "Sağlam təbəssüm", image: img("1629909613654-28e377c37b09"),
      description: "Terapevtik, ortopedik və estetik stomatologiya, implantasiya və ortodontiya.",
      services: ["Kariyes müalicəsi", "Kanal müalicəsi", "İmplantasiya", "Breket sistemləri", "Ağardılma", "Peşəkar gigiyena"],
      prices: [{ name: "Stomatoloq müayinəsi", price: "20 AZN" }, { name: "Plomb", price: "60 AZN-dən" }, { name: "İmplant", price: "650 AZN-dən" }, { name: "Ağardılma", price: "250 AZN" }],
    },
    {
      id: 3, slug: "cerrahiyye", name: "Cərrahiyyə", tagline: "Müasir əməliyyatlar", image: img("1551190822-a9333d879b1f"),
      description: "Ümumi və laparoskopik cərrahiyyə, minimal invaziv əməliyyatlar və qısa reabilitasiya müddəti.",
      services: ["Laparoskopik əməliyyatlar", "Yırtıq əməliyyatı", "Öd kisəsinin götürülməsi", "Appendektomiya", "Kiçik cərrahi müdaxilələr", "Postoperativ qulluq"],
      prices: [{ name: "Cərrah qəbulu", price: "50 AZN" }, { name: "Laparoskopik xolesistektomiya", price: "1800 AZN-dən" }, { name: "Yırtıq əməliyyatı", price: "1200 AZN-dən" }],
    },
    {
      id: 4, slug: "radiologiya", name: "Radiologiya", tagline: "Dəqiq diaqnostika", image: img("1666214280557-f1b5022eb634"),
      description: "MRT, KT, rentgen və ultrasəs müayinələri eyni gün nəticə ilə.",
      services: ["3 Tesla MRT", "128 kəsikli KT", "Rəqəmsal rentgen", "USM", "Mamoqrafiya", "Densitometriya"],
      prices: [{ name: "MRT (bir nahiyə)", price: "120 AZN" }, { name: "KT", price: "90 AZN" }, { name: "Rentgen", price: "25 AZN" }, { name: "Qarın boşluğu USM", price: "40 AZN" }],
    },
    {
      id: 5, slug: "laboratoriya", name: "Laboratoriya", tagline: "Sürətli nəticələr", image: img("1579154204601-01588f351e67"),
      description: "Biokimyəvi, hormonal, immunoloji və genetik analizlər tam avtomatlaşdırılmış avadanlıqla.",
      services: ["Ümumi qan analizi", "Biokimya", "Hormonlar", "Vitaminlər", "PCR testləri", "Allergiya panelləri"],
      prices: [{ name: "Ümumi qan analizi", price: "8 AZN" }, { name: "Qlükoza", price: "5 AZN" }, { name: "TSH", price: "15 AZN" }, { name: "Vitamin D", price: "35 AZN" }],
    },
    {
      id: 6, slug: "nevrologiya", name: "Nevrologiya", tagline: "Sinir sisteminin sağlamlığı", image: img("1530497610245-94d3c16cda28"),
      description: "Baş ağrıları, yuxu pozuntuları və sinir sistemi xəstəliklərinin diaqnostikası və müalicəsi.",
      services: ["Miqrenin müalicəsi", "EEQ", "ENMQ", "İnsult sonrası reabilitasiya", "Yuxu pozuntuları", "Bel və boyun ağrıları"],
      prices: [{ name: "Nevroloq qəbulu", price: "45 AZN" }, { name: "EEQ", price: "60 AZN" }, { name: "ENMQ", price: "80 AZN" }],
    },
    {
      id: 7, slug: "pediatriya", name: "Pediatriya", tagline: "Uşaqlarınızın sağlamlığı", image: img("1584515933487-779824d29309"),
      description: "Yenidoğulmuşlardan yeniyetmələrə qədər uşaqların müayinəsi, müalicəsi və peyvəndlənməsi.",
      services: ["Aylıq müşahidə", "Peyvəndlər", "Uşaq allerqoloqu", "Neonatologiya", "Məktəbə hazırlıq", "Evə çağırış"],
      prices: [{ name: "Pediatr qəbulu", price: "35 AZN" }, { name: "Peyvənd (preparatsız)", price: "10 AZN" }, { name: "Evə çağırış", price: "60 AZN" }],
    },
    {
      id: 8, slug: "terapiya", name: "Terapiya", tagline: "Hər şey müayinədən başlayır", image: img("1576091160399-112ba8d25d1d"),
      description: "Daxili xəstəliklərin diaqnostikası və kompleks müalicəsi, check-up proqramlarının koordinasiyası.",
      services: ["Ümumi müayinə", "Qastroenterologiya", "Endokrinologiya", "Pulmonologiya", "Check-up", "Tibbi arayışlar"],
      prices: [{ name: "Terapevt qəbulu", price: "35 AZN" }, { name: "Tibbi arayış", price: "25 AZN" }, { name: "Təkrar qəbul", price: "20 AZN" }],
    },
    {
      id: 9, slug: "reanimasiya", name: "Reanimasiya", tagline: "24/7 intensiv terapiya", image: img("1516549655169-df83a0774514"),
      description: "Müasir avadanlıqlarla təchiz olunmuş 12 çarpayılıq intensiv terapiya şöbəsi.",
      services: ["İntensiv terapiya", "Süni tənəffüs", "Monitorinq", "Postoperativ nəzarət", "Təcili yardım", "Detoksikasiya"],
      prices: [{ name: "İntensiv terapiya (1 gün)", price: "250 AZN" }, { name: "Təcili yardım çağırışı", price: "80 AZN" }],
    },
    {
      id: 10, slug: "ginekologiya", name: "Ginekologiya", tagline: "Qadın sağlamlığı", image: img("1631217868264-e5b90bb7e133"),
      description: "Qadın sağlamlığı, hamiləliyin idarə olunması və profilaktik müayinələr.",
      services: ["Hamiləliyin idarə olunması", "Ginekoloji USM", "Kolposkopiya", "Sonsuzluğun müalicəsi", "Profilaktik müayinə", "Menopauza"],
      prices: [{ name: "Ginekoloq qəbulu", price: "40 AZN" }, { name: "Ginekoloji USM", price: "40 AZN" }, { name: "Kolposkopiya", price: "50 AZN" }],
    },
  ],

  doctors: [
    { id: 1, name: "Dr. Elvin Məmmədov", specialty: "Kardioloq", departmentSlug: "kardiologiya", experience: 15, price: "40 AZN", featured: true, rating: 4.9, reviewsCount: 214, languages: ["AZ", "RU", "EN"], photo: img("1612349317150-e413f6a5b16d", 600), bio: "Ürək-damar xəstəlikləri üzrə 15 illik təcrübəyə malik mütəxəssis. Aritmiya və arterial hipertenziyanın müalicəsi üzrə ixtisaslaşıb.", education: "Azərbaycan Tibb Universiteti; Ankara Universiteti (rezidentura)", schedule: "B.e – Cümə, 09:00 – 17:00", achievements: ["Avropa Kardiologiya Cəmiyyətinin üzvü", "3000+ exokardioqrafiya", "20+ elmi məqalə", "Ankara Universitetində rezidentura"] },
    { id: 2, name: "Dr. Leyla Həsənova", specialty: "Terapevt", departmentSlug: "terapiya", experience: 20, price: "35 AZN", featured: true, rating: 4.8, reviewsCount: 321, languages: ["AZ", "RU"], photo: img("1559839734-2b71ea197ec2", 600), bio: "Daxili xəstəliklər üzrə ali kateqoriyalı həkim. Check-up proqramlarının rəhbəri.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Şənbə, 10:00 – 16:00", achievements: ["Ali kateqoriyalı həkim", "Check-up proqramlarının müəllifi", "Əməkdar həkim"] },
    { id: 3, name: "Dr. Rəşad Quliyev", specialty: "Cərrah", departmentSlug: "cerrahiyye", experience: 12, price: "50 AZN", featured: true, rating: 4.9, reviewsCount: 178, languages: ["AZ", "RU", "TR"], photo: img("1622253692010-333f2da6031d", 600), bio: "Laparoskopik əməliyyatlar üzrə mütəxəssis, 2000-dən çox uğurlu əməliyyat.", education: "Moskva Dövlət Tibb Universiteti", schedule: "B.e – Cümə, 08:00 – 15:00", achievements: ["2000+ laparoskopik əməliyyat", "Almaniyada təcrübə proqramı", "Minimal invaziv cərrahiyyə sertifikatı"] },
    { id: 4, name: "Dr. Tural Əliyev", specialty: "Stomatoloq", departmentSlug: "stomatologiya", experience: 9, price: "30 AZN", featured: true, rating: 4.7, reviewsCount: 156, languages: ["AZ", "EN", "TR"], photo: img("1537368910025-700350fe46c7", 600), bio: "Estetik stomatologiya və implantasiya üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti; İstanbul Universiteti", schedule: "Ç.a – Şənbə, 11:00 – 19:00", achievements: ["Straumann implant sertifikatı", "Rəqəmsal təbəssüm dizaynı", "800+ implant"] },
    { id: 5, name: "Dr. Nigar Rzayeva", specialty: "Pediatr", departmentSlug: "pediatriya", experience: 11, price: "35 AZN", featured: true, rating: 5.0, reviewsCount: 402, languages: ["AZ", "RU", "EN"], photo: img("1594824476967-48c8b964273f", 600), bio: "Uşaq xəstəlikləri və immunizasiya üzrə mütəxəssis. Valideynlər üçün sağlamlıq məktəbinin aparıcısı.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Cümə, 09:00 – 18:00", achievements: ["Valideyn məktəbinin müəllifi", "Uşaq allerqologiyası kursu", "İlin pediatrı 2024"] },
    { id: 6, name: "Dr. Kamran Nəbiyev", specialty: "Nevroloq", departmentSlug: "nevrologiya", experience: 18, price: "45 AZN", featured: true, rating: 4.8, reviewsCount: 190, languages: ["AZ", "RU"], photo: img("1582750433449-648ed127bb54", 600), bio: "Baş ağrıları, epilepsiya və insult sonrası reabilitasiya.", education: "Sankt-Peterburq Tibb Akademiyası", schedule: "B.e – Cümə, 10:00 – 17:00", achievements: ["Tibb elmləri namizədi", "Miqren mərkəzinin rəhbəri", "Beynəlxalq konfrans məruzəçisi"] },
    { id: 7, name: "Dr. Aynur Babayeva", specialty: "Ginekoloq", departmentSlug: "ginekologiya", experience: 14, price: "40 AZN", featured: true, rating: 4.9, reviewsCount: 267, languages: ["AZ", "RU", "EN"], photo: img("1651008376811-b90baee60c1f", 600), bio: "Hamiləliyin idarə olunması və qadın sağlamlığı üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Şənbə, 09:00 – 15:00", achievements: ["1500+ hamiləliyin idarə olunması", "Kolposkopiya sertifikatı", "Reproduktologiya kursu"] },
    { id: 8, name: "Dr. Səbinə İsmayılova", specialty: "Radioloq", departmentSlug: "radiologiya", experience: 8, price: "30 AZN", featured: true, rating: 4.7, reviewsCount: 88, languages: ["AZ", "TR", "EN"], photo: img("1614608682850-e0d6ed316d47", 600), bio: "MRT və KT müayinələrinin interpretasiyası.", education: "Hacettepe Universiteti", schedule: "Hər gün, 08:00 – 20:00", achievements: ["Neyroradiologiya ixtisası", "ESR üzvü"] },
    { id: 9, name: "Dr. Mirvari Cəfərova", specialty: "Laborant-həkim", departmentSlug: "laboratoriya", experience: 22, price: "—", featured: false, rating: 4.8, reviewsCount: 64, languages: ["AZ", "RU"], photo: img("1527613426441-4da17471b66d", 600), bio: "Klinik laborator diaqnostika üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "Hər gün, 07:30 – 14:00", achievements: ["Laboratoriya rəhbəri", "ISO 15189 auditoru"] },
    { id: 10, name: "Dr. Zərifə Hüseynova", specialty: "Kardioloq", departmentSlug: "kardiologiya", experience: 25, price: "50 AZN", featured: false, rating: 5.0, reviewsCount: 340, languages: ["AZ", "RU"], photo: img("1631217868264-e5b90bb7e133", 600), bio: "Aritmiya və ürək çatışmazlığı üzrə professor.", education: "Azərbaycan Tibb Universiteti, t.e.d.", schedule: "Ç.a, Cümə, 10:00 – 14:00", achievements: ["Tibb elmləri doktoru, professor", "50+ elmi əsər", "Kardiologiya kafedrasının müdiri"] },
    { id: 11, name: "Dr. Fərid Kərimov", specialty: "Ümumi cərrah", departmentSlug: "cerrahiyye", experience: 10, price: "45 AZN", featured: false, rating: 4.6, reviewsCount: 97, languages: ["AZ", "EN"], photo: img("1618498082410-b4aa22193b38", 600), bio: "Yırtıq və endokrin cərrahiyyəsi üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Cümə, 12:00 – 18:00", achievements: ["Endokrin cərrahiyyə kursu", "700+ əməliyyat"] },
    { id: 12, name: "Dr. Günay Abbasova", specialty: "Endokrinoloq", departmentSlug: "terapiya", experience: 13, price: "40 AZN", featured: true, rating: 4.9, reviewsCount: 233, languages: ["AZ", "RU", "EN"], photo: img("1643297654416-05795d62e39c", 600), bio: "Diabet, qalxanabənzər vəzi və hormonal pozuntuların müalicəsi.", education: "Azərbaycan Tibb Universiteti; Vyana Tibb Universiteti", schedule: "B.e – Cümə, 09:00 – 16:00", achievements: ["Diabet məktəbinin rəhbəri", "Vyanada ixtisasartırma"] },
    { id: 13, name: "Dr. Orxan Səfərov", specialty: "Ortodont", departmentSlug: "stomatologiya", experience: 7, price: "30 AZN", featured: false, rating: 4.8, reviewsCount: 120, languages: ["AZ", "RU"], photo: img("1622902046580-2b47f47f5471", 600), bio: "Breket və elaynerlərlə dişlərin düzəldilməsi.", education: "Azərbaycan Tibb Universiteti", schedule: "Ç.a – Şənbə, 10:00 – 18:00", achievements: ["Invisalign sertifikatı", "400+ ortodontik müalicə"] },
    { id: 14, name: "Dr. Samir Vəliyev", specialty: "Reanimatoloq", departmentSlug: "reanimasiya", experience: 16, price: "—", featured: false, rating: 4.9, reviewsCount: 45, languages: ["AZ", "RU"], photo: img("1666887360742-974c8fce8e6b", 600), bio: "İntensiv terapiya və anesteziologiya üzrə mütəxəssis.", education: "Moskva Dövlət Tibb Universiteti", schedule: "Növbə qrafiki üzrə, 24/7", achievements: ["Reanimasiya şöbəsinin rəhbəri", "ACLS təlimçisi"] },
    { id: 15, name: "Dr. Lalə Qasımova", specialty: "Neonatoloq", departmentSlug: "pediatriya", experience: 9, price: "40 AZN", featured: false, rating: 4.9, reviewsCount: 110, languages: ["AZ", "EN"], photo: img("1591604021695-0c69b7c05981", 600), bio: "Yenidoğulmuşların müşahidəsi və qidalanma məsləhətləri.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Cümə, 09:00 – 15:00", achievements: ["Ana südü ilə qidalanma məsləhətçisi", "Neonatal reanimasiya kursu"] },
    { id: 16, name: "Dr. Vüqar Rəhimov", specialty: "Nevroloq", departmentSlug: "nevrologiya", experience: 30, price: "60 AZN", featured: false, rating: 5.0, reviewsCount: 289, languages: ["AZ", "RU", "EN"], photo: img("1581056771107-24ca5f033842", 600), bio: "Parkinson xəstəliyi və dağınıq skleroz üzrə professor.", education: "Sankt-Peterburq Tibb Akademiyası, t.e.d.", schedule: "Ç.a, Cümə axşamı, 11:00 – 15:00", achievements: ["Professor", "Nevrologiya assosiasiyasının vitse-prezidenti", "100+ elmi əsər"] },
    { id: 17, name: "Dr. Arzu Mustafayeva", specialty: "Klinik farmakoloq", departmentSlug: "laboratoriya", experience: 12, price: "30 AZN", featured: false, rating: 4.7, reviewsCount: 52, languages: ["AZ", "RU"], photo: img("1580281657527-47f249e8f4df", 600), bio: "Dərman qarşılıqlı təsirləri və fərdi dozalanma üzrə məsləhətlər.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Cümə, 10:00 – 14:00", achievements: ["Farmakogenetika kursu", "Dərman təhlükəsizliyi komissiyasının üzvü"] },
  ],

  packages: [
    { id: 1, name: "Baza check-up", price: 99, oldPrice: 145, popular: false, features: ["Terapevt konsultasiyası", "Ümumi qan analizi", "Qlükoza və xolesterin", "Ümumi sidik analizi", "EKQ"] },
    { id: 2, name: "Qadın sağlamlığı", price: 189, oldPrice: 270, popular: true, features: ["Ginekoloq konsultasiyası", "Ginekoloji USM", "Döş USM", "Hormon paneli", "Vitamin D və B12", "Terapevt yekun rəyi"] },
    { id: 3, name: "Kişi sağlamlığı", price: 179, oldPrice: 250, popular: false, features: ["Uroloq konsultasiyası", "PSA testi", "Qarın boşluğu USM", "Biokimya paneli", "EKQ və kardioloq"] },
    { id: 4, name: "Premium check-up", price: 449, oldPrice: 640, popular: false, features: ["5 həkim konsultasiyası", "MRT (bir nahiyə)", "EXO-KQ və stress test", "60+ laborator göstərici", "Fərdi koordinator", "Səhər yeməyi"] },
  ],

  testimonials: [
    { id: 1, name: "Aysel Məmmədli", role: "Kardiologiya pasiyenti", rating: 5, doctorId: 1, text: "Dr. Elvin çox diqqətli və səbirli həkimdir. Bütün suallarıma ətraflı cavab verdi, müalicədən sonra özümü çox yaxşı hiss edirəm." },
    { id: 2, name: "Rauf Həsənov", role: "Cərrahiyyə pasiyenti", rating: 5, doctorId: 3, text: "Laparoskopik əməliyyatdan cəmi iki gün sonra evə getdim. Dr. Rəşada və bütün komandaya minnətdaram." },
    { id: 3, name: "Nərmin Əliyeva", role: "Uşağının anası", rating: 5, doctorId: 5, text: "Dr. Nigar uşaqlarla dil tapmağı çox yaxşı bacarır. Oğlum artıq həkimdən qorxmur!" },
    { id: 4, name: "Elşən Quliyev", role: "Stomatologiya pasiyenti", rating: 4, doctorId: 4, text: "İmplant prosesi gözlədiyimdən çox rahat keçdi. Qiymətlər də əvvəlcədən dəqiq deyildi." },
    { id: 5, name: "Səbinə Kərimova", role: "Check-up proqramı", rating: 5, doctorId: 2, text: "Bir gün ərzində bütün müayinələrdən keçdim, koordinator hər addımda yanımda idi. Çox rahat təşkil olunub." },
    { id: 6, name: "Tofiq Rzayev", role: "Nevrologiya pasiyenti", rating: 5, doctorId: 6, text: "İllərdir əziyyət çəkdiyim miqrenə nəhayət düzgün müalicə tapıldı. Təşəkkür edirəm!" },
    { id: 7, name: "Lamiyə Abbasova", role: "Ginekologiya pasiyenti", rating: 5, doctorId: 7, text: "Bütün hamiləlik dövrümü Dr. Aynur izlədi. Hər zaman əlçatan və qayğıkeş idi." },
    { id: 8, name: "Kənan Səfərli", role: "Onlayn qeydiyyat", rating: 5, doctorId: null, text: "Saytdan qeydiyyatdan keçdim, 10 dəqiqə sonra zəng etdilər. Heç növbə gözləmədim." },
  ],

  faqs: [
    { id: 1, category: "appointment", question: "Onlayn qeydiyyat necə işləyir?", answer: "Formada həkimi, tarixi və əlaqə nömrənizi qeyd edirsiniz. Operatorumuz 15 dəqiqə ərzində zəng edərək vaxtı təsdiqləyir." },
    { id: 2, category: "appointment", question: "Qəbulu ləğv etmək və ya vaxtını dəyişmək olarmı?", answer: "Bəli, qəbuldan ən azı 2 saat əvvəl zəng və ya WhatsApp vasitəsilə məlumat verməyiniz kifayətdir." },
    { id: 3, category: "general", question: "Sığorta ilə xidmət göstərirsinizmi?", answer: "Bəli, aparıcı sığorta şirkətlərinin əksəriyyəti ilə birbaşa əməkdaşlıq edirik. Sığorta kartınızı qəbul zamanı təqdim edin." },
    { id: 4, category: "general", question: "Ödənişi necə edə bilərəm?", answer: "Nağd, bank kartı və ya onlayn ödəniş üsullarından istifadə edə bilərsiniz. Hissə-hissə ödəniş imkanı da mövcuddur." },
    { id: 5, category: "laboratoriya", question: "Analiz nəticələri nə vaxt hazır olur?", answer: "Əksər analizlərin nəticəsi eyni gün, xüsusi testlər isə 2–5 iş günü ərzində hazır olur və elektron şəkildə göndərilir." },
    { id: 6, category: "laboratoriya", question: "Qan analizinə hazırlıq necə olmalıdır?", answer: "Əksər analizlər ac qarına, səhər saatlarında verilir. Son yeməkdən 8–12 saat keçməsi tövsiyə olunur." },
    { id: 7, category: "general", question: "Klinikada parkinq varmı?", answer: "Hər iki filialımızda pasiyentlər üçün pulsuz parkinq mövcuddur." },
    { id: 8, category: "kardiologiya", question: "Kardioloqa nə vaxt müraciət etmək lazımdır?", answer: "Döş qəfəsində ağrı, təngnəfəslik, ürək döyüntüsü və ya yüksək təzyiq hallarında gecikmədən müraciət edin." },
    { id: 9, category: "stomatologiya", question: "İmplant əməliyyatı ağrılıdırmı?", answer: "Əməliyyat yerli anesteziya altında aparılır və ağrısızdır. Sonrakı günlərdə yüngül narahatlıq ola bilər." },
    { id: 10, category: "pediatriya", question: "Peyvəndlər klinikada vurulurmu?", answer: "Bəli, milli peyvənd təqviminə uyğun bütün peyvəndlər pediatr müayinəsindən sonra vurulur." },
    { id: 11, category: "general", question: "Xarici dillərdə xidmət varmı?", answer: "Həkimlərimiz Azərbaycan, rus, ingilis və türk dillərində xidmət göstərir." },
    { id: 12, category: "appointment", question: "Qəbula nə gətirməliyəm?", answer: "Şəxsiyyət vəsiqəsi, sığorta kartı (varsa) və əvvəlki müayinə nəticələrinizi gətirməyiniz tövsiyə olunur." },
  ],

  partners: [
    { id: 1, name: "Sağlam Sığorta" },
    { id: 2, name: "Ulduz Sığorta" },
    { id: 3, name: "Etibar Sığorta" },
    { id: 4, name: "Mega Sığorta" },
    { id: 5, name: "Nur Sığorta" },
    { id: 6, name: "Qalxan Sığorta" },
    { id: 7, name: "Zəfər Sığorta" },
    { id: 8, name: "Həyat+ Sığorta" },
  ],

  news: [
    { id: 1, category: "Kampaniya", title: "Pulsuz ürək müayinəsi kampaniyası", date: "2026-09-01", image: img("1576091160399-112ba8d25d1d"), excerpt: "Sentyabr ayı ərzində 50 yaşdan yuxarı şəxslər üçün EKQ pulsuzdur.", content: ["Ürək-damar xəstəlikləri erkən aşkarlandıqda müalicəsi xeyli asanlaşır. Bu səbəbdən sentyabr ayı boyunca 50 yaşdan yuxarı bütün pasiyentlər üçün EKQ müayinəsi pulsuz aparılır.", "Kampaniyada iştirak üçün onlayn qeydiyyatdan keçmək və ya çağrı mərkəzinə zəng etmək kifayətdir. Müayinədən sonra kardioloq nəticələri şərh edəcək."] },
    { id: 2, category: "Yenilik", title: "Yeni 3 Tesla MRT aparatı istifadəyə verildi", date: "2026-08-20", image: img("1666214280557-f1b5022eb634"), excerpt: "3 Tesla gücündə yeni nəsil MRT ilə daha dəqiq və sürətli diaqnostika.", content: ["Radiologiya şöbəmiz 3 Tesla gücündə yeni nəsil MRT aparatı ilə təchiz olundu. Aparat müayinə müddətini 40% qısaldır və görüntü keyfiyyətini əhəmiyyətli dərəcədə artırır.", "Açıq dizaynı sayəsində qapalı məkan qorxusu olan pasiyentlər də müayinədən rahat keçə bilərlər."] },
    { id: 3, category: "Kampaniya", title: "Uşaqlar üçün məktəbəqədər check-up", date: "2026-08-10", image: img("1584515933487-779824d29309"), excerpt: "Məktəbə hazırlıq üçün kompleks müayinə paketində 20% endirim.", content: ["Yeni tədris ili ərəfəsində uşaqlar üçün kompleks müayinə paketi 20% endirimlə təklif olunur.", "Paketə pediatr, oftalmoloq, stomatoloq və loqoped müayinələri, həmçinin əsas laborator analizlər daxildir."] },
    { id: 4, category: "Yenilik", title: "Stomatologiya şöbəsi yeniləndi", date: "2026-07-28", image: img("1629909613654-28e377c37b09"), excerpt: "Rəqəmsal 3D skaner və mikroskopla təchiz olunmuş yeni kabinetlər.", content: ["Stomatologiya şöbəmizdə 4 yeni kabinet istifadəyə verildi. Kabinetlər rəqəmsal 3D intraoral skaner və stomatoloji mikroskopla təchiz olunub.", "Yeni texnologiyalar sayəsində protezlər və vinirlər daha qısa müddətdə və yüksək dəqiqliklə hazırlanır."] },
    { id: 5, category: "Məsləhət", title: "Yayda bədənin su balansını necə qorumalı?", date: "2026-07-15", image: img("1576089172869-4f5f6f315620"), excerpt: "İsti havalarda susuzluğun əlamətləri və qarşısının alınması üçün sadə tövsiyələr.", content: ["İsti havalarda orqanizm tərləmə ilə çoxlu maye itirir. Gün ərzində ən azı 2–2.5 litr su içmək tövsiyə olunur.", "Baş gicəllənməsi, quru dəri və tünd sidik susuzluğun ilk əlamətləridir. Belə hallarda kölgəyə keçin və tədricən su için."] },
    { id: 6, category: "Məsləhət", title: "Miqren: tetikleyiciləri tanıyın", date: "2026-06-30", image: img("1530497610245-94d3c16cda28"), excerpt: "Nevroloqumuz miqren tutmalarını azaltmaq üçün gündəlik vərdişlər haqqında danışır.", content: ["Yuxusuzluq, stress, bəzi qidalar və parlaq işıq miqren tutmalarını tetikleyə bilər.", "Baş ağrısı gündəliyi aparmaq fərdi tetikleyiciləri müəyyən etməyə və müalicəni düzgün planlaşdırmağa kömək edir."] },
    { id: 7, category: "Tədbir", title: "Valideynlər üçün pulsuz seminar", date: "2026-06-12", image: img("1591604021695-0c69b7c05981"), excerpt: "Uşaqlarda ilk yardım və immunizasiya mövzusunda açıq seminar keçiriləcək.", content: ["Pediatriya şöbəmizin həkimləri valideynlər üçün uşaqlarda ilk yardım və peyvəndlər mövzusunda pulsuz seminar keçirəcək.", "Seminar praktiki məşğələlərdən ibarətdir. İştirak üçün əvvəlcədən qeydiyyat tələb olunur."] },
    { id: 8, category: "Yenilik", title: "Onlayn konsultasiya xidməti başladı", date: "2026-05-25", image: img("1576089172869-4f5f6f315620"), excerpt: "Artıq həkimlərimizlə video zəng vasitəsilə məsləhətləşə bilərsiniz.", content: ["Xaricdə yaşayan və ya klinikaya gəlmək imkanı olmayan pasiyentlər üçün onlayn konsultasiya xidməti istifadəyə verildi.", "Konsultasiyadan sonra elektron resept və tövsiyələr e-poçtunuza göndərilir."] },
  ],

  appointments: [],
  messages: [],
};

export default seed;
