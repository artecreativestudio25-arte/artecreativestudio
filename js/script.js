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
        src: '/assets/portfolio/1.jpg',
        alt: 'Heart Health Awareness creative — Your Heart Works 24/7 (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/4.png',
        alt: 'World Hospice and Palliative Care Day social creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/5.png',
        alt: 'World Sight Day eye care awareness creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/12.jpg',
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
        src: '/assets/portfolio/2.png',
        alt: 'Dialysis Care in Siruseri newspaper feature creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/7.png',
        alt: 'Dialysis Unit launch composite creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/8.png',
        alt: 'Dialysis Services miniature room awareness creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/9.png',
        alt: 'Hassle-Free Dialysis Unit campaign visual (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/10.png',
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
        src: '/assets/portfolio/6.png',
        alt: 'Mako robotic-assisted joint replacement creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/11.png',
        alt: 'Robotic-assisted surgery precision creative (brand blurred for privacy)'
      },
      {
        src: '/assets/portfolio/3.png',
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
        src: '/assets/images/project-website-labyrinth.svg',
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
        src: '/assets/images/project-branding-dental.jpg',
        alt: 'Aarav Dental Studio stationery and identity flatlay concept'
      },
      {
        src: '/assets/images/hero-showcase.jpg',
        alt: 'Aarav Dental Studio brand guidelines and studio overview concept'
      },
      {
        src: '/assets/images/studio-workspace.jpg',
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
 * Smooth Scrolling for Same-Page Utility Anchor Links (e.g. Skip Link)
 */
function initSmoothScrolling() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref === '#' || rawHref.startsWith('#/')) return;
    anchor.addEventListener('click', (event) => {
      const targetEl = document.getElementById(rawHref.slice(1));
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
 * Route Metadata for Internal Single-Page Routing
 */
const ROUTE_META = {
  home: {
    title: 'ARTE Creative Studio | Creative & Digital Studio in Chennai',
    description:
      'ARTE Creative Studio in Chennai builds brand identities, social media content, video reels, and websites for healthcare clinics and modern businesses.'
  },
  about: {
    title: 'About | ARTE Creative Studio in Chennai',
    description:
      'Meet ARTE Creative Studio in Chennai — our story, vision, mission, and core values behind purposeful branding and healthcare digital strategy.'
  },
  services: {
    title: 'Services | ARTE Creative Studio — Branding, Websites, Reels & Growth',
    description:
      'Explore branding, social media management, video reels, websites, and digital marketing solutions crafted by ARTE Creative Studio in Chennai.'
  },
  healthcare: {
    title: 'Healthcare Solutions | ARTE Creative Studio Chennai',
    description:
      'Ethical branding, clinical social media, doctor introduction videos, and hospital or clinic websites designed by ARTE Creative Studio.'
  },
  portfolio: {
    title: 'Our Work | ARTE Creative Studio Portfolio',
    description:
      'Explore client healthcare campaigns, live web projects including Labyrinth Narratives, and curated studio concepts by ARTE Creative Studio.'
  },
  contact: {
    title: 'Contact | ARTE Creative Studio — Request a Custom Proposal',
    description:
      'Start a conversation with ARTE Creative Studio in Chennai via our enquiry form, email, phone, WhatsApp, or Instagram.'
  },
  privacy: {
    title: 'Privacy Policy | ARTE Creative Studio',
    description:
      'Read how ARTE Creative Studio handles enquiry form details and studio communications respectfully.'
  },
  terms: {
    title: 'Terms of Service | ARTE Creative Studio',
    description:
      'Review website usage terms, intellectual property notes, and engagement conditions for ARTE Creative Studio.'
  },
  404: {
    title: 'Page Not Found | ARTE Creative Studio',
    description:
      'The requested view on ARTE Creative Studio could not be found. Return to Home, Services, Our Work, or Contact.'
  }
};

const SITE_ORIGIN = 'https://artecreativestudio.vercel.app';

function parseAppRoute(pathname = '/', searchStr = '', hashStr = '') {
  const validRoutes = new Set(Object.keys(ROUTE_META));
  let cleanPath = (pathname || '/').replace(/\/+$/, '').toLowerCase();

  if (cleanPath === '/index.html' || cleanPath === '') {
    cleanPath = '/';
  }

  let route = 'home';
  if (cleanPath !== '/') {
    const candidate = cleanPath.replace(/^\/+/, '');
    route = validRoutes.has(candidate) ? candidate : '404';
  }

  // Handle legacy/bare section anchors (#branding, #website-packages, etc.)
  const anchor = (hashStr || '').replace(/^#/, '');
  if (route === 'home' && anchor && !anchor.startsWith('/')) {
    const anchorEl = document.getElementById(anchor);
    const ownerView = anchorEl ? anchorEl.closest('[data-view]') : null;
    if (ownerView) {
      route = ownerView.dataset.view;
    }
  }

  return {
    route,
    path: route === 'home' ? '/' : `/${route}`,
    anchor,
    query: new URLSearchParams(searchStr || '')
  };
}

/**
 * Clean-URL Internal Router (HTML5 History API + View-Transition Curtain)
 */
function initInternalRouter({ onRouteChange } = {}) {
  const views = Array.from(document.querySelectorAll('.spa-view[data-view]'));
  if (!views.length) return () => {};

  const isFileProtocol = window.location.protocol === 'file:';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const metaDesc = document.querySelector('meta[name="description"]');
  const robotsMeta = document.querySelector('meta[name="robots"]');
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  const ogUrlMeta = document.querySelector('meta[property="og:url"]');

  const curtain = document.createElement('div');
  curtain.className = 'arte-page-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(curtain);

  let activeRouteName = '';
  let virtualLocation = { pathname: '/', search: '', hash: window.location.hash || '' };

  // Clean up legacy /index.html or #/... URLs immediately on HTTP/HTTPS loads
  if (!isFileProtocol) {
    const rawHash = window.location.hash || '';
    if (rawHash.startsWith('#/')) {
      const migrated = rawHash.slice(1);
      window.history.replaceState(null, '', migrated || '/');
    } else if (/\/index\.html$/i.test(window.location.pathname)) {
      const cleanInitial = '/' + (window.location.search || '') + (window.location.hash || '');
      window.history.replaceState(null, '', cleanInitial);
    } else if (window.location.pathname.length > 1 && window.location.pathname.endsWith('/')) {
      const noSlash =
        window.location.pathname.replace(/\/+$/, '') +
        (window.location.search || '') +
        (window.location.hash || '');
      window.history.replaceState(null, '', noSlash);
    }
  }

  const updateNavCurrent = (routeName) => {
    const targetPath = routeName === 'home' ? '/' : `/${routeName}`;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
      if (link.getAttribute('href') === targetPath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const scrollToTarget = (anchor) => {
    if (anchor) {
      const targetEl = document.getElementById(anchor);
      if (targetEl) {
        window.requestAnimationFrame(() => {
          targetEl.scrollIntoView({
            behavior: prefersReduced ? 'auto' : 'smooth',
            block: 'start'
          });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const getCurrentLocation = () =>
    isFileProtocol
      ? virtualLocation
      : {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash
        };

  const applyRoute = () => {
    const loc = getCurrentLocation();
    const parsed = parseAppRoute(loc.pathname, loc.search, loc.hash);
    const viewChanged = parsed.route !== activeRouteName;
    activeRouteName = parsed.route;

    views.forEach((view) => {
      const match = view.dataset.view === parsed.route;
      view.hidden = !match;
      view.classList.toggle('is-active', match);
    });

    const meta = ROUTE_META[parsed.route] || ROUTE_META.home;
    document.title = meta.title;
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }
    if (robotsMeta) {
      robotsMeta.setAttribute('content', parsed.route === '404' ? 'noindex, follow' : 'index, follow');
    }
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `${SITE_ORIGIN}${parsed.path}`);
    }
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', `${SITE_ORIGIN}${parsed.path}`);
    }

    updateNavCurrent(parsed.route);

    // Ensure mobile menu closes cleanly on navigation
    const toggleBtn = document.querySelector('[data-nav-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    if (toggleBtn && mobileNav) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
    }

    // Reveal elements already inside initial viewport of newly activated view
    const activeView = views.find((v) => v.dataset.view === parsed.route);
    if (activeView) {
      window.requestAnimationFrame(() => {
        activeView.querySelectorAll('.reveal').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.96) {
            el.classList.add('is-revealed');
          }
        });
        activeView.querySelectorAll('.heading-mask').forEach((mask) => {
          const rect = mask.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.96) {
            mask.classList.add('is-revealed');
          }
        });
      });
    }

    if (typeof onRouteChange === 'function') {
      onRouteChange(parsed, { viewChanged });
    }

    scrollToTarget(parsed.anchor);
    window.dispatchEvent(new Event('scroll'));
  };

  const navigateTo = (destPathname, destSearch, destHash) => {
    const parsedTarget = parseAppRoute(destPathname, destSearch, destHash);
    const fullDest = `${destPathname}${destSearch}${destHash}`;

    const commit = () => {
      if (isFileProtocol) {
        virtualLocation = { pathname: destPathname, search: destSearch, hash: destHash };
      } else if (
        window.location.pathname !== destPathname ||
        window.location.search !== destSearch ||
        window.location.hash !== destHash
      ) {
        window.history.pushState({ route: parsedTarget.route }, '', fullDest);
      }
      applyRoute();
    };

    if (parsedTarget.route !== activeRouteName && !prefersReduced) {
      curtain.classList.add('is-active');
      window.setTimeout(() => {
        commit();
        window.requestAnimationFrame(() => {
          curtain.classList.remove('is-active');
        });
      }, 150);
    } else {
      commit();
    }
  };

  // Initial route activation
  applyRoute();
  window.addEventListener('popstate', applyRoute);

  // Intercept clean internal URL clicks without full page reloads
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (
      !link ||
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.target === '_blank'
    ) {
      return;
    }

    const rawHref = (link.getAttribute('href') || '').trim();
    if (
      !rawHref ||
      rawHref.startsWith('#') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('javascript:')
    ) {
      return;
    }

    // Parse relative/root-relative internal paths cleanly on both http(s) and file://
    const baseOrigin = isFileProtocol ? SITE_ORIGIN : window.location.origin;
    const url = new URL(rawHref, baseOrigin);
    if (url.origin !== baseOrigin) return;

    event.preventDefault();
    navigateTo(url.pathname, url.search, url.hash);
  });

  return applyRoute;
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
 * Portfolio Category Filtering with Sliding Neon Glider Pill (Scoped per Section)
 */
function initPortfolioFiltering() {
  const filterBars = Array.from(document.querySelectorAll('.filter-bar'));
  if (!filterBars.length) return [];

  const controllers = [];

  filterBars.forEach((filterBar) => {
    const scope = filterBar.closest('section') || document;
    const filterButtons = Array.from(filterBar.querySelectorAll('[data-filter]'));
    const projectCards = Array.from(scope.querySelectorAll('[data-category]'));
    if (!filterButtons.length || !projectCards.length) return;

    const glider = document.createElement('span');
    glider.className = 'filter-glider';
    glider.setAttribute('aria-hidden', 'true');
    filterBar.insertBefore(glider, filterBar.firstChild);
    filterBar.classList.add('has-glider');

    const positionGlider = (activeBtn) => {
      if (!glider || !activeBtn || activeBtn.offsetWidth === 0) return;
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

    const reposition = () => {
      const active = filterBar.querySelector('.filter-btn.is-active');
      positionGlider(active);
    };

    window.addEventListener('resize', reposition);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(reposition);
    }
    window.addEventListener('load', reposition);

    const refresh = (requestedCategory) => {
      const hasMatch =
        requestedCategory && filterButtons.some((b) => b.dataset.filter === requestedCategory);
      if (hasMatch) {
        applyFilter(requestedCategory, false);
      } else {
        window.requestAnimationFrame(reposition);
      }
    };

    controllers.push({ scope, refresh, reposition });
  });

  return controllers;
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
 * Scroll-Spy Dock & Active Highlight for Services View Jump Pills
 */
function initServiceScrollSpy() {
  const servicesView = document.querySelector('[data-view="services"]');
  const jumpNav = (servicesView || document).querySelector('.page-jump-nav');
  if (!jumpNav) return null;

  const pills = Array.from(jumpNav.querySelectorAll('.page-jump-pill[href*="#"]'));
  if (!pills.length) return null;

  const getSectionId = (pill) => {
    const href = pill.getAttribute('href') || '';
    return href.split('#').pop();
  };

  const sections = pills
    .map((pill) => document.getElementById(getSectionId(pill)))
    .filter(Boolean);
  if (!sections.length) return null;

  // Create floating scroll-spy dock for desktop while scrolling past Services hero
  const dock = document.createElement('nav');
  dock.className = 'service-spy-dock is-route-hidden';
  dock.setAttribute('aria-label', 'Active service section indicator');

  pills.forEach((pill) => {
    const clone = pill.cloneNode(true);
    dock.appendChild(clone);
  });
  document.body.appendChild(dock);

  const allLinks = [...pills, ...dock.querySelectorAll('.page-jump-pill')];

  const setActiveSection = (id) => {
    allLinks.forEach((link) => {
      link.classList.toggle('is-active', getSectionId(link) === id);
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

    const hero = (servicesView || document).querySelector('.page-hero');
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

  return {
    setRouteActive: (isServices) => {
      dock.classList.toggle('is-route-hidden', !isServices);
    }
  };
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
    const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
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
    const rule = validators[field.id];
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
  Object.keys(validators).forEach((fieldId) => {
    const field = document.getElementById(fieldId);
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

    Object.keys(validators).forEach((fieldId) => {
      const field = document.getElementById(fieldId);
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
      showStatus(
        'All fields validated successfully. Form backend is not connected yet — connect a Formspree endpoint in contact.html or ARTE_CONFIG.formEndpoint (js/script.js) to enable live submissions.',
        true
      );
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending Enquiry...';

    const fullName = document.getElementById('fullName').value.trim();
    const businessName = document.getElementById('businessName').value.trim();
    const serviceRequired = document.getElementById('serviceRequired').value;
    const subjectField = form.querySelector('[data-form-subject]');
    if (subjectField) {
      subjectField.value = `ARTE Enquiry: ${serviceRequired} — ${businessName} (${fullName})`;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
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
        const errData = await response.json().catch(() => null);
        const errMsg =
          (errData && errData.error) ||
          (errData && Array.isArray(errData.errors) && errData.errors[0] && errData.errors[0].message) ||
          '';

        // If Formspree blocks AJAX (e.g. reCAPTCHA / free-tier AJAX check), submit natively
        if (response.status === 403 || /ajax|captcha|recaptcha/i.test(errMsg)) {
          form.setAttribute('action', endpoint);
          form.submit();
          return;
        }

        showStatus(
          errMsg
            ? `Submission error: ${errMsg}`
            : 'Unable to submit your enquiry right now. Please try again or reach out directly via email or WhatsApp.',
          true
        );
      }
    } catch (error) {
      // Fallback to native POST submission if cross-origin fetch is blocked
      form.setAttribute('action', endpoint);
      form.submit();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

/**
 * Preselect Service and Package on Contact View from Route Query Parameters
 */
function initPackagePreselection(paramsInput) {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const serviceField = document.getElementById('serviceRequired');
  const packageField = document.getElementById('selectedPackage');
  const banner = form.querySelector('[data-package-banner]');

  const params =
    paramsInput instanceof URLSearchParams
      ? paramsInput
      : new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  const packageParam = params.get('package');

  if (!serviceParam && !packageParam) {
    if (banner) banner.classList.remove('is-visible');
    return;
  }

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
  const serviceSpy = initServiceScrollSpy();
  initBackToTop();
  const portfolioFilters = initPortfolioFiltering();
  initProjectModal();
  initFaqAccordions();
  initWhatsAppButton();
  initContactForm();

  initInternalRouter({
    onRouteChange: (parsed) => {
      if (serviceSpy) {
        serviceSpy.setRouteActive(parsed.route === 'services');
      }

      if (Array.isArray(portfolioFilters)) {
        const category = parsed.route === 'portfolio' ? parsed.query.get('category') : null;
        portfolioFilters.forEach((ctrl) => ctrl.refresh(category));
      }

      if (parsed.route === 'contact') {
        initPackagePreselection(parsed.query);
      }
    }
  });

  // Expose non-sensitive config reference for integration setup
  window.ARTEStudio = Object.freeze({
    config: ARTE_CONFIG
  });
});
