document.addEventListener('DOMContentLoaded', function() {

    // ====== Тема ======
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    function updateFavicon(mode) {
        const favicon = document.getElementById('favicon');
        if (favicon) {
            favicon.href = mode === 'dark' ? 'night-mode-logo.png' : 'light-mode-logo.png';
        }
    }
    function setThemeMode(mode) {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            if (darkIcon) darkIcon.classList.add('hidden');
            if (lightIcon) lightIcon.classList.remove('hidden'); // ← показываем солнце
        } else {
            document.documentElement.classList.remove('dark');
            if (lightIcon) lightIcon.classList.add('hidden');
            if (darkIcon) darkIcon.classList.remove('hidden'); // ← показываем луну
        }
        localStorage.setItem('theme', mode);
        updateFavicon(mode);
    }
    // Инициализация темы
    function initTheme() {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setThemeMode(storedTheme);
    }
    initTheme();
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            setThemeMode(isDark ? 'light' : 'dark');
        });
    }

    // ====== Локализация ======
    const translations = {
        en: {
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact via Telegram",
            hero_title: "We deliver — you grow",
            hero_subtitle: "AI products, chatbots and turn-key websites — fast, reliable, with guaranteed results.",
            portfolio_title: "Our Portfolio",
            portfolio_desc_mpox: "An AI-powered system for detecting monkeypox from medical images.",
            portfolio_desc_sami: "A vibrant and creative website for an art studio.",
            portfolio_desc_legal: "AI-powered legal bot for Kazakhstan.",
            portfolio_desc_rooflux: "Website for a roofing manufacturer.",
            portfolio_view: "View Project",
            testimonials_title: "Client Reviews",
            testimonials_subtitle: "What clients say",
            testimonial_1: "“The team did everything with high quality in just a couple of days. Loved the work and the design.”",
            testimonial_2: "“Lunight captured the spirit of our studio. The site is bright and intuitive, and all wishes were considered.”",
            testimonial_3: "“Kaz Legal Bot saved me time – everything was clear and understandable. Great for quick help.”",
            translation_note: "(translated from original)",
            tooltip_lang: "Change language",
            services_section_title: "Our Services",
            service_chatbots: "Chatbots",
            service_chatbots_desc: "We develop chatbots for Telegram, WhatsApp, Instagram, VK and others.",
            service_websites: "Turnkey Websites",
            service_websites_desc: "Modern and responsive websites from design to launch.",
            service_ai: "AI & Neural Networks",
            service_ai_desc: "We train and integrate AI for your needs.",
            service_apps: "Web Applications",
            service_apps_desc: "We build cross-platform web apps from scratch.",
            trusted_title: "Trusted by",
            testimonial_name_1: "Nurlan I.",
            testimonial_role_1: "Owner, Rooflux.kz",
            testimonial_name_2: "Aisulu M.",
            testimonial_role_2: "Artist, Sami Art Studio",
            testimonial_name_3: "Marat O.",
            testimonial_role_3: "Entrepreneur, Kaz Legal Bot",
            2025: "© 2025 Lunight. All rights reserved."
        },
        ru: {
            nav_services: "Услуги",
            nav_portfolio: "Портфолио",
            nav_contact: "Связаться в Telegram",
            hero_title: "Мы делаем — вы растёте",
            hero_subtitle: "AI-продукты, чат-боты и сайты под ключ — быстро, надёжно и с гарантией результата.",
            portfolio_title: "Портфолио",
            portfolio_desc_mpox: "AI-детектор Monkeypox по фото.",
            portfolio_desc_sami: "Яркий и креативный сайт-галерея для художника.",
            portfolio_desc_legal: "Юридический AI-бот для Казахстана.",
            portfolio_desc_rooflux: "Сайт производителя кровли.",
            portfolio_view: "Смотреть",
            testimonials_title: "Отзывы",
            testimonials_subtitle: "Что говорят клиенты",
            testimonial_1: "«Всё сделали качественно за пару дней. Понравилась работа и дизайн.»",
            testimonial_2: "«Команда Lunight идеально уловила дух нашей студии. Сайт яркий и удобный, все пожелания учтены.»",
            testimonial_3: "«Kaz Legal Bot сэкономил мне время – всё понятно и удобно. Отлично для быстрой помощи.»",
            translation_note: "",
            tooltip_lang: "Сменить язык",
            services_section_title: "Наши услуги",
            service_chatbots: "Чат-боты",
            service_chatbots_desc: "Разрабатываем чат-ботов для Telegram, WhatsApp, Instagram, VK и других платформ.",
            service_websites: "Сайты под ключ",
            service_websites_desc: "Современные, быстрые и адаптивные сайты от дизайна до запуска.",
            service_ai: "ИИ и нейросети",
            service_ai_desc: "Обучаем и внедряем искусственный интеллект под ваши задачи.",
            service_apps: "Веб-приложения",
            service_apps_desc: "Разрабатываем кроссплатформенные веб-приложения с нуля.",
            trusted_title: "Нам доверяют",
            testimonial_name_1: "Нурлан И.",
            testimonial_role_1: "Владелец Rooflux.kz",
            testimonial_name_2: "Айсулу М.",
            testimonial_role_2: "Художник Sami Art Studio",
            testimonial_name_3: "Марат О.",
            testimonial_role_3: "Предприниматель Kaz Legal Bot",
            2025: "© 2025 Lunight. Все права защищены."
        },
        kz: {
            nav_services: "Қызметтер",
            nav_portfolio: "Портфолио",
            nav_contact: "Telegram арқылы байланысу",
            hero_title: "Біз жасаймыз – сіз өсесіз",
            hero_subtitle: "ЖИ өнімдер, чат-боттар және сайттар — жылдам, сенімді, нәтиже кепілдігімен.",
            portfolio_title: "Портфолио",
            portfolio_desc_mpox: "Маймыл шешегін анықтайтын ЖИ жүйесі (фото арқылы).",
            portfolio_desc_sami: "Өнер студиясына арналған креативті сайт.",
            portfolio_desc_legal: "Қазақстанға арналған заңгерлік AI-бот.",
            portfolio_desc_rooflux: "Шатыр өндірушінің сайты.",
            portfolio_view: "Қарау",
            testimonials_title: "Пікірлер",
            testimonials_subtitle: "Клиенттер не дейді",
            testimonial_1: "«Барлығын бірнеше күнде сапалы жасады. Жұмысы мен дизайны ұнады.»",
            testimonial_2: "«Lunight командасы біздің студияның рухын керемет жеткізді. Сайт жарқын, ыңғайлы, барлық тілек ескерілді.»",
            testimonial_3: "«Kaz Legal Bot уақытымды үнемдеді – бәрі түсінікті әрі ыңғайлы. Жылдам көмек үшін керемет.»",
            translation_note: "",
            tooltip_lang: "Тілді өзгерту",
            services_section_title: "Қызметтеріміз",
            service_chatbots: "Чат-боттар",
            service_chatbots_desc: "Telegram, WhatsApp, Instagram, VK және басқа платформаларға чат-боттар жасаймыз.",
            service_websites: "Сайттар",
            service_websites_desc: "Заманауи, жылдам және бейімделген сайттар.",
            service_ai: "ЖИ және нейрожелілер",
            service_ai_desc: "Сіздің қажеттіліктеріңізге орай ЖИ енгізу.",
            service_apps: "Веб-қосымшалар",
            service_apps_desc: "Бірнеше платформаға арналған қосымшалар.",
            trusted_title: "Бізге сенеді",
            testimonial_name_1: "Нұрлан И.",
            testimonial_role_1: "Иесі, Rooflux.kz",
            testimonial_name_2: "Айсұлу М.",
            testimonial_role_2: "Суретші, Sami Art Studio",
            testimonial_name_3: "Марат О.",
            testimonial_role_3: "Кәсіпкер, Kaz Legal Bot",
            2025: "© 2025 Lunight. Барлық құқықтар қорғалған."
        }
    };

    // ====== Звёзды ======
    document.querySelectorAll('.star-rating').forEach(rating => {
        for(let i = 0; i < 5; i++) {
            const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            star.setAttribute("viewBox", "0 0 20 20");
            star.setAttribute("fill", "currentColor");
            star.classList.add('w-5', 'h-5');
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z");
            star.appendChild(path);
            rating.appendChild(star);
        }
    });

    // ====== Переключение языка ======
    const languages = ['en', 'ru', 'kz'];
    let currentLangIndex = 0;
    const langSwitcher = document.getElementById('lang-switcher');
    const langSwitcherText = document.getElementById('lang-switcher-text');

    const setTawkLanguage = (lang) => {
        if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
            window.Tawk_API.setAttributes({ 'language': lang }, (error) => {
                if (error) console.error('Tawk.to setAttributes error:', error);
            });
        }
    };

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function(){
        const currentLang = localStorage.getItem('language') || 'en';
        setTawkLanguage(currentLang);
    };

    const setLanguage = (lang) => {
        if (!translations[lang]) return;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key] !== undefined) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.innerHTML = translations[lang][key];
                    el.style.opacity = '1';
                }, 120);
            }
        });
        document.querySelectorAll('.translation-note').forEach(note => {
            note.style.display = (lang === 'ru') ? 'none' : 'block';
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        if (langSwitcherText) langSwitcherText.textContent = lang.toUpperCase();
        currentLangIndex = languages.indexOf(lang);
        setTawkLanguage(lang);
    };

    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % languages.length;
            const newLang = languages[currentLangIndex];
            setLanguage(newLang);
        });
    }

    const initialLang = languages.includes(localStorage.getItem('language')) ? localStorage.getItem('language') : 'en';
    setLanguage(initialLang);

    // ====== Открыть чат Tawk.to ======
    document.querySelectorAll('.open-tawk-chat').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.Tawk_API && typeof window.Tawk_API.toggle === 'function') {
                window.Tawk_API.toggle();
            }
        });
    });

    // ====== Галерея портфолио ======
    const galleryModal = document.getElementById('gallery-modal');
    const galleryImage = document.getElementById('gallery-image');
    const galleryClose = document.getElementById('gallery-close');
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    let currentImages = [];
    let currentIndex = 0;

    const showImage = (index) => {
        if (!galleryImage) return;
        galleryImage.style.opacity = '0';
        setTimeout(() => {
            if (index >= 0 && index < currentImages.length) {
                galleryImage.src = currentImages[index];
                currentIndex = index;
            }
            galleryImage.style.opacity = '1';
        }, 200);
    };

    portfolioCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.portfolio-button')) return;
            const imagesAttr = card.getAttribute('data-gallery-images');
            if (imagesAttr && galleryModal) {
                currentImages = imagesAttr.split(',').map(item => item.trim());
                showImage(0);
                galleryModal.classList.remove('hidden');
                setTimeout(() => galleryModal.classList.remove('opacity-0'), 10);
            }
        });
    });

    const closeModal = () => {
        if (galleryModal) {
            galleryModal.classList.add('opacity-0');
            setTimeout(() => galleryModal.classList.add('hidden'), 300);
        }
    };

    if (galleryClose) galleryClose.addEventListener('click', closeModal);
    if (galleryModal) galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) closeModal();
    });
    if (galleryNext) galleryNext.addEventListener('click', () => showImage((currentIndex + 1) % currentImages.length));
    if (galleryPrev) galleryPrev.addEventListener('click', () => showImage((currentIndex - 1 + currentImages.length) % currentImages.length));

    document.addEventListener('keydown', (e) => {
        if (galleryModal && !galleryModal.classList.contains('hidden')) {
            if (e.key === 'ArrowRight' && galleryNext) galleryNext.click();
            else if (e.key === 'ArrowLeft' && galleryPrev) galleryPrev.click();
            else if (e.key === 'Escape') closeModal();
        }
    });

    // ====== Анимация появления .reveal ======
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
