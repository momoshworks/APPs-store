# 📱 DUMU App Portal & Showcase

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-Arabic%20%7C%20English-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

<p align="center">
  <b>بوابة التحميل والعرض الرسمية لتطبيق DUMU (مساعد جامعة الدلتا الذكي). واجهة عصرية متعددة اللغات (عربي/إنجليزي) مع مولد QR Code فوري للتحميل المباشر وتجربة استعراض تفاعلية فائقة السلاسة.</b>
</p>

</div>

---

## 🌟 Overview | نظرة عامة

بوابة **DUMU Showcase Portal** هي صفحة هبوط تفاعلية عالية الأداء (Landing Page) مخصصة لاستعراض وتحميل تطبيق **DUMU (Delta University Mobile Utility)**. تتيح للطلاب التعرف على إمكانيات التطبيق، فحص متطلبات التشغيل، تحميل ملف الـ APK بأمان، أو مسح رمز الاستجابة السريعة (QR Code) لتنزيل التطبيق مباشرة على هواتفهم.

---

## ✨ Key Features | المميزات الأساسية

- 🌐 **Bilingual Internationalization (i18n):** تبديل سلس وفوري بين اللغتين العربية والإنجليزية مع التبديل التلقائي لاتجاه الواجهة (`RTL` / `LTR`).
- 🌓 **Dark & Light Mode:** دعم كامل للوضع الليلي والنهاري مع حفظ تفضيل المستخدم في `localStorage`.
- 📲 **Live QR Code Generator:** توليد تلقائي لرمز QR يسمح لمستخدمي أجهزة الكمبيوتر بمسح الكود وتنزيل ملف `DUMU.apk` على هواتفهم فوراً.
- 🖼 **Interactive Feature Showcase & Carousel:** استعراض جذاب لميزات التطبيق (مزامنة DULMS، جدول المحاضرات، مساعد الذكاء الاصطناعي، وأدوات الدراسة).
- 🛡 **Security & Verification Badges:** إبراز توافق التطبيق، فحص الأمان والحجم (Clean APK Verification).
- ⚡ **Zero-Framework Performance:** سرعة تحميل فائقة واستهلاك منعدم للموارد مبني بالكامل على Pure HTML/CSS/JavaScript.

---

## 🛠 Tech Stack | التقنيات المستخدمة

- **Frontend:** Semantic HTML5, Modular CSS3 (Custom Variables, Flexbox, Animations).
- **Core Logic:** Vanilla JavaScript (ES6+ Modules, DOM Events, i18n Controller).
- **QR Code Engine:** `qrcode.min.js` (Offline-ready client-side rendering).
- **Asset Distribution:** Direct local hosting of `DUMU.apk`.

---

## 📂 Project Structure | هيكل الملفات

```plaintext
APPs-store/
├── index.html               # الصفحة الرئيسية التفاعلية
├── style.css                # أنماط التصميم والوضع الليلي/النهاري والتجاوب
├── script.js                # محرك الترجمة (i18n) والـ Theme وتوليد الـ QR
├── qrcode.min.js            # مكتبة توليد رموز QR محلياً
├── DUMU.apk                 # ملف تطبيق أندرويد الجاهز للتثبيت
├── start_local_server.bat   # اسكريبت تشغيل سيرفر محلي بنقرة واحدة
├── open_page.bat            # فتح الصفحة مباشرة في المتصفح الافتراضي
├── .gitignore               # استبعاد الملفات غير الضرورية
└── README.md                # التوثيق الشامل للمشروع
```

---

## 🚀 How to Run | طريقة التشغيل

### تشغيل مباشر:
- قم بفتح ملف `index.html` في أي متصفح ويب، أو انقر نقراً مزدوجاً على ملف `open_page.bat` على نظام ويندوز.

### تشغيل عبر سيرفر محلي:
- انقر على `start_local_server.bat` (سيقوم بتشغيل سيرفر Python محلياً وفتح الرابط تلقائياً).

---

## 👨‍💻 Author

Developed by **[Mohamed Shaaban (momoshworks)](https://github.com/momoshworks)**.

---

## 📄 License
This project is open-source under the MIT License.
