/**
 * DUMU Landing Page - Interactive Controller
 * Ultra-smooth transitions, Bilingual I18n (Arabic / English), Theme Toggle, 
 * Offline QR Code Generator, Screenshot Carousel, and Install Flow
 */

// ==========================================================================
// 1. I18N DICTIONARY (Arabic & English)
// ==========================================================================
const translations = {
  ar: {
    // Navigation
    nav_features: "المميزات",
    nav_screens: "معاينة التطبيق",
    nav_install: "طريقة التثبيت",
    nav_specs: "المواصفات",
    nav_dev: "المطور",
    nav_download: "تحميل APK",

    // Hero
    hero_badge: "الإصدار المستقر الرسمي 1.0.0.6 • متاح الآن",
    hero_title_1: "تطبيق",
    hero_title_2: "المساعد الأكاديمي الذكي لطلاب الجامعة",
    hero_sub: "الرفيق الأكاديمي المتكامل لطلاب كلية الذكاء الاصطناعي وجامعة الدلتا. تتبع جدول المحاضرات، كتم صوت الهاتف تلقائياً أثناء المحاضرة، منبهات دقيقة، قارئ للمستندات والملفات، مع وصول فوري لبوابة DULMS — في تطبيق أصلي وخفيف جداً يعمل بدون إنترنت!",
    hero_btn_download: "تحميل تطبيق DUMU (APK)",
    hero_btn_size: "الحجم: 338 كيلوبايت",
    hero_btn_guide: "دليل التثبيت السريع",

    // Trust
    trust_safe_title: "آمن 100%",
    trust_safe_desc: "خالٍ من الإعلانات والتتبع",
    trust_size_title: "خفيف وفائق السرعة",
    trust_size_desc: "أقل من نصف ميجابايت",
    trust_offline_title: "يعمل بدون إنترنت",
    trust_offline_desc: "وصول كامل لبياناتك دائماً",

    // Phone Mockup Pills
    mock_dashboard: "الرئيسية",
    mock_schedule: "الجدول الدراسي",
    mock_courses: "المقررات والتسجيل",
    mock_docs: "المستندات والمكتبة",
    mock_app: "التطبيق على الهاتف",

    // QR
    qr_title: "تنزيل مباشر بالهاتف",
    qr_desc: "امسح الكود بكاميرا هاتفك للتحميل الفوري",

    // Stats
    stat_size: "حجم فائق الصغر",
    stat_speed: "تشغيل فوري بدون أي تأخير",
    stat_compat: "يدعم حتى أحدث أندرويد 15",
    stat_free: "مجاني بالكامل وبدون إعلانات",

    // Features Section
    features_tag: "قدرات صُممت للتميز",
    features_title: "كل ما يحتاجه الطالب الجامعي في مكان واحد",
    features_desc: "تم تصميم DUMU بعناية من قِبل طالب ومهندس ذكاء اصطناعي لحل المشاكل اليومية الحقيقية لطلاب الجامعة بكل سلاسة.",

    f1_title: "الجدول الدراسي الذكي",
    f1_desc: "عرض منظم لجميع محاضرات الأسبوع مع تحديد وقت البداية، رقم القاعة، المبنى واسم أستاذ المادة وتنبيه بالمحاضرة القادمة.",

    f2_title: "الوضع الصامت التلقائي (DND)",
    f2_desc: "يقوم التطبيق بتحويل الهاتف تلقائياً للوضع الصامت عند بدء موعد المحاضرة وإعادته للوضع الطبيعي بعد انتهائها لحمايتك من الإحراج.",

    f3_title: "منبهات وتنبيهات دقيقة",
    f3_desc: "تنبيهات فورية قبل المحاضرة تضمن استيقاظك ووصولك للقاعة في الوقت المناسب مع إشعارات واضحة وتفاعلية.",

    f4_title: "ويدجت الشاشة الرئيسية (Widget)",
    f4_desc: "ويدجت أنيق يُعرض على شاشة هاتفك الرئيسية ليوضح لك المحاضرة القادمة والقاعة الحالية بنظرة واحدة دون فتح التطبيق.",

    f5_title: "قارئ المستندات والوسائط المدمج",
    f5_desc: "استعراض سلايدات المحاضرات والملفات بصيغ (PDF, Word DOCX, PowerPoint PPTX, الصور، الصوتيات والفيديوهات) داخل التطبيق مباشرة.",

    f6_title: "تكامل سريع مع DULMS",
    f6_desc: "وصول بلمسة واحدة لبوابة التعلم الإلكتروني لجامعة الدلتا وتصفح المقررات والواجبات بدون تعقيد التصفح الخارجي.",

    f7_title: "محول الصور إلى PDF",
    f7_desc: "التقط صور ملخصات المحاضرات أو السبورة وحولها في ثوانٍ إلى ملف PDF متعدد الصفحات عالي الجودة لمشاركته وحفظه.",

    f8_title: "النسخ الاحتياطي السحابي وحساب المعدل",
    f8_desc: "تصدير واستيراد خطتك الدراسية بنقرة واحدة، بالإضافة إلى حاسبة GPA دقيقة لاحتساب المعدل الفصلي والتراكمي.",

    // Gallery / Showcase
    preview_tag: "واجهة حديثة وعصرية",
    preview_title: "تصميم Material 3 الأنيق وسهل الاستخدام",
    preview_desc: "شاشات تفاعلية مستوحاة من أحدث معايير Google Design، تدعم اللغة العربية والإنجليزية وتتكيف مع الوضعين الداكن والفاتح.",

    s1_title: "لوحة التحكم والمحاضرة القادمة",
    s1_desc: "نظرة سريعة على اليوم الدراسي، نسبة إنجاز الساعات، والاختصارات الحيوية.",

    s2_title: "الجدول الأسبوعي التفاعلي",
    s2_desc: "عرض زمني دقيق لكل يوم مع فلاتر سريعة وألوان مميزة لكل مادة وقاعة.",

    s3_title: "إدارة المواد والساعات المعتمدة",
    s3_desc: "متابعة الساعات المسجلة والمقررات المقترحة وتفاصيل الامتحانات النصفية.",

    s4_title: "مركز المستندات والملفات",
    s4_desc: "مكتبة سحابية وشخصية لتنظيم محاضراتك ومشاركتها مع زملائك بسهولة.",

    s5_title: "أداء أصلي على نظام أندرويد",
    s5_desc: "مبني ليعمل بسلاسة 120Hz دون استهلاك للبطارية أو الذاكرة العشوائية.",

    s6_title: "أيقونة أنيقة وتوافق كامل",
    s6_desc: "جاهز للتثبيت الفوري بنقرة واحدة كأي تطبيق رسمي موثوق.",

    // Installation
    inst_tag: "تثبيت سهل وسريع",
    inst_title: "كيفية تثبيت ملف APK على هاتفك في 3 خطوات",
    inst_desc: "نظراً لأن التطبيق يتم تحميله كملف APK أصلي، اتبع الخطوات البسيطة التالية لتثبيته خلال 30 ثانية.",

    step1_title: "تحميل ملف DUMU.apk",
    step1_desc: "اضغط على زر التحميل في الصفحة، وسيتم تنزيل ملف التثبيت فوراً (حجمه 338 كيلوبايت فقط وينتهي في ثوانٍ).",

    step2_title: "السماح بتثبيت التطبيقات",
    step2_desc: "عند فتح الملف، إذا ظهرت لك رسالة أمان أندرويد، اضغط 'الإعدادات' ثم فعّل خيار 'السماح من هذا المصدر' (Allow from this source).",

    step3_title: "تثبيت وتشغيل التطبيق",
    step3_desc: "اضغط على 'تثبيت' (Install) ثم 'فتح' (Open). التطبيق جاهز فوراً دون الحاجة لإنشاء حساب أو إعدادات معقدة!",

    banner_title: "جاهز لتنظيم حياتك الأكاديمية؟",
    banner_sub: "حمّل التطبيق الآن واستمتع بتجربة دراسية ذكية وهادئة.",
    banner_btn: "تحميل DUMU.apk الآن",

    // Specs
    specs_tag: "بيانات الحزمة والتوافق",
    specs_title: "المواصفات الفنية لملف APK",
    spec_app_name: "اسم التطبيق",
    spec_pkg_name: "اسم الحزمة (Package)",
    spec_ver: "رقم الإصدار",
    spec_size: "حجم الملف",
    spec_min_os: "الحد الأدنى لنظام التشغيل",
    spec_target_os: "النظام المستهدف",
    spec_lang: "اللغات المدعومة",
    spec_privacy: "الخصوصية والإعلانات",
    spec_release: "تاريخ التحديث",

    // Developer
    dev_tag: "المطور والمصمم",
    dev_quote: "\"صُمم هذا المشروع بدافع الشغف لخدمة زملائي الطلاب وتوفير أداة ذكية تجمع كل ما يحتاجه الطالب يومياً في تطبيق فائق الخفة، بدون إعلانات مزعجة وبأعلى معايير الجودة والأداء.\"",
    dev_status: "مطور نشط • طالب كلية الذكاء الاصطناعي",
    dev_email: "البريد الإلكتروني",
    btn_share_classmates: "مشاركة الرابط مع زملائك بالدفعة",
    btn_copy_link: "نسخ رابط التنزيل",

    // Footer
    foot_home: "الرئيسية",
    foot_features: "المميزات",
    foot_install: "طريقة التثبيت",
    foot_specs: "المواصفات",
    foot_dev: "المطور",
    footer_tag: "تطبيق الطالب الجامعي الذكي • كلية الذكاء الاصطناعي",
    footer_copy: "© 2026 DUMU • تم التطوير بكل حب لدعم طلبة الجامعة بواسطة المهندس محمد شعبان.",

    // Modal
    mod_started: "بدأ التنزيل بنجاح!",
    mod_h3: "جاري حفظ ملف DUMU.apk",
    mod_p: "حجم الملف: 338 كيلوبايت فقط • سيظهر الملف في مجلد التنزيلات (Downloads).",
    mod_steps_heading: "خطوات سريعة لإكمال التثبيت:",
    mod_step1: "افتح الإشعار أو اذهب إلى مجلد التنزيلات واضغط على DUMU.apk.",
    mod_step2: "إذا طلب أندرويد الإذن، اضغط الإعدادات وفعل السماح بالتثبيت.",
    mod_step3: "اضغط تثبيت (Install) واستمتع بتجربة دراسية مميزة!",
    mod_btn_retry: "إعادة التنزيل يدويّاً",
    mod_btn_ok: "حسناً، فهمت",

    toast_copied: "تم نسخ الرابط بنجاح إلى الحافظة! 📋",
    toast_shared: "شكراً لمشاركة التطبيق مع زملائك! 🚀"
  },

  en: {
    // Navigation
    nav_features: "Features",
    nav_screens: "Screenshots",
    nav_install: "How to Install",
    nav_specs: "Specs",
    nav_dev: "Developer",
    nav_download: "Download APK",

    // Hero
    hero_badge: "Official Stable Release v1.0.0.6 • Available Now",
    hero_title_1: "Experience",
    hero_title_2: "Smart Academic Companion for University Students",
    hero_sub: "The all-in-one companion for Faculty of AI and Delta University students. Automated lecture timetable, intelligent auto-silent DND mode, precise alarms, native document reader, and seamless DULMS access — in an ultra-lightweight offline app!",
    hero_btn_download: "Download DUMU App (APK)",
    hero_btn_size: "Size: 338 KB",
    hero_btn_guide: "Quick Install Guide",

    // Trust
    trust_safe_title: "100% Safe & Clean",
    trust_safe_desc: "No ads, zero telemetry",
    trust_size_title: "Ultra-Lightweight",
    trust_size_desc: "Under half a megabyte",
    trust_offline_title: "Offline-First",
    trust_offline_desc: "Always accessible anytime",

    // Phone Mockup Pills
    mock_dashboard: "Dashboard",
    mock_schedule: "Schedule",
    mock_courses: "Courses & Credits",
    mock_docs: "Documents Hub",
    mock_app: "Installed App",

    // QR
    qr_title: "Download on Phone",
    qr_desc: "Scan with your phone camera for instant download",

    // Stats
    stat_size: "Ultra-Compact Size",
    stat_speed: "Zero-Lag Instant Launch",
    stat_compat: "Supports Android 7 to 15",
    stat_free: "100% Free & Ad-Free",

    // Features Section
    features_tag: "Engineered for Excellence",
    features_title: "Everything University Students Need in One App",
    features_desc: "Designed by an AI engineering student to solve real academic challenges cleanly, reliably, and effortlessly.",

    f1_title: "Smart Timetable",
    f1_desc: "Organized lecture timetable displaying starting time, lecture hall, building, and instructor details with automatic countdown.",

    f2_title: "Automatic Silent Mode (DND)",
    f2_desc: "Automatically switches your phone to silent when lectures start and restores your normal profile right when classes end.",

    f3_title: "Smart Lecture Alarms",
    f3_desc: "Accurate alarms before each lecture ensuring you never miss a class, built with Android exact alarm scheduling.",

    f4_title: "Home Screen Widget",
    f4_desc: "A sleek home screen widget that shows your upcoming lecture, hall number, and timing at a single glance.",

    f5_title: "Integrated Document Viewer",
    f5_desc: "Read lecture slides, PDF textbooks, Word (.docx), PowerPoint (.pptx), images, and audio/video files directly in-app.",

    f6_title: "Fast DULMS Access",
    f6_desc: "Direct single-tap gateway into Delta University's learning portal to check course submissions without browser hassle.",

    f7_title: "Image to PDF Converter",
    f7_desc: "Snap lecture board notes or papers and convert them in seconds into high-quality multi-page PDF documents.",

    f8_title: "Cloud Backup & GPA Calculator",
    f8_desc: "One-click backup/restore for your courses and timetable, plus a precise semester & cumulative GPA calculator.",

    // Gallery / Showcase
    preview_tag: "Modern Interface",
    preview_title: "Google Material 3 Clean Design",
    preview_desc: "Interactive screens adhering to Google Material 3 standards, fully optimized for both Light and Dark modes.",

    s1_title: "Dashboard & Next Lecture",
    s1_desc: "High-level overview of your academic day, credits progress, and quick shortcuts.",

    s2_title: "Interactive Weekly Schedule",
    s2_desc: "Detailed timetable for every weekday with color-coded course tags and room info.",

    s3_title: "Courses & Credit Hours",
    s3_desc: "Track enrolled credit hours, suggested electives, and mid-term exam dates.",

    s4_title: "Study Hub & Document Center",
    s4_desc: "Personalized offline-first library for organizing lecture handouts and study notes.",

    s5_title: "Native Android Performance",
    s5_desc: "Engineered for smooth 120Hz refresh rates with minimal battery and RAM usage.",

    s6_title: "Clean App Launcher Icon",
    s6_desc: "Ready for one-tap installation on your smartphone like any trusted official application.",

    // Installation
    inst_tag: "Fast & Frictionless",
    inst_title: "How to Install the APK on Your Phone in 3 Steps",
    inst_desc: "Because DUMU is distributed directly as an APK package, follow these quick 30-second steps to install it.",

    step1_title: "Download DUMU.apk",
    step1_desc: "Click the download button on this page. The APK file is only ~338 KB and downloads in a couple of seconds.",

    step2_title: "Allow Unknown Sources",
    step2_desc: "When opening the downloaded file, if Android prompts with a security notice, tap 'Settings' and toggle 'Allow from this source'.",

    step3_title: "Install & Enjoy",
    step3_desc: "Tap 'Install' then 'Open'. DUMU launches immediately with no account creation or login required!",

    banner_title: "Ready to Supercharge Your Academic Routine?",
    banner_sub: "Download the application now and experience a smarter semester.",
    banner_btn: "Download DUMU.apk Now",

    // Specs
    specs_tag: "Package & Compatibility",
    specs_title: "Technical APK Specifications",
    spec_app_name: "Application Name",
    spec_pkg_name: "Package Identifier",
    spec_ver: "Version Code",
    spec_size: "File Size",
    spec_min_os: "Minimum Android OS",
    spec_target_os: "Target Android OS",
    spec_lang: "Supported Languages",
    spec_privacy: "Privacy & Ads",
    spec_release: "Release Date",

    // Developer
    dev_tag: "Developer & Creator",
    dev_quote: "\"Built with passion to empower fellow university students with an ultra-lightweight, ad-free tool that streamlines every aspect of campus life with high performance and zero friction.\"",
    dev_status: "Active Developer • AI Engineering Student",
    dev_email: "Email Developer",
    btn_share_classmates: "Share With Classmates",
    btn_copy_link: "Copy Download Link",

    // Footer
    foot_home: "Home",
    foot_features: "Features",
    foot_install: "Installation",
    foot_specs: "Specs",
    foot_dev: "Developer",
    footer_tag: "Smart Student Portal • Faculty of Artificial Intelligence",
    footer_copy: "© 2026 DUMU • Crafted with pride for university students by Mohamed Shaaban.",

    // Modal
    mod_started: "Download Started!",
    mod_h3: "Saving DUMU.apk to your device",
    mod_p: "File size: 338 KB • The file will appear in your Downloads folder.",
    mod_steps_heading: "Quick installation reminder:",
    mod_step1: "Open the download notification or Downloads app and tap DUMU.apk.",
    mod_step2: "If prompted, tap Settings and allow installation from this source.",
    mod_step3: "Tap Install, open DUMU, and enjoy your smart academic suite!",
    mod_btn_retry: "Re-download APK",
    mod_btn_ok: "Got it!",

    toast_copied: "Download link copied to clipboard! 📋",
    toast_shared: "Thanks for sharing DUMU with your peers! 🚀"
  }
};

let currentLang = 'ar';
let currentTheme = 'dark';

// ==========================================================================
// 2. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved theme
  const savedTheme = localStorage.getItem('dumu_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setTheme(savedTheme);

  // Restore saved language
  const savedLang = localStorage.getItem('dumu_lang') || 'ar';
  setLanguage(savedLang);

  // Render QR Code
  renderQrCode();

  // Scroll Navbar Listener
  window.addEventListener('scroll', handleScroll);
});

// ==========================================================================
// 3. THEME CONTROLLER
// ==========================================================================
function toggleTheme() {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('dumu_theme', theme);
}

// ==========================================================================
// 4. LANGUAGE CONTROLLER
// ==========================================================================
function toggleLanguage() {
  const nextLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(nextLang);
}

function setLanguage(lang) {
  currentLang = lang;
  const isArabic = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

  // Toggle button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = isArabic ? 'EN' : 'عربي';

  // Update page title
  document.title = isArabic 
    ? 'DUMU — تطبيق الطالب الجامعي الذكي | تنزيل تطبيق أندرويد'
    : 'DUMU — Smart Student Portal | Download Android App';

  // Translate all [data-i18n] elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('dumu_lang', lang);
}

// ==========================================================================
// 5. PHONE MOCKUP SCREEN SWITCHER
// ==========================================================================
function switchMockupScreen(imgSrc, buttonElement) {
  const img = document.getElementById('phoneMockupImg');
  if (!img) return;

  // Highlight active pill
  document.querySelectorAll('.screen-pill').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  // Smooth Crossfade
  img.style.opacity = '0';
  img.style.transform = 'scale(0.97)';

  setTimeout(() => {
    img.src = imgSrc;
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 180);
}

// ==========================================================================
// 6. SCANNABLE QR CODE GENERATOR (Pure Offline QRCode.js)
// ==========================================================================
function renderQrCode() {
  const container = document.getElementById('qrContainer');
  if (!container) return;
  container.innerHTML = '';

  // Determine optimal download link
  let apkUrl = 'https://github.com/momoshworks/DUMU';
  if (window.location.protocol.startsWith('http')) {
    apkUrl = new URL('DUMU.apk', window.location.href).href;
  }

  if (typeof QRCode !== 'undefined') {
    new QRCode(container, {
      text: apkUrl,
      width: 80,
      height: 80,
      colorDark: '#0f172a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

// ==========================================================================
// 7. DOWNLOAD TRIGGER & INSTALLATION MODAL
// ==========================================================================
function handleDownloadTrigger(event) {
  // Let the browser naturally trigger the download of DUMU.apk
  // Open the instructions modal after brief delay
  setTimeout(() => {
    openDownloadModal();
  }, 400);
}

function openDownloadModal() {
  const modal = document.getElementById('downloadModal');
  if (modal) modal.classList.add('active');
}

function closeDownloadModal() {
  const modal = document.getElementById('downloadModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// 8. LIGHTBOX PREVIEW
// ==========================================================================
function openLightbox(imgSrc, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  
  if (!modal || !img) return;

  img.src = imgSrc;
  if (cap) cap.textContent = caption || 'DUMU App Preview';

  modal.classList.add('active');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// 9. SHARE & COPY LINK UTILITIES
// ==========================================================================
function shareWebsite() {
  const shareData = {
    title: 'تطبيق DUMU — المساعد الأكاديمي الذكي لطلاب الجامعة',
    text: 'حمّل تطبيق DUMU (جدول المحاضرات، كتم الهاتف التلقائي، قارئ المستندات، والمساعد الأكاديمي) بحجم 338 كيلوبايت فقط:',
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => showToast(translations[currentLang].toast_shared))
      .catch(() => copyDownloadLink());
  } else {
    copyDownloadLink();
  }
}

function copyDownloadLink() {
  const downloadUrl = new URL('DUMU.apk', window.location.href).href;
  navigator.clipboard.writeText(downloadUrl).then(() => {
    showToast(translations[currentLang].toast_copied);
  }).catch(() => {
    showToast('https://github.com/momoshworks/DUMU');
  });
}

function showToast(message) {
  const toast = document.getElementById('toastBox');
  const msg = document.getElementById('toastMsg');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================================================
// 10. SCROLL & MOBILE MENU
// ==========================================================================
function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('open');
  }
}

// Close mobile menu when link is clicked
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('open');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
