// ==========================================================================
// INITIALIZATION & SETUP
// ==========================================================================
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis Smooth Scroll with Responsive, Silky Smooth Settings
const lenis = new Lenis({
    duration: 0.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.8,
    wheelMultiplier: 1.05,
    infinite: false,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
// CRITICAL: Keep lagSmoothing ENABLED so frame drops are smoothly compensated!
gsap.ticker.lagSmoothing(500, 33);

// ==========================================================================
// PRELOADER & FAST INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');

    // Start all site animations immediately so DOM is interactive & ready
    initAnimations();

    if (!preloader) return;

    // Fast session-based preloader dismissal so page loads instantly
    const hasSeenPreloader = sessionStorage.getItem('preloader_shown');
    if (hasSeenPreloader) {
        preloader.style.display = 'none';
        return;
    }

    sessionStorage.setItem('preloader_shown', 'true');

    // Quick luxury brand entrance: 0.4s brief intro then smooth fade
    const progressBar = document.querySelector('.preloader-progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar) progressBar.style.width = '100%';
    if (progressText) progressText.innerText = '100%';

    gsap.to(preloader, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        delay: 0.3,
        onComplete: () => {
            preloader.style.display = 'none';
            ScrollTrigger.refresh();
        }
    });
});

// ==========================================================================
// MAIN ANIMATIONS INIT
// ==========================================================================
function initAnimations() {
    ScrollTrigger.refresh(); // Ensure all measurements are correct after fonts load
    
    initNavigation();
    initMobileMenu();
    initPortfolioDropdown();
    initHeroParallax();
    initIntro();
    initReveal();
    initPortfolio();
    initStack();
    initLegacy();
    initServices();
    initStatement();
    initCursor();
    initChatbot();
}

// ==========================================================================
// PORTFOLIO NAVBAR DROPDOWN — builds couple names from STORIES data
// ==========================================================================
function initPortfolioDropdown() {
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

    // ── Prevent Lenis scroll hijacking ───────────────────────────────
    var ddInners = document.querySelectorAll('.nav-dropdown-inner, .mob-accordion-body, .mobile-menu-overlay');
    ddInners.forEach(function(inner) {
        inner.setAttribute('data-lenis-prevent', 'true');
        var parentDD = inner.closest('.nav-dropdown');
        if (parentDD) parentDD.setAttribute('data-lenis-prevent', 'true');

        inner.addEventListener('wheel', function(e) {
            e.stopPropagation();
            var maxScroll = inner.scrollHeight - inner.clientHeight;
            if (maxScroll <= 0) return;
            inner.scrollTop += e.deltaY;
            e.preventDefault();
        }, { passive: false });
    });

    // ── Keyboard: open/close dropdown ─────────────────────────────────
    var chevron = document.querySelector('.nav-chevron');
    if (chevron) {
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

// ==========================================================================
// NAVIGATION
// ==========================================================================
function initNavigation() {
    const nav = document.getElementById('main-nav');
    
    ScrollTrigger.create({
        start: 'top -100',
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

    btn.addEventListener('click', () => { if (overlay.classList.contains('open')) closeMenu(); else openMenu(); });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}


// ==========================================================================
// 3D PARALLAX HERO
// ==========================================================================
function initHeroParallax() {
    const stack = document.querySelector('.hero-3d-stack');
    const cards = document.querySelectorAll('.hero-card');

    if (!stack || cards.length === 0) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
        // Desktop animation
        let xTo = gsap.quickTo(stack, "rotationY", {duration: 0.8, ease: "power3"});
        let yTo = gsap.quickTo(stack, "rotationX", {duration: 0.8, ease: "power3"});

        const mouseMoveHandler = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            xTo(x * 15);
            yTo(-y * 15);
        };
        window.addEventListener('mousemove', mouseMoveHandler);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });

        tl.to('.hero-content-left', { y: -100, opacity: 0, ease: 'none' }, 0);
        tl.to('.hero-card.card-1', { y: -100, rotateZ: -10 }, 0)
          .to('.hero-card.card-2', { x: 100, y: -50, rotateZ: 5 }, 0)
          .to('.hero-card.card-3', { x: -100, y: 50, rotateZ: -5 }, 0);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    });

    mm.add("(max-width: 900px)", () => {
        // Mobile animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });

        tl.to('.hero-content-left', { y: -50, opacity: 0, ease: 'none' }, 0);
        
        // Subtle movement for cards
        tl.to('.hero-card.card-1', { scale: 1, y: -20, rotateZ: 2 }, 0)
          .to('.hero-card.card-2', { scale: 0.95, x: 20, y: -10, rotateZ: 4 }, 0)
          .to('.hero-card.card-3', { scale: 0.9, x: -20, y: 10, rotateZ: -2 }, 0);
    });
}

// ==========================================================================
// SECTION 02: PHILOSOPHY SPLIT ANIMATION
// ==========================================================================
function initIntro() {
    const section = document.querySelector('.intro-section');
    if (!section) return;

    // Split text reveal timeline triggered on scroll
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });

    // 1. Eyebrow slides up
    tl.to('#intro-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    // 2. Editorial typography lines unclip
    tl.to('.iph-line, .iph-italic', {
        clipPath: 'inset(0% 0% 0% 0%)',
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out'
    }, '-=0.5');

    // 3. Body description & statistics fade up
    tl.to('#intro-body', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out'
    }, '-=0.4');

    tl.to('#intro-stats', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out'
    }, '-=0.5');

    // 4. Portrait photo unclips from bottom
    tl.to('#intro-img-clip', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.1,
        ease: 'power3.inOut'
    }, 0.2);

    tl.to('.intro-img-caption', {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.3');

    // 5. Parallax on portrait image during scroll
    gsap.to('#intro-portrait', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
}

// ==========================================================================
// SECTION 03: CINEMATIC PHOTO REVEAL (GSAP SCROLL-PINNED)
// ==========================================================================
function initReveal() {
    const section = document.querySelector('.reveal-section');
    const container = document.querySelector('.reveal-container');
    if (!section || !container) return;

    const photoWrap = document.getElementById('revealPhotoWrap');
    const mainImg = document.getElementById('revealMainImg');
    const overlay = document.getElementById('revealOverlay');
    const eyebrow = document.getElementById('revealEyebrow');
    const words = document.querySelectorAll('.rh-word');
    const subtext = document.getElementById('revealSubtext');
    const counter = document.getElementById('revealCounter');
    const rcNum = document.getElementById('rcNum');
    const brackets = document.querySelectorAll('.reveal-bracket');

    // Master Scroll-pinned Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            pin: container,
            anticipatePin: 1
        }
    });

    // 1. Frame brackets fade in immediately
    if (brackets.length) {
        tl.to(brackets, {
            opacity: 1,
            duration: 0.15,
            ease: 'power1.out'
        }, 0);
    }

    // 2. Center photo aperture opens via clip-path (inset 50% 25% -> inset 0%)
    if (photoWrap) {
        tl.to(photoWrap, {
            clipPath: 'inset(0% 0%)',
            duration: 0.7,
            ease: 'power2.inOut'
        }, 0.05);
    }

    // 3. Main photo pulls back from scale 1.14 to 1.0 (cinematic slow zoom)
    if (mainImg) {
        tl.to(mainImg, {
            scale: 1,
            duration: 0.7,
            ease: 'none'
        }, 0.05);
    }

    // 4. Dark overlay softens from 0.55 to 0.25 so photo shines through
    if (overlay) {
        tl.to(overlay, {
            opacity: 0.25,
            duration: 0.6,
            ease: 'none'
        }, 0.1);
    }

    // 5. Eyebrow fades & slides into focus
    if (eyebrow) {
        tl.to(eyebrow, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
        }, 0.2);
    }

    // 6. Editorial headline words stagger in dramatically
    if (words.length) {
        tl.to(words, {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.35,
            ease: 'power3.out'
        }, 0.25);
    }

    // 7. Loving subtext appears
    if (subtext) {
        tl.to(subtext, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        }, 0.42);
    }

    // 8. Heritage counter counts up 0 -> 35+ Years
    if (counter && rcNum) {
        tl.to(counter, {
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out'
        }, 0.3);

        const countProxy = { val: 0 };
        tl.to(countProxy, {
            val: 35,
            duration: 0.5,
            ease: 'power2.out',
            onUpdate: () => {
                rcNum.textContent = Math.round(countProxy.val);
            }
        }, 0.3);
    }

    // 9. Subtle out-fade toward end of scroll so transition to Portfolio feels natural
    tl.to([eyebrow, subtext, counter], {
        opacity: 0.7,
        duration: 0.15,
        ease: 'none'
    }, 0.85);
}

// ==========================================================================
// SECTION 04: PORTFOLIO HORIZONTAL SCROLL & CARD REVEALS
// ==========================================================================
function initPortfolio() {
    const section = document.querySelector('.portfolio-section');
    const track = document.querySelector('.portfolio-track');
    const stickyWrapper = document.querySelector('.portfolio-sticky-wrapper');
    const cards = document.querySelectorAll('.portfolio-item');
    if (!section || !track || !stickyWrapper) return;

    // Calculate exact scroll distance dynamically
    function getScrollAmount() {
        const trackWidth = track.scrollWidth;
        const pad = window.innerWidth > 768 ? 100 : 40;
        return -(trackWidth - window.innerWidth + pad);
    }

    // Card entrance animation on first approach
    gsap.fromTo(cards, 
        { y: 35, opacity: 0.7 },
        {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Pinned horizontal slide with scrub across desktop & mobile
    const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none'
    });

    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => '+=' + Math.abs(getScrollAmount()),
        pin: stickyWrapper,
        animation: tween,
        scrub: 1.1,
        invalidateOnRefresh: true,
        anticipatePin: 1
    });
}

// ==========================================================================
// 3D PHOTO STACK
// ==========================================================================
function initStack() {
    const cards = document.querySelectorAll('.stack-card');
    
    // Enhance 3D perspective
    gsap.set('.stack-scene', { perspective: 2500, transformStyle: "preserve-3d" });

    cards.forEach((card, i) => {
        gsap.set(card, {
            z: -i * 100, // greater depth
            y: -i * 30,
            rotationX: 15,
            rotationY: i % 2 === 0 ? 5 : -5, // subtle alternating tilts
            scale: 1 - (i * 0.05),
            transformStyle: "preserve-3d"
        });
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.stack-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: '.stack-sticky-container' // pin it while animating through the stack
        }
    });

    // Fade in the header gently
    tl.to('.stack-header', { opacity: 1, duration: 0.3 }, 0);

    cards.forEach((card, i) => {
        if (i < cards.length - 1) {
            tl.to(card, {
                y: -1200,
                z: 300,
                rotationZ: (Math.random() - 0.5) * 30,
                rotationX: 0,
                opacity: 0,
                ease: 'power1.inOut'
            }, i * 0.8);
        } else {
            // Final card moves forward slightly
            tl.to(card, {
                z: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                ease: 'power1.inOut'
            }, i * 0.8);
        }
    });
}

// ==========================================================================
// LEGACY
// ==========================================================================
function initLegacy() {
    gsap.to('.timeline-line', {
        height: '0%',
        scrollTrigger: {
            trigger: '.legacy-section',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });

    gsap.to('.l-bg-1', {
        opacity: 0.3,
        y: -50,
        scrollTrigger: {
            trigger: '.legacy-section',
            start: 'top bottom',
            end: 'center center',
            scrub: 1
        }
    });

    gsap.to('.l-bg-2', {
        opacity: 0.3,
        y: 50,
        scrollTrigger: {
            trigger: '.legacy-section',
            start: 'center center',
            end: 'bottom top',
            scrub: 1
        }
    });
}

// ==========================================================================
// SERVICES
// ==========================================================================
function initServices() {
    const rows = document.querySelectorAll('.service-row');
    const hoverImgContainer = document.querySelector('.service-hover-img');
    const hoverImg = hoverImgContainer.querySelector('img');

    // Follow mouse using GSAP quickTo for better performance
    let xTo = gsap.quickTo(hoverImgContainer, "x", {duration: 0.6, ease: "power3"});
    let yTo = gsap.quickTo(hoverImgContainer, "y", {duration: 0.6, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const imgSrc = row.getAttribute('data-img');
            if(imgSrc) {
                hoverImg.src = imgSrc;
                hoverImgContainer.classList.add('active');
            }
        });

        row.addEventListener('mouseleave', () => {
            hoverImgContainer.classList.remove('active');
        });
    });
}

// ==========================================================================
// CINEMATIC STATEMENT
// ==========================================================================
function initStatement() {
    gsap.to('.statement-text .word', {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.statement-section',
            start: 'top 60%',
            end: 'center center',
            scrub: 1
        }
    });
    
    gsap.to('.statement-bg', {
        yPercent: 20,
        scrollTrigger: {
            trigger: '.statement-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
}

// ==========================================================================
// CUSTOM CURSOR
// ==========================================================================
function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;
    
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    let xTo = gsap.quickTo(cursor, "x", {duration: 0.1, ease: "none"});
    let yTo = gsap.quickTo(cursor, "y", {duration: 0.1, ease: "none"});

    window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    }, { passive: true });

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// ==========================================================================
// AI CHATBOT UI
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
        const speed = 18;
        function tick() {
            if (i < text.length) {
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

            // Remove typing dots, add bot message with typewriter
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
            console.error('=== CHATBOT ERROR ===');
            console.error('Type:', error.name);
            console.error('Message:', error.message);
            console.error('Full error:', error);
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
// HOME PAGE FORM WHATSAPP INTEGRATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const homeForm = document.getElementById('home-contact-form');
    if (homeForm) {
        homeForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('hc-name').value.trim();
            const phone = document.getElementById('hc-phone').value.trim();
            const email = document.getElementById('hc-email').value.trim();
            const service = document.getElementById('hc-service').value;
            const date = document.getElementById('hc-date').value;
            const location = document.getElementById('hc-location').value.trim();
            const message = document.getElementById('hc-message').value.trim();

            if (phone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            const dateFormatted = date
                ? new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'Not specified';

            let wa = `*New Inquiry — Praveen Studio* 🌸\n\n`;
            wa += `*Name:* ${name}\n`;
            wa += `*Phone:* ${phone}\n`;
            if (email) wa += `*Email:* ${email}\n`;
            if (service) wa += `*Service:* ${service}\n`;
            wa += `*Event Date:* ${dateFormatted}\n`;
            if (location) wa += `*Location:* ${location}\n`;
            if (message) wa += `\n*Message:*\n${message}\n`;
            wa += `\n_Sent via Homepage_`;

            const encoded = encodeURIComponent(wa);
            const waNumber = '918349849790';

            const btn = document.getElementById('hc-submit-btn');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> SENDING...';

            setTimeout(() => {
                window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
                btn.disabled = false;
                btn.innerHTML = originalText;
                homeForm.reset();
            }, 600);
        });
    }
});

