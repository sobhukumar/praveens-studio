// ==========================================================================
// GLOBAL.JS — Shared JS for all Inner Pages
// Import AFTER lenis, gsap, ScrollTrigger CDN scripts.
// DO NOT include on index.html (uses script.js instead).
// ==========================================================================

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// DOCUMENT READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Inner pages: never show preloader
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';

    // Initialize all shared functionality
    initNavigation();
    initMobileMenu();
    setActiveNavLink();
    initPageHero();
    initScrollReveals();
    initParallax();
    initChatbot();
    initCursor();
    ScrollTrigger.refresh();
});

// ==========================================================================
// NAVIGATION — Scroll behavior (same as script.js)
// ==========================================================================
function initNavigation() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: nav }
    });
}

// ==========================================================================
// MOBILE MENU
// ==========================================================================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('mobile-menu-close');

    if (!btn || !overlay) return;

    function openMenu() {
        overlay.classList.add('open');
        lenis.stop();
        // Animate hamburger lines
        const lines = btn.querySelectorAll('.line');
        if (lines.length >= 2) {
            gsap.to(lines[0], { rotation: 45, y: 7, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(lines[1], { rotation: -45, y: -7, duration: 0.3, ease: 'power2.inOut' });
        }
    }

    function closeMenu() {
        overlay.classList.remove('open');
        lenis.start();
        const lines = btn.querySelectorAll('.line');
        if (lines.length >= 2) {
            gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
        }
    }

    btn.addEventListener('click', () => {
        if (overlay.classList.contains('open')) closeMenu();
        else openMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close on overlay link click
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

// ==========================================================================
// ACTIVE NAV LINK
// ==========================================================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-list a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ==========================================================================
// PAGE HERO — Entry animation
// ==========================================================================
function initPageHero() {
    const hero = document.querySelector('.page-hero');
    if (!hero) return;

    const label = hero.querySelector('.page-hero-label');
    const lines = hero.querySelectorAll('.hero-line');
    const sub = hero.querySelector('.page-hero-sub');
    const cta = hero.querySelector('.page-hero-cta');

    const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } });

    if (label) {
        tl.to(label, { opacity: 1, y: 0, duration: 0.8 }, 0);
    }

    if (lines.length) {
        tl.to(lines, {
            y: '0%',
            duration: 1.1,
            stagger: 0.12,
        }, 0.2);
    }

    if (sub) {
        tl.to(sub, { opacity: 1, y: 0, duration: 0.9 }, 0.6);
    }

    if (cta) {
        tl.to(cta, { opacity: 1, y: 0, duration: 0.8 }, 0.8);
    }

    // Hero background parallax on scroll
    const heroBgImg = hero.querySelector('.hero-bg-img, .page-hero-bg img');
    if (heroBgImg) {
        gsap.to(heroBgImg, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2
            }
        });
    }
}

// ==========================================================================
// SCROLL REVEALS — Generic patterns used across all pages
// ==========================================================================
function initScrollReveals() {
    // Image block reveals (clip-path from bottom)
    gsap.utils.toArray('.reveal-img-block').forEach(block => {
        gsap.to(block, {
            clipPath: 'inset(0 0 0% 0)',
            ease: 'power4.out',
            duration: 1.4,
            scrollTrigger: {
                trigger: block,
                start: 'top 82%',
                toggleActions: 'play none none none'
            }
        });
        // Subtle scale-down on inner image for depth
        const img = block.querySelector('img');
        if (img) {
            gsap.fromTo(img,
                { scale: 1.15 },
                {
                    scale: 1,
                    duration: 1.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: block,
                        start: 'top 82%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    });

    // Fade-up text reveals
    gsap.utils.toArray('.fade-up').forEach(el => {
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Staggered children reveals
    gsap.utils.toArray('.stagger-parent').forEach(parent => {
        const children = parent.querySelectorAll('.stagger-child');
        if (!children.length) return;
        gsap.from(children, {
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: parent,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Section label + title combos
    gsap.utils.toArray('.section-label').forEach(label => {
        gsap.from(label, {
            x: -20,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: label,
                start: 'top 88%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ==========================================================================
// PARALLAX — Background images
// ==========================================================================
function initParallax() {
    gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: img.closest('[class]'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    });
}

// ==========================================================================
// AI CHATBOT UI (same pattern as script.js)
// ==========================================================================
function initChatbot() {

    const launcher = document.getElementById('chatbot-launcher');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('cb-close');
    const chatInput = windowEl ? windowEl.querySelector('.chatbot-input input') : null;
    const chatSend = windowEl ? windowEl.querySelector('.chatbot-input button') : null;
    const chatBody = windowEl ? windowEl.querySelector('.chatbot-body') : null;
    const quickActions = windowEl ? windowEl.querySelectorAll('.cb-quick-actions button') : null;

    if (!launcher || !windowEl || !closeBtn) return;

    launcher.addEventListener('click', (e) => {
        e.preventDefault();
        windowEl.classList.toggle('active');
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        windowEl.classList.remove('active');
    });

    if (!chatInput || !chatSend || !chatBody) return;

    let isBotTyping = false;

    let chatHistory = [
        {
            role: "system",
            content: "You are the AI assistant for Praveen Studio, a luxury wedding photography studio based in Raipur & Katgi, India. Available across India and beyond. You offer Wedding Photography, Cinematic Films, Pre-Wedding, Drone & FPV, Same Day Edit, and Live Streaming. Contact: email connect@praveenstudio.in, phone +91 83498 49790, YouTube: @praveenstudio8, Instagram: @couple_photoshot. Be helpful, professional, polite, and concise. Keep responses short and friendly. Do not use markdown, use plain text only."
        }
    ];

    // --- Typing dots indicator ---
    function createTypingIndicator() {
        const el = document.createElement('div');
        el.className = 'cb-message bot cb-typing-indicator';
        el.innerHTML = `<span></span><span></span><span></span>`;
        return el;
    }

    // --- Typewriter animation ---
    function typewriterEffect(container, text, onDone) {
        const p = document.createElement('p');
        container.innerHTML = '';
        container.appendChild(p);
        let i = 0;
        const speed = 18; // ms per character
        function tick() {
            if (i < text.length) {
                // handle newlines
                if (text[i] === '\n') {
                    p.appendChild(document.createElement('br'));
                } else {
                    p.appendChild(document.createTextNode(text[i]));
                }
                i++;
                chatBody.scrollTop = chatBody.scrollHeight;
                setTimeout(tick, speed);
            } else {
                if (onDone) onDone();
            }
        }
        tick();
    }

    async function sendUserMessage(text) {
        if (!text || isBotTyping) return;

        // Hide quick actions
        const qaContainer = chatBody.querySelector('.cb-quick-actions');
        if (qaContainer) qaContainer.style.display = 'none';

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'cb-message user';
        userMsg.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(userMsg);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        chatHistory.push({ role: "user", content: text });

        // Show typing dots
        isBotTyping = true;
        chatSend.disabled = true;
        chatInput.disabled = true;
        const typingEl = createTypingIndicator();
        chatBody.appendChild(typingEl);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: chatHistory
                })
            });

            if (!response.ok) {
                const errData = await response.text();
                console.error('Groq API Error:', response.status, errData);
                throw new Error('API error');
            }

            const data = await response.json();
            const reply = data.choices[0].message.content.trim();

            // Remove typing dots, add bot message
            typingEl.remove();
            const botMsg = document.createElement('div');
            botMsg.className = 'cb-message bot';
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;

            typewriterEffect(botMsg, reply, () => {
                isBotTyping = false;
                chatSend.disabled = false;
                chatInput.disabled = false;
                chatInput.focus();
            });

            chatHistory.push({ role: "assistant", content: reply });

        } catch (error) {
            console.error('Chatbot Error:', error);
            typingEl.remove();
            const botMsg = document.createElement('div');
            botMsg.className = 'cb-message bot';
            botMsg.innerHTML = `<p>Sorry, I'm having trouble right now. Please <a href="contact.html">contact us directly</a> or call <strong>+91 83498 49790</strong>.</p>`;
            chatBody.appendChild(botMsg);
            isBotTyping = false;
            chatSend.disabled = false;
            chatInput.disabled = false;
        }
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    chatSend.addEventListener('click', () => sendUserMessage(chatInput.value.trim()));
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendUserMessage(chatInput.value.trim());
    });

    if (quickActions) {
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => sendUserMessage(btn.textContent.trim()));
        });
    }
}

// ==========================================================================
// CUSTOM CURSOR
// ==========================================================================
function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor || window.innerWidth <= 1024) return;

    let xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'none' });
    let yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'none' });

    window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    document.querySelectorAll('.portfolio-masonry-item, .journal-card, .story-card-item, .featured-card').forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('active'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// ==========================================================================
// SERVICE HOVER IMAGE (used on pages that have service rows)
// ==========================================================================
function initServiceHover() {
    const rows = document.querySelectorAll('.service-row[data-img]');
    const hoverContainer = document.querySelector('.service-hover-img');
    if (!rows.length || !hoverContainer) return;

    const hoverImg = hoverContainer.querySelector('img');
    let xTo = gsap.quickTo(hoverContainer, 'x', { duration: 0.6, ease: 'power3' });
    let yTo = gsap.quickTo(hoverContainer, 'y', { duration: 0.6, ease: 'power3' });

    window.addEventListener('mousemove', (e) => { xTo(e.clientX); yTo(e.clientY); });

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            if (hoverImg) hoverImg.src = row.getAttribute('data-img');
            hoverContainer.classList.add('active');
        });
        row.addEventListener('mouseleave', () => hoverContainer.classList.remove('active'));
    });
}

// ==========================================================================
// STAT COUNTER ANIMATION
// ==========================================================================
function initStatCounters() {
    gsap.utils.toArray('.stat-number[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        gsap.fromTo({ val: 0 },
            { val: 0 },
            {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function() {
                    el.textContent = Math.round(this.targets()[0].val) + suffix;
                },
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
}

// Call stat counters if present
document.addEventListener('DOMContentLoaded', () => {
    initStatCounters();
    initServiceHover();
});

// ==========================================================================
// PORTFOLIO NAVBAR DROPDOWN — builds from STORIES data
// ==========================================================================
function initPortfolioDropdown() {
    // Only run if STORIES is available (stories.js loaded) and dropdown exists
    if (typeof STORIES === 'undefined') return;

    // ── Desktop Dropdown ─────────────────────────────────────────────────
    var ddWedding    = document.getElementById('dropdown-wedding');
    var ddPrewedding = document.getElementById('dropdown-prewedding');

    function buildDropdownItem(story) {
        var a = document.createElement('a');
        a.href = 'portfolio-story.html?story=' + encodeURIComponent(story.slug);
        a.className = 'nav-dropdown-item';
        a.setAttribute('role', 'menuitem');
        a.innerHTML =
            '<span class="nav-dropdown-couple">' + story.coupleNames + '</span>' +
            '<span class="nav-dropdown-location">' + story.location + '</span>';
        return a;
    }

    if (ddWedding && ddPrewedding) {
        STORIES.forEach(function(story) {
            var el = buildDropdownItem(story);
            if (story.type === 'wedding') {
                ddWedding.appendChild(el);
            } else {
                ddPrewedding.appendChild(el);
            }
        });
    }

    // ── Mobile Accordion ─────────────────────────────────────────────────
    var mobWedding    = document.getElementById('mob-dropdown-wedding');
    var mobPrewedding = document.getElementById('mob-dropdown-prewedding');

    function buildMobItem(story) {
        var a = document.createElement('a');
        a.href = 'portfolio-story.html?story=' + encodeURIComponent(story.slug);
        a.className = 'mob-story-link';
        a.innerHTML =
            '<span class="mob-story-couple">' + story.coupleNames + '</span>' +
            '<span class="mob-story-location">' + story.location + '</span>';
        return a;
    }

    if (mobWedding && mobPrewedding) {
        STORIES.forEach(function(story) {
            var el = buildMobItem(story);
            if (story.type === 'wedding') {
                mobWedding.appendChild(el);
            } else {
                mobPrewedding.appendChild(el);
            }
        });
    }

    // ── Mobile accordion toggle ────────────────────────────────────────
    var accordionBtns = document.querySelectorAll('.mob-accordion-btn');
    accordionBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var container = btn.closest('.mob-has-accordion');
            var body = container ? container.querySelector('.mob-accordion-body') : document.getElementById('mob-accordion-body');
            if (!body) return;

            var isOpen = body.classList.contains('open');
            body.classList.toggle('open', !isOpen);
            btn.classList.toggle('open', !isOpen);
            btn.setAttribute('aria-expanded', (!isOpen).toString());
        });
    });

    // ── Desktop Hover Persistence (grace period buffer) ─────────────────
    var navDropContainers = document.querySelectorAll('.nav-has-dropdown');
    navDropContainers.forEach(function(container) {
        var timer;
        var dd = container.querySelector('.nav-dropdown');
        if (!dd) return;

        function openMenu() {
            clearTimeout(timer);
            container.classList.add('is-open');
        }

        function closeMenu() {
            timer = setTimeout(function() {
                container.classList.remove('is-open');
            }, 250);
        }

        container.addEventListener('mouseenter', openMenu);
        container.addEventListener('mouseleave', closeMenu);
        dd.addEventListener('mouseenter', openMenu);
        dd.addEventListener('mouseleave', closeMenu);
    });

    // ── Prevent Lenis scroll hijacking and enable smooth mouse wheel ───
    var ddInners = document.querySelectorAll('.nav-dropdown-inner');
    ddInners.forEach(function(inner) {
        inner.setAttribute('data-lenis-prevent', 'true');
        var parentDD = inner.closest('.nav-dropdown');
        if (parentDD) parentDD.setAttribute('data-lenis-prevent', 'true');

        inner.addEventListener('wheel', function(e) {
            e.stopPropagation();
            var maxScroll = inner.scrollHeight - inner.clientHeight;
            if (maxScroll <= 0) return;

            // Smooth scroll delta
            inner.scrollTop += e.deltaY;
            e.preventDefault();
        }, { passive: false });
    });

    // ── Keyboard: open/close dropdown with Enter/Space/Escape ─────────
    var chevron = document.querySelector('.nav-chevron');
    var dropdown = document.getElementById('nav-dropdown');
    if (chevron && dropdown) {
        chevron.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                var expanded = chevron.getAttribute('aria-expanded') === 'true';
                chevron.setAttribute('aria-expanded', (!expanded).toString());
                var container = chevron.closest('.nav-has-dropdown');
                if (container) container.classList.toggle('is-open', !expanded);
            }
            if (e.key === 'Escape') {
                chevron.setAttribute('aria-expanded', 'false');
                var c = chevron.closest('.nav-has-dropdown');
                if (c) c.classList.remove('is-open');
                chevron.blur();
            }
        });
    }
}

// Also initialize the portfolio grid cards if on portfolio.html
function initPortfolioGrid() {
    if (typeof STORIES === 'undefined') return;

    var grids = {
        all:        document.getElementById('stories-grid-all'),
        wedding:    document.getElementById('stories-grid-wedding'),
        prewedding: document.getElementById('stories-grid-prewedding'),
    };

    if (!grids.all && !grids.wedding) return;  // Not on portfolio page

    function buildCard(story) {
        var a = document.createElement('a');
        a.href = 'portfolio-story.html?story=' + encodeURIComponent(story.slug);
        a.className = 'story-card';
        var captionHtml = story.caption
            ? '<p class="story-card-caption">' + story.caption + '</p>'
            : '';
        a.innerHTML =
            '<div class="story-card-img-wrap">' +
              '<img src="' + story.coverImage + '" alt="' + story.coupleNames + ' — ' + (story.type === 'wedding' ? 'Wedding' : 'Pre-Wedding') + ' Photography by Praveen Studio" loading="lazy">' +
              '<div class="story-card-img-overlay"></div>' +
              '<div class="story-card-view-label">VIEW STORY &rarr;</div>' +
            '</div>' +
            '<div class="story-card-body">' +
              '<div class="story-card-names">' + story.coupleNames + '</div>' +
              captionHtml +
              '<div class="story-card-location">' + story.location + '</div>' +
            '</div>';
        return a;
    }

    STORIES.forEach(function(story) {
        if (grids.all)        grids.all.appendChild(buildCard(story));
        if (story.type === 'wedding'     && grids.wedding)    grids.wedding.appendChild(buildCard(story));
        if (story.type === 'pre-wedding' && grids.prewedding) grids.prewedding.appendChild(buildCard(story));
    });
}

// Hook into DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initPortfolioDropdown();
    initPortfolioGrid();
});
