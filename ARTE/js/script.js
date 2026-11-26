/**
 * ARTE Creative Studio — Interactive Behaviors
 * Plain ES6+ Vanilla JavaScript (no external frameworks or build tools)
 */

'use strict';

/* ==========================================================================
   1. Studio Configuration & Internal Launch Rate Reference
   ========================================================================== */

/**
 * Contact & Backend Integration Configuration.
 * Replace `formEndpoint` with a live form backend (e.g., Formspree:
 * "https://formspree.io/f/your_form_id") before deploying to production.
 * Leave empty to keep static-preview mode active (prevents false success states).
 */
const ARTE_CONFIG = {
  formEndpoint: 'https://formspree.io/f/mnpdwwyg',
  whatsappNumber: '919043779888',
  whatsappPrefill:
    "Hello ARTE Creative Studio, I'd like to discuss a project for my brand/practice."
};

/* ==========================================================================
   2. Concept Portfolio Data (For Case-Study Modal & Gallery)
   ========================================================================== */

const CONCEPT_PROJECTS = {
  'health-awareness-campaigns': {
    name: 'Health Awareness & Observance Campaigns',
    category: 'Social Media · Healthcare',
    industry: 'Hospital & Clinical Communications',
    badge: 'CLIENT WORK · BRAND BLURRED FOR PRIVACY',
    description:
      'Editorial health awareness creatives covering World Heart Health, World Sight Day, World Hospice & Palliative Care Day, and World Rabies Day. Client brand names and contact details are blurred for privacy reasons.',
    objective:
      'Communicate preventive healthcare reminders with emotional warmth, clarity, and high readability across mobile feeds.',
    approach:
      'Paired compassionate clinical visuals with bold typographic headlines, clean awareness icons, and balanced white/dark contrast.',
    images: [
      {
        src: 'assets/portfolio/1.jpg',
        alt: 'Heart Health Awareness creative — Your Heart Works 24/7 (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/4.png',
        alt: 'World Hospice and Palliative Care Day social creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/5.png',
        alt: 'World Sight Day eye care awareness creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/12.jpg',
        alt: 'World Rabies Day preventive healthcare creative (brand blurred for privacy)'
      }
    ]
  },
  'dialysis-unit-campaign': {
    name: 'Dialysis Unit Launch & Local Outreach',
    category: 'Healthcare · Social Media',
    industry: 'Multi-Speciality Hospital · Siruseri, Chennai',
    badge: 'CLIENT WORK · BRAND BLURRED FOR PRIVACY',
    description:
      'Multi-format launch and local awareness campaign for a dedicated dialysis unit in Siruseri, Chennai. Client hospital branding and phone numbers are blurred for privacy reasons.',
    objective:
      'Build local community awareness and patient confidence around accessible, comfortable dialysis facilities in Siruseri.',
    approach:
      'Combined newspaper-style print concepts, architectural facility visuals, Google Search intent hooks, and compassionate care dioramas.',
    images: [
      {
        src: 'assets/portfolio/2.png',
        alt: 'Dialysis Care in Siruseri newspaper feature creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/7.png',
        alt: 'Dialysis Unit launch composite creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/8.png',
        alt: 'Dialysis Services miniature room awareness creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/9.png',
        alt: 'Hassle-Free Dialysis Unit campaign visual (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/10.png',
        alt: 'Local search Dialysis Near Siruseri social creative (brand blurred for privacy)'
      }
    ]
  },
  'specialty-surgical-campaigns': {
    name: 'Specialty Care & Robotic Surgery Creatives',
    category: 'Healthcare · Social Media',
    industry: 'Orthopaedics, Surgery & Paediatrics',
    badge: 'CLIENT WORK · BRAND BLURRED FOR PRIVACY',
    description:
      'High-impact visual campaigns highlighting robotic-assisted joint replacement, advanced surgery, and paediatric care. Client brand names and contact details are blurred for privacy reasons.',
    objective:
      'Explain advanced surgical precision and specialised paediatric care in an approachable, confidence-building visual format.',
    approach:
      'Blended clean 3D medical storytelling, clear benefit badges, and structured consultation calls to action.',
    images: [
      {
        src: 'assets/portfolio/6.png',
        alt: 'Mako robotic-assisted joint replacement creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/11.png',
        alt: 'Robotic-assisted surgery precision creative (brand blurred for privacy)'
      },
      {
        src: 'assets/portfolio/3.png',
        alt: 'Paediatrics big care for little hearts campaign creative (brand blurred for privacy)'
      }
    ]
  },
  'labyrinth-narratives': {
    name: 'Labyrinth Narratives',
    category: 'Websites',
    industry: 'Independent Film Company · Chennai, India',
    badge: 'LIVE WEBSITE · CHENNAI, INDIA',
    liveUrl: 'https://labyrinthnarratives.in/',
    description:
      'Website design and digital presence for Labyrinth Narratives, an independent film company based in Chennai specializing in documentaries and cinema.',
    objective:
      'Present the production house’s films, documentaries, and editorial voice with cinematic restraint and effortless navigation.',
    approach:
      'Crafted an atmospheric, story-first web experience showcasing independent cinema, documentary work, and direct studio contact.',
    images: [
      {
        src: 'assets/images/project-website-labyrinth.svg',
        alt: 'Labyrinth Narratives independent film company website preview'
      }
    ]
  },
  'aarav-dental': {
    name: 'Aarav Dental Studio',
    category: 'Branding',
    industry: 'Dental Clinic · Chennai',
    badge: 'CONCEPT PROJECT — FOR DEMONSTRATION PURPOSES',
    description:
      'A calm, tactile brand identity system created for a contemporary restorative and cosmetic dental practice.',
    objective:
      'Replace clinical coldness with an architectural visual language that reassures anxious patients before their first visit.',
    approach:
      'Paired Deep Navy wordmarks with Warm Ivory cotton stationery, Soft Sage appointment cards, and subtle Muted Copper foil accents.',
    images: [
      {
        src: 'assets/images/project-branding-dental.jpg',
        alt: 'Aarav Dental Studio stationery and identity flatlay concept'
      },
      {
        src: 'assets/images/hero-showcase.jpg',
        alt: 'Aarav Dental Studio brand guidelines and studio overview concept'
      },
      {
        src: 'assets/images/studio-workspace.jpg',
        alt: 'Colour palette and material swatches used for Aarav Dental Studio'
      }
    ]
  }
};

/* ==========================================================================
   3. Reusable UI Modules
   ========================================================================== */

/**
 * Sticky Header Elevation
 */
function initStickyHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const updateHeaderState = () => {
    if (window.scrollY > 16) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

/**
 * Accessible Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (!toggleBtn || !mobileNav) return;

  const setMenuState = (open) => {
    toggleBtn.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('is-open', open);
    mobileNav.setAttribute('aria-hidden', String(!open));
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      toggleBtn.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
      setMenuState(false);
    }
  });
}

/**
 * Smooth Scrolling for Same-Page Anchor Links
 */
function initSmoothScrolling() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
}

/**
 * Subtle Scroll Animations via IntersectionObserver (with grid stagger)
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // Assign smooth stagger delays for sibling cards inside grids
  const gridSelectors =
    '.services-grid, .pillars-grid, .process-grid, .portfolio-grid, .packages-grid, .principles-list, .cards-grid-3, .cards-grid-2';
  document.querySelectorAll(gridSelectors).forEach((grid) => {
    grid.querySelectorAll('.reveal').forEach((child, idx) => {
      child.style.setProperty('--reveal-delay', `${Math.min(idx * 75, 300)}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Scroll Progress Neon Bar on Header
 */
function initScrollProgress() {
  let ticking = false;

  const updateProgress = () => {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
    doc.style.setProperty('--scroll-progress', `${pct.toFixed(2)}%`);
    ticking = false;
  };

  updateProgress();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Cursor-Tracking Neon Spotlight & Subtle 3D Micro-Tilt Across Cards
 */
function initNeonCardSpotlight() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (prefersReduced || !canHover) return;

  const cards = document.querySelectorAll(
    '.service-card, .pillar-card, .project-card, .package-card, .editorial-card, .principle-box'
  );
  if (!cards.length) return;

  cards.forEach((card) => {
    const isTiltCard =
      card.classList.contains('project-card') || card.classList.contains('package-card');

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width;
      const relY = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--mouse-x', `${(relX * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${(relY * 100).toFixed(1)}%`);

      if (isTiltCard) {
        const rx = ((0.5 - relY) * 4.4).toFixed(2);
        const ry = ((relX - 0.5) * 4.4).toFixed(2);
        card.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }
    });

    if (isTiltCard) {
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    }
  });
}

/**
 * Subtle Pointer Tilt on Hero Visual Showcase
 */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const heroVisual = document.querySelector('.hero-visual');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (!hero || !heroVisual || prefersReduced || !canHover) return;

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    heroVisual.style.transform = `perspective(1200px) rotateY(${(nx * 3.5).toFixed(2)}deg) rotateX(${(-ny * 3).toFixed(2)}deg)`;
  });

  hero.addEventListener('pointerleave', () => {
    heroVisual.style.transform = '';
  });
}

/**
 * Infinite Seamless Studio Ticker Marquee
 */
function initStudioMarquee() {
  const ticker = document.querySelector('.studio-ticker');
  const list = document.querySelector('.studio-ticker-list');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!ticker || !list || prefersReduced) return;

  const track = document.createElement('div');
  track.className = 'studio-ticker-track';

  const clone = list.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');

  list.parentNode.insertBefore(track, list);
  track.appendChild(list);
  track.appendChild(clone);
}

/**
 * Custom Magnetic Cursor Ring & Button Pull (Desktop Pointer Only)
 */
function initMagneticCursor() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (prefersReduced || !finePointer) return;

  const cursor = document.createElement('div');
  cursor.className = 'arte-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  const ring = document.createElement('span');
  ring.className = 'arte-cursor-ring';
  const dot = document.createElement('span');
  dot.className = 'arte-cursor-dot';

  cursor.appendChild(ring);
  cursor.appendChild(dot);
  document.body.appendChild(cursor);

  let targetX = -100;
  let targetY = -100;
  let ringX = -100;
  let ringY = -100;
  let animating = false;

  const renderCursor = () => {
    ringX += (targetX - ringX) * 0.18;
    ringY += (targetY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;
    dot.style.transform = `translate3d(${targetX.toFixed(1)}px, ${targetY.toFixed(1)}px, 0)`;

    if (Math.abs(targetX - ringX) > 0.2 || Math.abs(targetY - ringY) > 0.2) {
      window.requestAnimationFrame(renderCursor);
    } else {
      animating = false;
    }
  };

  document.addEventListener('pointermove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    cursor.classList.add('is-visible');
    if (!animating) {
      animating = true;
      window.requestAnimationFrame(renderCursor);
    }
  });

  document.addEventListener('pointerleave', () => {
    cursor.classList.remove('is-visible');
  });

  document.querySelectorAll('a, button, .filter-btn, .faq-trigger').forEach((el) => {
    el.addEventListener('pointerenter', () => cursor.classList.add('is-hovering-cta'));
    el.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering-cta'));
  });

  document
    .querySelectorAll('.project-card, .package-card, .service-card, .pillar-card')
    .forEach((card) => {
      card.addEventListener('pointerenter', () => cursor.classList.add('is-hovering-card'));
      card.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering-card'));
    });

  // Subtle magnetic pull on primary buttons
  document.querySelectorAll('.btn--copper, .btn--primary').forEach((btn) => {
    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) * 0.16;
      const dy = (event.clientY - (rect.top + rect.height / 2)) * 0.16;
      btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${(dy - 2).toFixed(1)}px, 0)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
}

/**
 * Fluid Page-Transition Curtain for Internal Links
 */
function initPageTransitions() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const curtain = document.createElement('div');
  curtain.className = 'arte-page-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(curtain);

  window.addEventListener('pageshow', () => {
    curtain.classList.remove('is-active');
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === '_blank'
      ) {
        return;
      }

      const rawHref = link.getAttribute('href') || '';
      if (
        !rawHref ||
        rawHref.startsWith('#') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('tel:') ||
        rawHref.startsWith('javascript:')
      ) {
        return;
      }

      const targetUrl = new URL(link.href, window.location.href);
      if (targetUrl.origin !== window.location.origin) return;
      if (
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search &&
        targetUrl.hash
      ) {
        return;
      }

      event.preventDefault();
      curtain.classList.add('is-active');
      window.setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 190);
    });
  });
}

/**
 * Back-to-Top Floating Action Button with Circular Scroll-Progress Ring
 */
function initBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Inject SVG progress ring around existing arrow icon
  const ns = 'http://www.w3.org/2000/svg';
  const ringSvg = document.createElementNS(ns, 'svg');
  ringSvg.setAttribute('class', 'back-to-top-ring');
  ringSvg.setAttribute('viewBox', '0 0 48 48');
  ringSvg.setAttribute('aria-hidden', 'true');

  const track = document.createElementNS(ns, 'circle');
  track.setAttribute('class', 'back-to-top-track');
  track.setAttribute('cx', '24');
  track.setAttribute('cy', '24');
  track.setAttribute('r', '21');

  const fill = document.createElementNS(ns, 'circle');
  fill.setAttribute('class', 'back-to-top-fill');
  fill.setAttribute('cx', '24');
  fill.setAttribute('cy', '24');
  fill.setAttribute('r', '21');

  const circumference = 2 * Math.PI * 21;
  fill.style.strokeDasharray = `${circumference.toFixed(2)}`;
  fill.style.strokeDashoffset = `${circumference.toFixed(2)}`;

  ringSvg.appendChild(track);
  ringSvg.appendChild(fill);
  button.appendChild(ringSvg);

  const toggleVisibility = () => {
    if (window.scrollY > 420) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    fill.style.strokeDashoffset = `${(circumference * (1 - ratio)).toFixed(2)}`;
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });
}

/**
 * Portfolio Category Filtering with Sliding Neon Glider Pill
 */
function initPortfolioFiltering() {
  const filterBar = document.querySelector('.filter-bar');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  if (!filterButtons.length || !projectCards.length) return;

  let glider = null;
  if (filterBar) {
    glider = document.createElement('span');
    glider.className = 'filter-glider';
    glider.setAttribute('aria-hidden', 'true');
    filterBar.insertBefore(glider, filterBar.firstChild);
    filterBar.classList.add('has-glider');
  }

  const positionGlider = (activeBtn) => {
    if (!glider || !activeBtn) return;
    glider.style.width = `${activeBtn.offsetWidth}px`;
    glider.style.height = `${activeBtn.offsetHeight}px`;
    glider.style.transform = `translate3d(${activeBtn.offsetLeft}px, ${activeBtn.offsetTop}px, 0)`;
  };

  const applyFilter = (category, animateCards = false) => {
    let activeBtn = null;
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
      if (isActive) activeBtn = btn;
    });

    positionGlider(activeBtn);

    projectCards.forEach((card) => {
      const cardCategories = (card.dataset.category || '').split(',').map((c) => c.trim());
      const matches = category === 'all' || cardCategories.includes(category);
      card.classList.toggle('is-hidden', !matches);
      if (matches && animateCards) {
        card.classList.remove('is-filtering-in');
        void card.offsetWidth;
        card.classList.add('is-filtering-in');
      }
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter || 'all', true);
    });
  });

  window.addEventListener('resize', () => {
    const active = document.querySelector('.filter-btn.is-active');
    positionGlider(active);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      positionGlider(document.querySelector('.filter-btn.is-active'));
    });
  }
  window.addEventListener('load', () => {
    positionGlider(document.querySelector('.filter-btn.is-active'));
  });

  // Support deep-link query param ?category=branding
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category');
  const matchingBtn = initialCategory
    ? Array.from(filterButtons).find((b) => b.dataset.filter === initialCategory)
    : null;

  if (matchingBtn) {
    applyFilter(initialCategory, false);
  } else {
    positionGlider(document.querySelector('.filter-btn.is-active'));
  }
}

/**
 * Portfolio Project Case-Study & Gallery Modal
 */
function initProjectModal() {
  const modal = document.querySelector('[data-project-modal]');
  const triggers = document.querySelectorAll('[data-project-open]');
  if (!modal || !triggers.length) return;

  const closeBtn = modal.querySelector('[data-modal-close]');
  const badgeEl = modal.querySelector('[data-modal-badge]');
  const titleEl = modal.querySelector('[data-modal-title]');
  const metaEl = modal.querySelector('[data-modal-meta]');
  const descEl = modal.querySelector('[data-modal-desc]');
  const objEl = modal.querySelector('[data-modal-objective]');
  const appEl = modal.querySelector('[data-modal-approach]');
  const mainImgEl = modal.querySelector('[data-modal-main-img]');
  const thumbsEl = modal.querySelector('[data-modal-thumbs]');
  const liveLinkEl = modal.querySelector('[data-modal-live-link]');

  let lastFocusedElement = null;

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const openModal = (projectId, triggerEl) => {
    const project = CONCEPT_PROJECTS[projectId];
    if (!project) return;

    lastFocusedElement = triggerEl;
    badgeEl.textContent = project.badge;
    titleEl.textContent = project.name;
    metaEl.textContent = `${project.category} · ${project.industry}`;
    descEl.textContent = project.description;
    objEl.textContent = project.objective;
    appEl.textContent = project.approach;

    if (liveLinkEl) {
      if (project.liveUrl) {
        liveLinkEl.href = project.liveUrl;
        liveLinkEl.hidden = false;
      } else {
        liveLinkEl.hidden = true;
      }
    }

    if (project.images && project.images.length) {
      mainImgEl.src = project.images[0].src;
      mainImgEl.alt = project.images[0].alt;
      thumbsEl.innerHTML = '';

      project.images.forEach((imgObj, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `modal-thumb-btn${index === 0 ? ' is-active' : ''}`;
        btn.setAttribute('aria-label', `View gallery image ${index + 1}`);

        const thumbImg = document.createElement('img');
        thumbImg.src = imgObj.src;
        thumbImg.alt = imgObj.alt;
        btn.appendChild(thumbImg);

        btn.addEventListener('click', () => {
          mainImgEl.src = imgObj.src;
          mainImgEl.alt = imgObj.alt;
          thumbsEl.querySelectorAll('.modal-thumb-btn').forEach((b) => {
            b.classList.remove('is-active');
          });
          btn.classList.add('is-active');
        });

        thumbsEl.appendChild(btn);
      });
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openModal(trigger.dataset.projectOpen, trigger);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * FAQ Accordion Interactions (Smooth CSS Grid Height Transition)
 */
function initFaqAccordions() {
  const triggers = document.querySelectorAll('[data-faq-trigger]');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    // Wrap panel contents for smooth 0fr -> 1fr CSS grid row transition
    if (!panel.querySelector('.faq-panel-inner')) {
      const inner = document.createElement('div');
      inner.className = 'faq-panel-inner';
      while (panel.firstChild) {
        inner.appendChild(panel.firstChild);
      }
      panel.appendChild(inner);
    }

    const initiallyOpen = trigger.getAttribute('aria-expanded') === 'true';
    panel.hidden = false;
    panel.classList.toggle('is-open', initiallyOpen);
    panel.setAttribute('aria-hidden', String(!initiallyOpen));

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;
      trigger.setAttribute('aria-expanded', String(nextState));
      panel.classList.toggle('is-open', nextState);
      panel.setAttribute('aria-hidden', String(!nextState));
    });
  });
}

/**
 * Scroll-Spy Dock & Active Highlight for Services Page Jump Pills
 */
function initServiceScrollSpy() {
  const jumpNav = document.querySelector('.page-jump-nav');
  if (!jumpNav) return;

  const pills = Array.from(jumpNav.querySelectorAll('.page-jump-pill[href^="#"]'));
  if (!pills.length) return;

  const sections = pills
    .map((pill) => document.querySelector(pill.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  // Create floating scroll-spy dock for desktop while scrolling past hero
  const dock = document.createElement('nav');
  dock.className = 'service-spy-dock';
  dock.setAttribute('aria-label', 'Active service section indicator');

  pills.forEach((pill) => {
    const clone = pill.cloneNode(true);
    dock.appendChild(clone);
  });
  document.body.appendChild(dock);

  const allLinks = [...pills, ...dock.querySelectorAll('.page-jump-pill')];

  const setActiveSection = (id) => {
    allLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-32% 0px -52% 0px', threshold: 0.01 }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));

    const hero = document.querySelector('.page-hero');
    if (hero) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            dock.classList.toggle('is-visible', !entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(hero);
    }
  }
}

/**
 * Scroll-Driven Ambient Parallax Light Orbs
 */
function initAmbientParallax() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  const updateOrbs = () => {
    const shift = Math.min(140, window.scrollY * 0.12);
    document.documentElement.style.setProperty('--scroll-orb-y', `${shift.toFixed(1)}px`);
    ticking = false;
  };

  updateOrbs();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOrbs);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Editorial Baseline-Mask Reveal on Section Headings
 */
function initHeadingMaskReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const headings = document.querySelectorAll('.section-header h2, .sticky-col h2, .cta-band h2');
  if (!headings.length) return;

  const standaloneTargets = [];

  headings.forEach((h2) => {
    if (h2.querySelector('.heading-mask')) return;
    const mask = document.createElement('span');
    mask.className = 'heading-mask';
    const inner = document.createElement('span');
    inner.className = 'heading-mask-inner';

    while (h2.firstChild) {
      inner.appendChild(h2.firstChild);
    }
    mask.appendChild(inner);
    h2.appendChild(mask);

    if (!h2.closest('.reveal')) {
      standaloneTargets.push(mask);
    }
  });

  if (standaloneTargets.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    standaloneTargets.forEach((el) => obs.observe(el));
  } else {
    standaloneTargets.forEach((el) => el.classList.add('is-revealed'));
  }
}

/**
 * Configurable WhatsApp Contact Button
 */
function initWhatsAppButton() {
  const waBtn = document.querySelector('[data-whatsapp-btn]');
  const waNote = document.querySelector('[data-whatsapp-note]');
  if (!waBtn) return;

  const cleanNumber = (ARTE_CONFIG.whatsappNumber || '').replace(/[^\d]/g, '');

  if (cleanNumber.length >= 10) {
    const encodedMsg = encodeURIComponent(ARTE_CONFIG.whatsappPrefill);
    waBtn.href = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
    waBtn.target = '_blank';
    waBtn.rel = 'noopener noreferrer';
    if (waNote) {
      waNote.textContent = 'Opens WhatsApp chat directly with ARTE Creative Studio.';
    }
  } else {
    waBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (waNote) {
        waNote.textContent =
          'WhatsApp number not yet configured. Set ARTE_CONFIG.whatsappNumber in js/script.js to activate direct chat.';
      }
    });
  }
}

/**
 * Contact Form Validation & Documented Backend Submission Handler
 */
function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const statusBox = form.querySelector('[data-form-status]');
  const submitBtn = form.querySelector('[type="submit"]');

  const validators = {
    fullName: (val) => val.trim().length >= 2 || 'Please enter your full name.',
    businessName: (val) =>
      val.trim().length >= 2 || 'Please enter your business or clinic name.',
    email: (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) ||
      'Please enter a valid email address.',
    phone: (val) => {
      const digits = val.replace(/[^\d]/g, '');
      return (
        (digits.length >= 7 && digits.length <= 15) ||
        'Please enter a valid phone number (7–15 digits).'
      );
    },
    businessType: (val) => val !== '' || 'Please select your business type.',
    serviceRequired: (val) => val !== '' || 'Please select the service required.',
    projectDetails: (val) =>
      val.trim().length >= 15 ||
      'Please share at least a brief overview (15+ characters) of your project.'
  };

  const setFieldError = (field, message) => {
    const errorEl = form.querySelector(`[data-error-for="${field.name}"]`);
    if (message) {
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('is-visible');
      }
    } else {
      field.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('is-visible');
      }
    }
  };

  const validateField = (field) => {
    const rule = validators[field.name];
    if (!rule) return true;
    const result = rule(field.value);
    if (result === true) {
      setFieldError(field, '');
      return true;
    }
    setFieldError(field, result);
    return false;
  };

  // Validate on blur & re-validate on input if previously invalid
  Object.keys(validators).forEach((name) => {
    const field = form.elements[name];
    if (!field) return;

    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  const showStatus = (message, isNotice = false) => {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.classList.add('is-visible');
    statusBox.classList.toggle('form-status--notice', isNotice);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (statusBox) {
      statusBox.classList.remove('is-visible', 'form-status--notice');
    }

    let firstInvalidField = null;
    let allValid = true;

    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      if (!field) return;
      const valid = validateField(field);
      if (!valid) {
        allValid = false;
        if (!firstInvalidField) firstInvalidField = field;
      }
    });

    if (!allValid) {
      if (firstInvalidField) firstInvalidField.focus();
      showStatus('Please review the highlighted fields before continuing.', true);
      return;
    }

    // Determine configured backend endpoint (either form action or ARTE_CONFIG)
    const configuredAction = (form.getAttribute('action') || '').trim();
    const endpoint =
      configuredAction && !configuredAction.includes('YOUR_FORM_ID')
        ? configuredAction
        : ARTE_CONFIG.formEndpoint.trim();

    if (!endpoint) {
      // Static HTML cannot securely send emails by itself:
      // Explicitly communicate that no live backend endpoint is connected yet.
      showStatus(
        'All fields validated successfully. Form backend is not connected yet — connect a Formspree endpoint in contact.html or ARTE_CONFIG.formEndpoint (js/script.js) to enable live submissions.',
        true
      );
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending Enquiry...';

    try {
      const fullName = form.elements.fullName.value.trim();
      const businessName = form.elements.businessName.value.trim();
      const clientEmail = form.elements.email.value.trim();
      const phone = form.elements.phone.value.trim();
      const businessType = form.elements.businessType.value;
      const serviceRequired = form.elements.serviceRequired.value;
      const selectedPackage =
        (form.elements.selectedPackage && form.elements.selectedPackage.value) ||
        'Not Decided / Custom Proposal';
      const projectDetails = form.elements.projectDetails.value.trim();

      const submissionData = new FormData();
      submissionData.append(
        '_subject',
        `ARTE Enquiry: ${serviceRequired} — ${businessName} (${fullName})`
      );
      submissionData.append('_replyto', clientEmail);
      submissionData.append('Full Name', fullName);
      submissionData.append('Business / Clinic Name', businessName);
      submissionData.append('email', clientEmail);
      submissionData.append('Phone Number', phone);
      submissionData.append('Business Type', businessType);
      submissionData.append('Service Required', serviceRequired);
      submissionData.append('Selected Package', selectedPackage);
      submissionData.append('Project Details', projectDetails);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: submissionData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        const banner = form.querySelector('[data-package-banner]');
        if (banner) banner.classList.remove('is-visible');
        showStatus(
          "Thank you for reaching out to ARTE Creative Studio. Your enquiry has been received. We'll review your requirements and get back to you.",
          false
        );
      } else {
        showStatus(
          'Unable to submit your enquiry right now. Please verify the form endpoint configuration or reach out directly using the studio contact details.',
          true
        );
      }
    } catch (error) {
      showStatus(
        'A network error prevented submission. Please check your connection and try again.',
        true
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

/**
 * Preselect Service and Package on Contact Page from URL Parameters
 */
function initPackagePreselection() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const serviceField = form.elements.serviceRequired;
  const packageField = form.elements.selectedPackage;
  const banner = form.querySelector('[data-package-banner]');

  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  const packageParam = params.get('package');
  if (!serviceParam && !packageParam) return;

  let matchedService = '';
  let matchedPackage = '';

  if (serviceParam && serviceField) {
    const hasOption = Array.from(serviceField.options).some(
      (opt) => opt.value === serviceParam
    );
    if (hasOption) {
      serviceField.value = serviceParam;
      matchedService = serviceParam;
    }
  }

  if (packageParam && packageField) {
    const hasPkgOption = Array.from(packageField.options).some(
      (opt) => opt.value === packageParam
    );
    if (hasPkgOption) {
      packageField.value = packageParam;
      matchedPackage = packageParam;
    }
  }

  if (banner && (matchedService || matchedPackage)) {
    const parts = [];
    if (matchedService) parts.push(`Service: ${matchedService}`);
    if (matchedPackage) parts.push(`Package: ${matchedPackage}`);
    banner.textContent = `Preselected from Services — ${parts.join(' · ')}. Complete your details below to send your enquiry.`;
    banner.classList.add('is-visible');
  }
}

/* ==========================================================================
   4. Initialize All Modules on DOMContentLoaded
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollProgress();
  initAmbientParallax();
  initHeadingMaskReveal();
  initMobileNavigation();
  initSmoothScrolling();
  initScrollReveal();
  initNeonCardSpotlight();
  initHeroParallax();
  initStudioMarquee();
  initMagneticCursor();
  initPageTransitions();
  initServiceScrollSpy();
  initBackToTop();
  initPortfolioFiltering();
  initProjectModal();
  initFaqAccordions();
  initWhatsAppButton();
  initPackagePreselection();
  initContactForm();

  // Expose non-sensitive config reference for integration setup
  window.ARTEStudio = Object.freeze({
    config: ARTE_CONFIG
  });
});
