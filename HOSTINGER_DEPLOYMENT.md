# دليل نشر موقع Zyva Group على Hostinger

## المتطلبات
- حساب على Hostinger
- حساب على GitHub
- Node.js مثبت على الجهاز المحلي (أو على خادم Hostinger)

---

## الخطوة 1: إعداد Repository على GitHub

### 1.1 إنشاء Repository جديد
1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على "+" في الزاوية العلوية اليمنى
3. اختر "New repository"
4. أدخل الاسم: `zyva-group-website`
5. اختر "Public" (اختياري)
6. اضغط "Create repository"

### 1.2 رفع الكود إلى GitHub
```bash
# انسخ الأوامر التالية في Terminal/Command Prompt

cd /path/to/jm-food-animation-demo

# إضافة remote جديد
git remote add github https://github.com/YOUR_USERNAME/zyva-group-website.git

# رفع الكود
git branch -M main
git push -u github main
```

استبدل `YOUR_USERNAME` باسم مستخدمك على GitHub.

---

## الخطوة 2: إعداد Hostinger

### 2.1 تسجيل الدخول إلى Hostinger
1. اذهب إلى [Hostinger.com](https://hostinger.com)
2. سجل الدخول إلى حسابك
3. اختر الخطة المناسبة (يفضل Premium أو Business للتطبيقات الديناميكية)

### 2.2 إعداد Node.js على Hostinger
1. اذهب إلى **hPanel** (لوحة التحكم)
2. اختر **Advanced** → **Node.js**
3. اضغط **Create Application**
4. اختر:
   - **Node.js Version**: 22.x أو أحدث
   - **Application Mode**: Production
   - **Application Root**: `/public` (للملفات الثابتة)

### 2.3 ربط GitHub مع Hostinger
1. في **Node.js** section، اضغط **Connect Repository**
2. اختر GitHub
3. اختر repository: `zyva-group-website`
4. اختر branch: `main`
5. اضغط **Connect**

---

## الخطوة 3: بناء وتشغيل التطبيق

### 3.1 إعدادات البناء
في Hostinger Node.js settings:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start` أو `npm run preview`
- **Public Directory**: `dist` أو `client/dist`

### 3.2 متغيرات البيئة (Environment Variables)
إذا كان لديك متغيرات بيئة (مثل API keys):
1. اذهب إلى **Node.js** → **Environment Variables**
2. أضف المتغيرات المطلوبة

---

## الخطوة 4: نشر الموقع

### 4.1 النشر التلقائي
- Hostinger سيقوم تلقائياً بـ:
  1. سحب الكود من GitHub
  2. تثبيت المكتبات (`npm install`)
  3. بناء التطبيق (`npm run build`)
  4. تشغيل التطبيق

### 4.2 مراقبة النشر
1. اذهب إلى **Node.js** → **Deployments**
2. شاهد حالة النشر
3. إذا حدث خطأ، اضغط على الخطأ لرؤية التفاصيل

---

## الخطوة 5: ربط الدومين

### 5.1 ربط دومين موجود
1. اذهب إلى **Domains** في Hostinger
2. اختر **Add Domain**
3. اختر **Connect Existing Domain**
4. أدخل اسم الدومين
5. غيّر nameservers في موفر الدومين الخاص بك

### 5.2 شراء دومين جديد
1. اذهب إلى **Domains**
2. اضغط **Register New Domain**
3. ابحث عن الدومين المطلوب
4. أكمل عملية الشراء

### 5.3 ربط الدومين مع التطبيق
1. اذهب إلى **Node.js** → **Application Settings**
2. أضف الدومين تحت **Domains**

---

## الخطوة 6: SSL Certificate

### 6.1 تفعيل SSL
1. اذهب إلى **SSL/TLS**
2. اختر **Auto-Renewal** (Let's Encrypt)
3. Hostinger سيقوم بـ auto-renewal كل 90 يوم

---

## الخطوة 7: التحديثات المستقبلية

### 7.1 تحديث الموقع
كل ما عليك فعله هو:
1. دفع التغييرات إلى GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push github main
   ```
2. Hostinger سيقوم تلقائياً بـ:
   - سحب التغييرات
   - إعادة بناء التطبيق
   - تحديث الموقع المباشر

---

## استكشاف الأخطاء

### المشكلة: الموقع لا يحمل
**الحل:**
1. تحقق من logs في **Node.js** → **Logs**
2. تأكد من أن `npm run build` ينجح محلياً
3. تحقق من متغيرات البيئة

### المشكلة: الصور لا تظهر
**الحل:**
1. تأكد من أن الصور موجودة في `/public/images`
2. تحقق من المسارات في الكود (استخدم `/images/...` بدلاً من `./images/...`)

### المشكلة: الأسلوب (CSS) لا يعمل
**الحل:**
1. تأكد من أن `npm run build` ينتج ملف CSS صحيح
2. امسح cache المتصفح (Ctrl+Shift+Delete)
3. تحقق من console في Developer Tools

---

## ملاحظات مهمة

- **Build Time**: قد يستغرق البناء 2-5 دقائق في المرة الأولى
- **Node Memory**: إذا كان التطبيق كبيراً، قد تحتاج إلى خطة أعلى من Hostinger
- **Database**: إذا أضفت قاعدة بيانات، استخدم MySQL من Hostinger أو قاعدة بيانات خارجية

---

## دعم إضافي

- **Hostinger Support**: https://support.hostinger.com
- **GitHub Docs**: https://docs.github.com
- **Node.js Docs**: https://nodejs.org/docs

---

**تم إنشاء هذا الدليل في:** 17 يناير 2026
