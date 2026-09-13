const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const seed = {
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

  slides: [
    { id: 1, title: "Kardiologiya", subtitle: "Ürəyiniz etibarlı əllərdə", image: img("1638202993928-7267aad84c31"), departmentSlug: "kardiologiya" },
    { id: 2, title: "Stomatologiya", subtitle: "Sağlam və gözəl təbəssüm", image: img("1606811971618-4486d14f3f99"), departmentSlug: "stomatologiya" },
    { id: 3, title: "Cərrahiyyə", subtitle: "Müasir əməliyyat texnologiyaları", image: img("1581595220892-b0739db3ba8c"), departmentSlug: "cerrahiyye" },
    { id: 4, title: "Laboratoriya", subtitle: "Dəqiq və sürətli analizlər", image: img("1576671081837-49000212a370"), departmentSlug: "laboratoriya" },
    { id: 5, title: "Radiologiya", subtitle: "Yüksək dəqiqlikli diaqnostika", image: img("1666214280557-f1b5022eb634"), departmentSlug: "radiologiya" },
  ],

  services: [
    { id: 1, title: "Həkim qəbulu", icon: "doctor", description: "Təcrübəli mütəxəssislərin konsultasiyası" },
    { id: 2, title: "Analizlər", icon: "lab", description: "Bütün növ laborator müayinələr" },
    { id: 3, title: "Diaqnostika", icon: "scan", description: "USM, MRT, KT və rentgen" },
    { id: 4, title: "Check-up", icon: "heart", description: "Kompleks sağlamlıq proqramları" },
    { id: 5, title: "Evə çağırış", icon: "ambulance", description: "Həkimin evə çağırılması" },
  ],

  departments: [
    { id: 1, slug: "kardiologiya", name: "Kardiologiya", tagline: "Ürəyiniz etibarlı əllərdə", image: img("1638202993928-7267aad84c31", 1000), description: "Ürək-damar xəstəliklərinin diaqnostikası, müalicəsi və profilaktikası. EKQ, EXO-KQ, Holter monitorinq." },
    { id: 2, slug: "stomatologiya", name: "Stomatologiya", tagline: "Sağlam təbəssüm", image: img("1629909613654-28e377c37b09"), description: "Terapevtik, ortopedik və estetik stomatologiya, implantasiya və ortodontiya." },
    { id: 3, slug: "cerrahiyye", name: "Cərrahiyyə", tagline: "Müasir əməliyyatlar", image: img("1551190822-a9333d879b1f"), description: "Ümumi və laparoskopik cərrahiyyə, minimal invaziv əməliyyatlar." },
    { id: 4, slug: "radiologiya", name: "Radiologiya", tagline: "Dəqiq diaqnostika", image: img("1666214280557-f1b5022eb634"), description: "MRT, KT, rentgen və ultrasəs müayinələri." },
    { id: 5, slug: "laboratoriya", name: "Laboratoriya", tagline: "Sürətli nəticələr", image: img("1527613426441-4da17471b66d"), description: "Biokimyəvi, hormonal, immunoloji və genetik analizlər." },
    { id: 6, slug: "nevrologiya", name: "Nevrologiya", tagline: "Sinir sisteminin sağlamlığı", image: img("1530497610245-94d3c16cda28"), description: "Baş ağrıları, yuxu pozuntuları və sinir sistemi xəstəliklərinin müalicəsi." },
    { id: 7, slug: "pediatriya", name: "Pediatriya", tagline: "Uşaqlarınızın sağlamlığı", image: img("1584515933487-779824d29309"), description: "Yenidoğulmuşlardan yeniyetmələrə qədər uşaqların müayinəsi və müalicəsi." },
    { id: 8, slug: "terapiya", name: "Terapiya", tagline: "Hər şey müayinədən başlayır", image: img("1576091160399-112ba8d25d1d"), description: "Daxili xəstəliklərin diaqnostikası və kompleks müalicəsi." },
    { id: 9, slug: "reanimasiya", name: "Reanimasiya", tagline: "24/7 intensiv terapiya", image: img("1516549655169-df83a0774514"), description: "Müasir avadanlıqlarla təchiz olunmuş intensiv terapiya şöbəsi." },
    { id: 10, slug: "ginekologiya", name: "Ginekologiya", tagline: "Qadın sağlamlığı", image: img("1631217868264-e5b90bb7e133"), description: "Qadın sağlamlığı, hamiləliyin idarə olunması və müayinələr." },
  ],

  doctors: [
    { id: 1, name: "Dr. Elvin Məmmədov", specialty: "Kardioloq", departmentSlug: "kardiologiya", experience: 15, price: "40 AZN", featured: true, photo: img("1612349317150-e413f6a5b16d", 600), bio: "Ürək-damar xəstəlikləri üzrə 15 illik təcrübəyə malik mütəxəssis.", education: "Azərbaycan Tibb Universiteti; Ankara Universiteti (rezidentura)", schedule: "B.e – Cümə, 09:00 – 17:00" },
    { id: 2, name: "Dr. Leyla Həsənova", specialty: "Terapevt", departmentSlug: "terapiya", experience: 20, price: "35 AZN", featured: true, photo: img("1559839734-2b71ea197ec2", 600), bio: "Daxili xəstəliklər üzrə ali kateqoriyalı həkim.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Şənbə, 10:00 – 16:00" },
    { id: 3, name: "Dr. Rəşad Quliyev", specialty: "Cərrah", departmentSlug: "cerrahiyye", experience: 12, price: "50 AZN", featured: true, photo: img("1622253692010-333f2da6031d", 600), bio: "Laparoskopik əməliyyatlar üzrə mütəxəssis, 2000-dən çox uğurlu əməliyyat.", education: "Moskva Dövlət Tibb Universiteti", schedule: "B.e – Cümə, 08:00 – 15:00" },
    { id: 4, name: "Dr. Tural Əliyev", specialty: "Stomatoloq", departmentSlug: "stomatologiya", experience: 9, price: "30 AZN", featured: true, photo: img("1537368910025-700350fe46c7", 600), bio: "Estetik stomatologiya və implantasiya üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti; İstanbul Universiteti", schedule: "Ç.a – Şənbə, 11:00 – 19:00" },
    { id: 5, name: "Dr. Nigar Rzayeva", specialty: "Pediatr", departmentSlug: "pediatriya", experience: 11, price: "35 AZN", featured: true, photo: img("1594824476967-48c8b964273f", 600), bio: "Uşaq xəstəlikləri və immunizasiya üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Cümə, 09:00 – 18:00" },
    { id: 6, name: "Dr. Kamran Nəbiyev", specialty: "Nevroloq", departmentSlug: "nevrologiya", experience: 18, price: "45 AZN", featured: true, photo: img("1582750433449-648ed127bb54", 600), bio: "Baş ağrıları, epilepsiya və insult sonrası reabilitasiya.", education: "Sankt-Peterburq Tibb Akademiyası", schedule: "B.e – Cümə, 10:00 – 17:00" },
    { id: 7, name: "Dr. Aynur Babayeva", specialty: "Ginekoloq", departmentSlug: "ginekologiya", experience: 14, price: "40 AZN", featured: true, photo: img("1651008376811-b90baee60c1f", 600), bio: "Hamiləliyin idarə olunması və qadın sağlamlığı üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "B.e – Şənbə, 09:00 – 15:00" },
    { id: 8, name: "Dr. Səbinə İsmayılova", specialty: "Radioloq", departmentSlug: "radiologiya", experience: 8, price: "30 AZN", featured: true, photo: img("1614608682850-e0d6ed316d47", 600), bio: "MRT və KT müayinələrinin interpretasiyası.", education: "Hacettepe Universiteti", schedule: "Hər gün, 08:00 – 20:00" },
    { id: 9, name: "Dr. Mirvari Cəfərova", specialty: "Laborant-həkim", departmentSlug: "laboratoriya", experience: 22, price: "—", featured: false, photo: img("1527613426441-4da17471b66d", 600), bio: "Klinik laborator diaqnostika üzrə mütəxəssis.", education: "Azərbaycan Tibb Universiteti", schedule: "Hər gün, 07:30 – 14:00" },
    { id: 10, name: "Dr. Zərifə Hüseynova", specialty: "Kardioloq", departmentSlug: "kardiologiya", experience: 25, price: "50 AZN", featured: false, photo: img("1631217868264-e5b90bb7e133", 600), bio: "Aritmiya və ürək çatışmazlığı üzrə professor.", education: "Azərbaycan Tibb Universiteti, t.e.d.", schedule: "Ç.a, Cümə, 10:00 – 14:00" },
  ],

  news: [
    { id: 1, title: "Pulsuz ürək müayinəsi kampaniyası", date: "2026-09-01", image: img("1576091160399-112ba8d25d1d"), excerpt: "Sentyabr ayı ərzində 50 yaşdan yuxarı şəxslər üçün EKQ pulsuzdur." },
    { id: 2, title: "Yeni MRT aparatı istifadəyə verildi", date: "2026-08-20", image: img("1666214280557-f1b5022eb634"), excerpt: "3 Tesla gücündə yeni nəsil MRT ilə daha dəqiq diaqnostika." },
    { id: 3, title: "Uşaqlar üçün məktəbəqədər check-up", date: "2026-08-10", image: img("1584515933487-779824d29309"), excerpt: "Məktəbə hazırlıq üçün kompleks müayinə paketində 20% endirim." },
    { id: 4, title: "Stomatologiya şöbəsi yeniləndi", date: "2026-07-28", image: img("1629909613654-28e377c37b09"), excerpt: "Müasir avadanlıqlarla təchiz olunmuş yeni kabinetlər." },
  ],

  appointments: [],
  messages: [],
};

export default seed;
