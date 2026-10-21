// ==========================================================================
// INITIALIZATION & SETUP
// ==========================================================================
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

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// PRELOADER & FONT LOADING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.preloader-progress-bar');
    const progressText = document.getElementById('progress-text');
    const logoImg = document.querySelector('.preloader-logo');
    const logo = document.querySelector('.preloader-title');
    const subtitle = document.querySelector('.preloader-subtitle');

    // Wait for fonts to be ready before removing preloader or initializing animations
    document.fonts.ready.then(() => {
        // Only run preloader on home page
        const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        if (!isHomePage) {
            preloader.style.display = 'none';
            initAnimations();
            return;
        }

        // Only show preloader once per browser session
        const hasSeenPreloader = sessionStorage.getItem('preloader_shown');
        if (hasSeenPreloader) {
            preloader.style.display = 'none';
            initAnimations();
            return;
        }

        // Mark preloader as shown for this session
        sessionStorage.setItem('preloader_shown', 'true');

        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 8) + 1;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = `${progress}%`;
            progressText.innerText = `${progress}%`;

            if (progress === 100) {
                clearInterval(interval);
                
                // Preloader Exit Animation
                const tl = gsap.timeline({
                    onComplete: () => {
                        preloader.style.display = 'none';
                        initAnimations();
                    }
                });

                tl.to([logoImg, logo, subtitle, progressBar.parentElement, progressText.parentElement], {
                    y: -30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.inOut",
                    delay: 0.2
                })
                .to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
            }
        }, 30); // 30ms interval ensures around 1.5-2 seconds duration
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
    var ddInners = document.querySelectorAll('.nav-dropdown-inner');
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
// INTRODUCTION
// ==========================================================================
function initIntro() {
    gsap.to('#intro-large-text', {
        xPercent: -30,
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.img-left img', {
        yPercent: -20,
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.img-right img', {
        yPercent: 20,
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
}

// ==========================================================================
// CINEMATIC IMAGE REVEAL
// ==========================================================================
function initReveal() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.reveal-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: '.reveal-container'
        }
    });

    tl.to('.reveal-img-wrapper', {
        clipPath: 'inset(0vh 0vw 0vh 0vw round 0px)',
        ease: 'none'
    })
    .to('.reveal-img', {
        scale: 1,
        ease: 'none'
    }, "<")
    .to('.reveal-overlay', {
        opacity: 1,
        ease: 'none'
    }, "<0.3") // Start overlay a bit later
    .to('.reveal-text', {
        opacity: 1,
        ease: 'none'
    }, "<0.1");
}

// ==========================================================================
// PORTFOLIO HORIZONTAL SCROLL
// ==========================================================================
function initPortfolio() {
    const track = document.querySelector('.portfolio-track');
    
    // Function to calculate width dynamically
    function getScrollAmount() {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
    }

    const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: ".portfolio-section",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: '.portfolio-sticky-wrapper',
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true // extremely important for resize
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
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    let xTo = gsap.quickTo(cursor, "x", {duration: 0.1, ease: "none"});
    let yTo = gsap.quickTo(cursor, "y", {duration: 0.1, ease: "none"});

    window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

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

