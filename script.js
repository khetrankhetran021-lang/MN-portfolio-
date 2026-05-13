// Initialize Lucide Icons
lucide.createIcons();

// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlur.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
});

// Interactive Cursor effects
const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4)';
        cursor.style.background = 'rgba(255, 107, 0, 0.3)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'var(--accent)';
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Before & After Slider Logic
const compareSlider = document.getElementById('compareSlider');
const beforeImg = document.querySelector('.before-img');
const sliderHandle = document.querySelector('.slider-handle');

if (compareSlider) {
    compareSlider.addEventListener('input', (e) => {
        const value = e.target.value + '%';
        beforeImg.style.width = value;
        sliderHandle.style.left = value;
    });
}

// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Add reveal classes to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(section);
});

// Custom logic for the reveal effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Mobile Menu Toggle (Simplified placeholder)
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        alert('Menu functionality for Muhammad Nadeem Portfolio');
        // Real implementation would toggle a mobile menu overlay
    });
}

// Stats counter animation
const stats = document.querySelectorAll('.stat-item h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.innerText);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.innerText = target + '+';
                    clearInterval(timer);
                } else {
                    entry.target.innerText = Math.floor(current) + '+';
                }
            }, 30);
            statsObserver.unobserve(entry.target);
        }
    });
});

stats.forEach(stat => statsObserver.observe(stat));

console.log("Nadeem Grfx Premium Portfolio Loaded Successfully");
