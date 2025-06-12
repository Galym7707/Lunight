document.addEventListener('DOMContentLoaded', function() {

    // --- Объект с переводами ---
    const translations = {
        en: {
            nav_services: "Services", nav_portfolio: "Portfolio", nav_contact: "Contact", nav_contact_us: "Contact us",
            hero_title: "Lunight", hero_subtitle: "Experts at your side.",
            services_secure: "Secure", services_custom_code: "Custom code", services_fast: "Fast", services_quick_launch: "Quick launch", services_support: "Support", services_reliable_care: "Reliable care",
            portfolio_title: "Our Portfolio",
            certificates_title: "Certificates",
            cert_1: "1. Awesome Certificate", cert_2: "2. Pro Coder Diploma", cert_3: "3. Master of Frameworks", cert_4: "4. UI/UX Ninja Award", cert_5: "5. Legendary Developer",
            faq_q1: "What services does Lunight offer?", faq_a1: "We offer a wide range of services including custom software development, web application design, mobile app creation, and ongoing technical support to ensure your project's success.",
            faq_q2: "What is your project workflow?", faq_a2: "Our workflow is collaborative and transparent. We start with a detailed discovery phase, followed by design, development, testing, and deployment, with constant client communication.",
            testimonials_title: "What clients say", testimonials_subtitle: "Trusted by businesses worldwide.",
            testimonial_1: `"Lorem ipsum dolor sit amet..."`, testimonial_2: `"Fusce varius, ligula ut sodales..."`, testimonial_3: `"Pellentesque habitant morbi..."`,
            contact_title: "Contact Lunight", contact_subtitle: "Let's discuss your project",
            form_name: "Name", form_email: "Email", form_message: "Message", form_submit: "Submit",
            footer_services: "Services", footer_development: "Development", footer_consulting: "Consulting", footer_support: "Support",
            footer_portfolio: "Portfolio", footer_case_studies: "Case Studies", footer_clients: "Clients", footer_testimonials: "Testimonials",
            footer_company: "Company", footer_about: "About", footer_careers: "Careers", footer_blog: "Blog",
            footer_contact: "Contact", footer_email: "Email", footer_locations: "Locations", footer_faq: "FAQ",
        },
        ru: {
            nav_services: "Услуги", nav_portfolio: "Портфолио", nav_contact: "Контакты", nav_contact_us: "Связаться",
            hero_title: "Lunight", hero_subtitle: "Эксперты на вашей стороне.",
            services_secure: "Безопасно", services_custom_code: "Кастомный код", services_fast: "Быстро", services_quick_launch: "Быстрый запуск", services_support: "Поддержка", services_reliable_care: "Надежная забота",
            portfolio_title: "Наше Портфолио",
            certificates_title: "Сертификаты",
            cert_1: "1. Сертификат специалиста", cert_2: "2. Диплом Pro Coder", cert_3: "3. Магистр фреймворков", cert_4: "4. Награда UI/UX Ninja", cert_5: "5. Легендарный разработчик",
            faq_q1: "Какие услуги предлагает Lunight?", faq_a1: "Мы предлагаем широкий спектр услуг, включая разработку программного обеспечения на заказ, дизайн веб-приложений, создание мобильных приложений и постоянную техническую поддержку.",
            faq_q2: "Каков ваш рабочий процесс?", faq_a2: "Наш рабочий процесс является совместным и прозрачным. Мы начинаем с детального этапа исследования, за которым следуют проектирование, разработка, тестирование и развертывание.",
            testimonials_title: "Что говорят клиенты", testimonials_subtitle: "Нам доверяют компании по всему миру.",
            testimonial_1: `"Lorem ipsum dolor sit amet..."`, testimonial_2: `"Fusce varius, ligula ut sodales..."`, testimonial_3: `"Pellentesque habitant morbi..."`,
            contact_title: "Свяжитесь с Lunight", contact_subtitle: "Давайте обсудим ваш проект",
            form_name: "Имя", form_email: "Почта", form_message: "Сообщение", form_submit: "Отправить",
            footer_services: "Услуги", footer_development: "Разработка", footer_consulting: "Консалтинг", footer_support: "Поддержка",
            footer_portfolio: "Портфолио", footer_case_studies: "Кейсы", footer_clients: "Клиенты", footer_testimonials: "Отзывы",
            footer_company: "Компания", footer_about: "О нас", footer_careers: "Карьера", footer_blog: "Блог",
            footer_contact: "Контакты", footer_email: "Почта", footer_locations: "Локации", footer_faq: "FAQ",
        },
        kz: {
            nav_services: "Қызметтер", nav_portfolio: "Портфолио", nav_contact: "Байланыс", nav_contact_us: "Байланысу",
            hero_title: "Lunight", hero_subtitle: "Сарапшылар сіздің қасыңызда.",
            services_secure: "Қауіпсіз", services_custom_code: "Жеке код", services_fast: "Жылдам", services_quick_launch: "Жылдам іске қосу", services_support: "Қолдау", services_reliable_care: "Сенімді қамқорлық",
            portfolio_title: "Біздің Портфолио",
            certificates_title: "Сертификаттар",
            cert_1: "1. Керемет сертификат", cert_2: "2. Pro Coder дипломы", cert_3: "3. Фреймворктер магистрі", cert_4: "4. UI/UX Ninja марапаты", cert_5: "5. Аты аңызға айналған әзірлеуші",
            faq_q1: "Lunight қандай қызметтерді ұсынады?", faq_a1: "Біз бағдарламалық жасақтаманы тапсырыс бойынша әзірлеуді, веб-қосымшалардың дизайнын, мобильді қосымшаларды жасауды және жобаңыздың сәттілігін қамтамасыз ету үшін тұрақты техникалық қолдауды қоса алғанда, қызметтердің кең ауқымын ұсынамыз.",
            faq_q2: "Сіздің жұмыс процесіңіз қандай?", faq_a2: "Біздің жұмыс процесіміз бірлескен және ашық. Біз егжей-тегжейлі зерттеу кезеңінен бастаймыз, содан кейін жобалау, әзірлеу, тестілеу және клиентпен тұрақты байланыс орнату арқылы орналастыру.",
            testimonials_title: "Клиенттер не дейді", testimonials_subtitle: "Бізге бүкіл әлем бойынша компаниялар сенеді.",
            testimonial_1: `"Lorem ipsum dolor sit amet..."`, testimonial_2: `"Fusce varius, ligula ut sodales..."`, testimonial_3: `"Pellentesque habitant morbi..."`,
            contact_title: "Lunight-пен байланысыңыз", contact_subtitle: "Жобаңызды талқылайық",
            form_name: "Аты", form_email: "Пошта", form_message: "Хабарлама", form_submit: "Жіберу",
            footer_services: "Қызметтер", footer_development: "Әзірлеу", footer_consulting: "Консалтинг", footer_support: "Қолдау",
            footer_portfolio: "Портфолио", footer_case_studies: "Кейстер", footer_clients: "Клиенттер", footer_testimonials: "Пікірлер",
            footer_company: "Компания", footer_about: "Біз туралы", footer_careers: "Мансап", footer_blog: "Блог",
            footer_contact: "Байланыс", footer_email: "Пошта", footer_locations: "Орналасқан жерлер", footer_faq: "ЖҚС",
        }
    };

    const languages = ['en', 'ru', 'kz'];
    let currentLangIndex = 0;

    const langSwitcher = document.getElementById('lang-switcher');

    // --- Функция для смены языка ---
    const setLanguage = (lang) => {
        // Проверяем, существует ли язык в наших переводах
        if (!translations[lang]) return;

        // Обновляем текст
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.innerHTML = translations[lang][key];
                    el.style.opacity = '1';
                }, 150);
            }
        });

        // Обновляем плейсхолдеры
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
             if (translations[lang] && translations[lang][key]) {
                 el.placeholder = translations[lang][key];
             }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        
        // Обновляем текст кнопки
        if(langSwitcher) langSwitcher.textContent = lang.toUpperCase();
        
        // Находим индекс текущего языка для следующего переключения
        currentLangIndex = languages.indexOf(lang);

        // --- Смена языка в Tawk.to ---
        if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
            window.Tawk_API.setAttributes({ 'language': lang }, function(error){
                if (error) console.error('Tawk.to setAttributes error:', error);
            });
        }
    };

    // --- Логика для переключателя языка ---
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % languages.length;
            const newLang = languages[currentLangIndex];
            setLanguage(newLang);
        });
    }

    // --- Изначальная установка языка при загрузке страницы ---
    const initialLang = localStorage.getItem('language') || 'en';
    setLanguage(initialLang);
    
    // --- Остальные скрипты ---
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        if (!header || !content) return;
        header.addEventListener('click', () => {
            const icon = header.querySelector('svg');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = '0px');
            document.querySelectorAll('.accordion-header svg').forEach(svg => svg.style.transform = 'rotate(0deg)');
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                if(icon) icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        const applyTheme = (theme) => {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            if(themeToggleLightIcon) themeToggleLightIcon.classList.toggle('hidden', theme !== 'light');
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.toggle('hidden', theme !== 'dark');
        };
        const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(currentTheme);
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
