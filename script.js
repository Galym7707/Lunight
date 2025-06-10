document.addEventListener('DOMContentLoaded', function() {
    // --- Логика для аккордеона FAQ ---
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        if (!header || !content) return;
        header.addEventListener('click', () => {
            const icon = header.querySelector('svg');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            // Закрываем все
            document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = '0px');
            document.querySelectorAll('.accordion-header svg').forEach(svg => svg.style.transform = 'rotate(0deg)');
            // Открываем текущий, если он был закрыт
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                if(icon) icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // --- Логика для переключения темы ---
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

    // --- Анимации при прокрутке ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Логика для анкеты-бота ---
    const openBtn = document.getElementById('open-brief-modal');
    const closeBtn = document.getElementById('close-brief-modal');
    const modal = document.getElementById('brief-modal');
    const modalContent = document.getElementById('brief-modal-content');
    
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budget-value');

    if(budgetSlider && budgetValue) {
        budgetSlider.addEventListener('input', (e) => {
            budgetValue.textContent = `~${Number(e.target.value).toLocaleString('ru-RU')}₽`;
        });
    }

    const toggleModal = (show) => {
        if (show) {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);
        } else {
            modal.classList.add('opacity-0');
            modalContent.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };

    if(openBtn) openBtn.addEventListener('click', () => toggleModal(true));
    if(closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));
    if(modal) modal.addEventListener('click', (e) => {
        if(e.target === modal) toggleModal(false);
    });
});