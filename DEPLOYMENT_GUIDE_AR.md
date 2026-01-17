# دليل شامل لنشر موقع Zyva Group على Hostinger

## مقدمة

هذا الدليل يوضح كيفية نقل موقع Zyva Group من Manus إلى Hostinger بخطوات سهلة وواضحة. الموقع مبني باستخدام React و Vite، وهو متوافق تماماً مع استضافة Hostinger.

---

## المتطلبات الأساسية

قبل البدء، تأكد من توفر:

- **حساب Hostinger** - يفضل خطة Premium أو Business
- **حساب GitHub** - لتخزين الكود
- **Node.js مثبت** - الإصدار 22.x أو أحدث
- **Git مثبت** - لإدارة الإصدارات
- **دومين** - موجود لديك أو ستشتريه من Hostinger

---

## الجزء الأول: إعداد GitHub

### 1. إنشاء Repository جديد

اتبع الخطوات التالية لإنشاء مستودع جديد على GitHub:

1. سجل الدخول إلى حسابك على [GitHub.com](https://github.com)
2. اضغط على أيقونة "+" في الزاوية العلوية اليمنى
3. اختر **New repository**
4. أدخل المعلومات التالية:
   - **Repository name**: `zyva-group-website`
   - **Description**: Zyva Group - Professional Business Solutions
   - **Visibility**: Public (أو Private حسب الرغبة)
5. اضغط **Create repository**

### 2. رفع الكود إلى GitHub

افتح Terminal أو Command Prompt وقم بتنفيذ الأوامر التالية:

```bash
# انتقل إلى مجلد المشروع
cd /path/to/jm-food-animation-demo

# أضف GitHub كـ remote جديد
git remote add github https://github.com/YOUR_USERNAME/zyva-group-website.git

# تحقق من أن الـ remote تم إضافته بشكل صحيح
git remote -v

# رفع الكود إلى GitHub
git branch -M main
git push -u github main
```

**ملاحظة:** استبدل `YOUR_USERNAME` باسم مستخدمك الفعلي على GitHub.

بعد تنفيذ هذه الأوامر، سيظهر الكود كاملاً على GitHub ويمكنك الوصول إليه من أي مكان.

---

## الجزء الثاني: إعداد Hostinger

### 1. تسجيل الدخول والتنقل

1. اذهب إلى [Hostinger.com](https://hostinger.com) وسجل الدخول
2. اذهب إلى **hPanel** (لوحة التحكم الرئيسية)
3. اختر الحساب/الموقع المطلوب

### 2. إعداد Node.js Application

Hostinger يدعم تطبيقات Node.js مباشرة. اتبع الخطوات:

1. من القائمة الجانبية، اختر **Advanced** → **Node.js**
2. اضغط على **Create Application**
3. اختر الإعدادات التالية:
   - **Node.js Version**: 22.x أو أحدث
   - **Application Mode**: Production
   - **Application Root**: `/` (الجذر الرئيسي)
   - **Public Directory**: `dist` (مجلد البناء)
   - **Start Command**: `npm run preview` أو `npm run start`

### 3. ربط GitHub مع Hostinger

هذه الخطوة تسمح بـ Continuous Deployment (النشر التلقائي):

1. في قسم **Node.js**، اضغط على **Connect Repository**
2. اختر **GitHub** من القائمة
3. وافق على الأذونات المطلوبة
4. اختر:
   - **Repository**: `zyva-group-website`
   - **Branch**: `main`
5. اضغط **Connect**

---

## الجزء الثالث: إعدادات البناء والتشغيل

### 1. Build Commands

في إعدادات Node.js، ضع الأوامر التالية:

| الإعداد | القيمة |
|--------|--------|
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |
| **Public Directory** | `dist` |

### 2. متغيرات البيئة (اختياري)

إذا كان لديك متغيرات بيئة (مثل API keys):

1. اذهب إلى **Node.js** → **Environment Variables**
2. أضف كل متغير:
   - **Name**: اسم المتغير (مثل `VITE_API_URL`)
   - **Value**: قيمة المتغير

### 3. مراقبة البناء

1. اذهب إلى **Node.js** → **Deployments**
2. شاهد حالة البناء الحالية
3. إذا حدث خطأ:
   - اضغط على الخطأ لرؤية التفاصيل
   - تحقق من logs
   - أصلح المشكلة وادفع التحديثات إلى GitHub

---

## الجزء الرابع: ربط الدومين

### 1. إذا كان لديك دومين موجود

1. اذهب إلى **Domains** في Hostinger
2. اختر **Add Domain** → **Connect Existing Domain**
3. أدخل اسم الدومين
4. انسخ nameservers من Hostinger
5. غيّر nameservers في موفر الدومين الأصلي (GoDaddy, Namecheap, إلخ)

### 2. إذا كنت تريد شراء دومين جديد

1. اذهب إلى **Domains**
2. اضغط **Register New Domain**
3. ابحث عن الدومين المطلوب (مثل `zyvagroup.com`)
4. أكمل عملية الشراء

### 3. ربط الدومين مع التطبيق

1. اذهب إلى **Node.js** → **Application Settings**
2. ابحث عن **Domains**
3. أضف الدومين الخاص بك

---

## الجزء الخامس: SSL Certificate (HTTPS)

Hostinger يوفر SSL مجاني تلقائياً:

1. اذهب إلى **SSL/TLS**
2. اختر **Auto-Renewal** (Let's Encrypt)
3. Hostinger سيقوم بـ auto-renewal كل 90 يوم تلقائياً

بعد 5-10 دقائق، سيكون موقعك آمناً مع HTTPS ✅

---

## الجزء السادس: التحديثات المستقبلية

### كيفية تحديث الموقع

كل ما عليك فعله هو دفع التغييرات إلى GitHub:

```bash
# أضف التغييرات
git add .

# أنشئ commit
git commit -m "Update website - add new features"

# ادفع إلى GitHub
git push github main
```

**ما يحدث تلقائياً:**
1. Hostinger يكتشف التحديث الجديد
2. يسحب الكود من GitHub
3. يثبت المكتبات (`npm install`)
4. يبني التطبيق (`npm run build`)
5. يحدّث الموقع المباشر

هذا يستغرق عادة 2-5 دقائق.

---

## استكشاف الأخطاء الشائعة

### المشكلة: الموقع لا يحمل (Error 500)

**الحلول:**
1. تحقق من logs في **Node.js** → **Logs**
2. تأكد من أن `npm run build` ينجح محلياً
3. تحقق من متغيرات البيئة
4. أعد تشغيل التطبيق من **Node.js** → **Restart**

### المشكلة: الصور لا تظهر

**الحلول:**
1. تأكد من أن الصور موجودة في `/public/images`
2. استخدم مسارات مطلقة: `/images/photo.jpg` بدلاً من `./images/photo.jpg`
3. تحقق من أسماء الملفات (حساسة لحالة الأحرف على Linux)

### المشكلة: الأسلوب (CSS) لا يعمل

**الحلول:**
1. امسح cache المتصفح: `Ctrl+Shift+Delete`
2. تحقق من console في Developer Tools (F12)
3. تأكد من أن `npm run build` ينتج ملفات CSS صحيحة

### المشكلة: الموقع بطيء جداً

**الحلول:**
1. قد تحتاج إلى خطة أعلى من Hostinger
2. استخدم CDN لتسريع تحميل الملفات الثابتة
3. قلل حجم الصور (استخدم أدوات مثل TinyPNG)

---

## نصائح مهمة

| النصيحة | الوصف |
|--------|-------|
| **النسخ الاحتياطية** | Hostinger يعمل نسخ احتياطية تلقائية يومية |
| **الأمان** | استخدم كلمات مرور قوية وفعّل Two-Factor Authentication |
| **الأداء** | راقب استخدام الموارد في **Resource Usage** |
| **البريد الإلكتروني** | يمكنك إنشاء بريد احترافي مثل `contact@zyvagroup.com` |

---

## الخطوات التالية

بعد النشر بنجاح:

1. **اختبر الموقع بالكامل** - تأكد من أن جميع الصفحات تعمل
2. **اختبر على الهاتف** - تأكد من أن الموقع متجاوب
3. **اختبر الأداء** - استخدم [Google PageSpeed Insights](https://pagespeed.web.dev)
4. **أضف Analytics** - استخدم Google Analytics لتتبع الزوار
5. **أنشئ Sitemap** - لتحسين SEO

---

## الدعم والمساعدة

| المورد | الرابط |
|--------|--------|
| **Hostinger Support** | https://support.hostinger.com |
| **GitHub Docs** | https://docs.github.com |
| **Node.js Docs** | https://nodejs.org/docs |
| **Vite Docs** | https://vitejs.dev |

---

**تم إنشاء هذا الدليل:** 17 يناير 2026  
**الإصدار:** 1.0  
**الحالة:** جاهز للاستخدام ✅
