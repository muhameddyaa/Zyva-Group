# دليل تقنيات الرسوم المتحركة للمواقع
## Animation Techniques Guide for Websites

---

## 📋 المحتويات / Table of Contents

1. [تحليل موقع JM Foods](#تحليل-موقع-jm-foods)
2. [التقنيات المستخدمة](#التقنيات-المستخدمة)
3. [أنواع الرسوم المتحركة](#أنواع-الرسوم-المتحركة)
4. [كيفية التنفيذ](#كيفية-التنفيذ)
5. [أمثلة عملية](#أمثلة-عملية)
6. [المكتبات الموصى بها](#المكتبات-الموصى-بها)

---

## تحليل موقع JM Foods

### التقنيات المكتشفة في الموقع الأصلي:

| التقنية | الاستخدام |
|---------|-----------|
| **jQuery** | المكتبة الأساسية للتفاعلات |
| **CSS Transitions** | التحولات السلسة للعناصر |
| **Scroll Events** | رصد موضع التمرير |
| **FancyBox** | عرض الصور في نافذة منبثقة |
| **Background Gallery** | عرض الصور الخلفية المتحركة |

### الكود الأصلي من الموقع:

```javascript
// رسوم متحركة عند التمرير - من موقع JM Foods
$(window).scroll(function() {
    if($(window).scrollTop() > $("#about").offset().top+200){
        $("#sea-food").addClass('display');
    }
    if($(window).scrollTop() > $("#sea-food").offset().top){
        $("#grocery").addClass('display');	
    }
    // ... المزيد من العناصر
});
```

---

## التقنيات المستخدمة

### 1. jQuery (الموقع الأصلي)
```javascript
// إضافة فئة عند التمرير
$(window).scroll(function() {
    if($(window).scrollTop() > targetOffset) {
        $(element).addClass('display');
    }
});
```

### 2. Framer Motion (الطريقة الحديثة - React)
```jsx
import { motion, useInView } from "framer-motion";

function AnimatedElement() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        />
    );
}
```

### 3. GSAP (مكتبة متقدمة)
```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".element", {
    scrollTrigger: {
        trigger: ".element",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
});
```

---

## أنواع الرسوم المتحركة

### 1. Scroll-Triggered Animations (رسوم متحركة عند التمرير)

**الوصف:** العناصر تظهر أو تتحرك عند وصول المستخدم إليها أثناء التمرير.

**CSS:**
```css
.element {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

.element.display {
    opacity: 1;
    transform: translateY(0);
}
```

**JavaScript (jQuery):**
```javascript
$(window).scroll(function() {
    $('.element').each(function() {
        if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 200) {
            $(this).addClass('display');
        }
    });
});
```

**React (Framer Motion):**
```jsx
<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
/>
```

---

### 2. Parallax Effects (تأثيرات Parallax)

**الوصف:** الخلفية تتحرك بسرعة مختلفة عن المحتوى الأمامي.

**CSS:**
```css
.parallax-bg {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```

**React (Framer Motion):**
```jsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

<motion.div style={{ y }}>
    <img src="background.jpg" />
</motion.div>
```

---

### 3. Hover Animations (تأثيرات التمرير)

**الوصف:** تغييرات بصرية عند تمرير الماوس فوق العنصر.

**CSS:**
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

**React (Framer Motion):**
```jsx
<motion.div
    whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
    }}
    whileTap={{ scale: 0.98 }}
/>
```

---

### 4. Staggered Animations (رسوم متحركة متتابعة)

**الوصف:** عناصر متعددة تظهر بالتتابع مع تأخير بينها.

**CSS:**
```css
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
```

**React (Framer Motion):**
```jsx
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
    {items.map((i) => (
        <motion.div key={i} variants={item} />
    ))}
</motion.div>
```

---

### 5. Text Reveal Animations (كشف النص)

**الوصف:** النص يظهر تدريجياً من اتجاه معين.

**CSS:**
```css
.text-reveal {
    overflow: hidden;
}

.text-reveal span {
    display: inline-block;
    transform: translateY(100%);
    animation: reveal 0.8s ease forwards;
}

@keyframes reveal {
    to { transform: translateY(0); }
}
```

**React (Framer Motion):**
```jsx
<div className="overflow-hidden">
    <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        PREMIUM QUALITY
    </motion.h1>
</div>
```

---

### 6. Marquee Animation (النص المتحرك)

**الوصف:** نص يتحرك أفقياً بشكل مستمر.

**CSS:**
```css
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.marquee {
    animation: marquee 30s linear infinite;
    white-space: nowrap;
}
```

**HTML:**
```html
<div class="overflow-hidden">
    <div class="marquee">
        <span>SEAFOOD • MEAT • CHEESE • </span>
        <span>SEAFOOD • MEAT • CHEESE • </span>
    </div>
</div>
```

---

### 7. Fixed Navigation on Scroll (قائمة ثابتة عند التمرير)

**الوصف:** القائمة تصبح ثابتة في أعلى الصفحة عند التمرير.

**JavaScript (jQuery):**
```javascript
$(window).scroll(function() {
    $("nav").toggleClass('fixed', $(window).scrollTop() > 100);
});
```

**React (Framer Motion):**
```jsx
const { scrollY } = useScroll();
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    return scrollY.onChange((latest) => {
        setIsVisible(latest > 100);
    });
}, [scrollY]);

<motion.nav
    initial={{ y: -100 }}
    animate={{ y: isVisible ? 0 : -100 }}
    transition={{ duration: 0.3 }}
/>
```

---

## كيفية التنفيذ

### الخطوة 1: اختيار المكتبة المناسبة

| المكتبة | المميزات | الاستخدام |
|---------|----------|-----------|
| **CSS Animations** | بسيطة، أداء عالي | تأثيرات بسيطة |
| **jQuery** | سهلة التعلم | مواقع تقليدية |
| **Framer Motion** | قوية، React | تطبيقات React |
| **GSAP** | متقدمة جداً | رسوم متحركة معقدة |
| **AOS** | سهلة الاستخدام | scroll animations |

### الخطوة 2: تثبيت المكتبة

**Framer Motion:**
```bash
npm install framer-motion
```

**GSAP:**
```bash
npm install gsap
```

**AOS:**
```bash
npm install aos
```

### الخطوة 3: التنفيذ

```jsx
// مثال كامل مع Framer Motion
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    
    return (
        <section ref={ref}>
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0">
                <img src="background.jpg" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Animated Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h2>Premium Quality</h2>
            </motion.div>
        </section>
    );
}
```

---

## المكتبات الموصى بها

### للمبتدئين:
1. **AOS (Animate On Scroll)** - سهلة جداً
2. **CSS Animations** - لا تحتاج مكتبات

### للمتوسطين:
1. **Framer Motion** - مثالية لـ React
2. **Animate.css** - مكتبة CSS جاهزة

### للمتقدمين:
1. **GSAP** - الأقوى والأكثر مرونة
2. **Three.js** - للرسوم ثلاثية الأبعاد
3. **Lottie** - للرسوم المتحركة المعقدة

---

## 🔗 موارد إضافية

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [CSS Tricks - Animation Guide](https://css-tricks.com/almanac/properties/a/animation/)
- [AOS Library](https://michalsnik.github.io/aos/)

---

## 📝 ملاحظات مهمة

1. **الأداء**: استخدم `transform` و `opacity` فقط للرسوم المتحركة السلسة
2. **إمكانية الوصول**: احترم `prefers-reduced-motion` للمستخدمين الذين يفضلون تقليل الحركة
3. **التوازن**: لا تبالغ في الرسوم المتحركة - الأقل أفضل أحياناً
4. **الاختبار**: اختبر على أجهزة مختلفة للتأكد من الأداء

```css
/* احترام تفضيلات المستخدم */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

تم إنشاء هذا الدليل كجزء من مشروع JM Food Animation Demo.
