const body = document.body;
const siteHeader = document.querySelector("[data-site-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const logo = document.querySelector("[data-logo]");
const footerLogo = document.querySelector("[data-footer-logo]");
const themeColor = document.querySelector("[data-theme-color]");
const metaDescription = document.querySelector("[data-meta-description]");
const ogTitle = document.querySelector("[data-og-title]");
const ogDescription = document.querySelector("[data-og-description]");
const projectModal = document.querySelector("[data-project-modal]");
const projectOpenButtons = Array.from(document.querySelectorAll("[data-project-open]"));
const projectCloseButtons = Array.from(document.querySelectorAll("[data-project-close]"));
const projectForm = document.querySelector("[data-project-form]");
const showcaseCanvas = document.querySelector("[data-showcase-canvas]");
const showcaseSection = document.querySelector("[data-showcase-section]");
const showcaseScore = document.querySelector("[data-showcase-score]");
const showcaseExperience = document.querySelector("[data-showcase-experience]");
const showcaseExpandButton = document.querySelector("[data-showcase-expand]");
const showcaseCollapseButton = document.querySelector("[data-showcase-collapse]");
const processTimeline = document.querySelector("[data-process-timeline]");
const processSection = document.querySelector("[data-process-story]");
const ambientScene = document.querySelector("[data-ambient-scene]");
const modalBackgroundRegions = [
  siteHeader,
  document.querySelector("main"),
  document.querySelector(".site-footer")
].filter(Boolean);
const pageCopy = window.QM_PAGE_COPY || {};
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let redrawShowcaseGame = () => {};
let refreshShowcaseScore = () => {};
let syncShowcaseGameMode = () => {};
let closeExpandedShowcase = () => {};
let isShowcaseExpanded = false;
let lastProjectTrigger = null;

const copy = {
  en: {
    title: "Quantum Media | Digital Solutions Studio",
    description:
      "Quantum Media designs practical web experiences, automation systems, customer tools, dashboards, and custom digital products around real business needs.",
    skip: "Skip to content",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    homeAria: "Quantum Media home",
    navAria: "Primary navigation",
    preferencesAria: "Site preferences",
    languageAria: "Switch language",
    themeAria: "Toggle color mode",
    showcaseAria: "Quantum Media interactive showcase",
    gameAria: "Play the origami bird game. Tap, press Space, or use Arrow Up to fly.",
    collapseGameAria: "Close expanded game",
    navSolutions: "Solutions",
    navCapabilities: "Capabilities",
    navProcess: "Process",
    navStudio: "Studio",
    darkLabel: "Dark",
    heroLabel: "Digital Solutions Studio",
    heroTitle: "We build practical digital solutions that help businesses grow.",
    heroCopy:
      "Quantum Media designs web experiences, automation systems, customer tools, dashboards, and custom digital products around real business needs.",
    startProject: "Start a Project",
    exploreSolutions: "Explore Solutions",
    studioLabel: "The Studio",
    studioTitle: "A studio for practical digital solutions.",
    studioCopyOne:
      "Every business challenge is different. Some solutions begin with a proven foundation. Others are designed from scratch around the customer, workflow, and growth opportunity.",
    studioCopyTwo:
      "The goal is simple: build technology that teams can use, maintain, and improve.",
    solutionsLabel: "What We Build",
    solutionsTitle: "Digital solutions designed around real business needs.",
    solutionsIntro:
      "We combine strategy, design, technology, and continuous improvement to create systems that businesses can actually use.",
    solutionOneTitle: "Web Experiences",
    solutionOneCopy:
      "Business websites, landing pages, product pages, portfolios, and conversion-focused interfaces.",
    solutionTwoTitle: "Customer Experience Tools",
    solutionTwoCopy:
      "Chatbots, FAQ assistants, booking flows, lead qualification, and support workflows.",
    solutionThreeTitle: "Automation Systems",
    solutionThreeCopy:
      "Lead routing, CRM workflows, email flows, reporting automations, and internal processes.",
    solutionFourTitle: "Dashboards & Business Visibility",
    solutionFourCopy:
      "Performance dashboards, analytics, operational reporting, and decision-support tools.",
    solutionFiveTitle: "Digital Products & Platforms",
    solutionFiveCopy:
      "Internal tools, client portals, prototypes, and platforms built around real use cases.",
    solutionSixTitle: "Optimization & Evolution",
    solutionSixCopy:
      "Continuous improvement, maintenance, performance analysis, and ongoing evolution after launch.",
    exploreSolution: "Explore This Solution",
    waysLabel: "Ways to Build",
    waysTitle: "Start from a proven foundation. Or build something new.",
    discussSolution: "Discuss a Solution",
    adaptTitle: "Adapt a Foundation",
    adaptCopy:
      "Start with a tested structure and shape it around your brand, industry, workflow, and customer journey.",
    customTitle: "Build Something Custom",
    customCopy:
      "Design a new digital solution from scratch around a specific business challenge.",
    capabilitiesLabel: "Studio Capabilities",
    capabilitiesTitle: "The disciplines behind every solution.",
    capabilitiesIntro:
      "Strong digital systems require more than code. We connect business context, customer experience, operations, and technology.",
    capabilityOneTitle: "Strategy & Discovery",
    capabilityOneCopy:
      "Business context, customers, operations, priorities, and the opportunity worth pursuing.",
    capabilityTwoTitle: "Experience Design",
    capabilityTwoCopy:
      "Content, journeys, interfaces, and interactions shaped around real people and tasks.",
    capabilityThreeTitle: "Systems & Automation",
    capabilityThreeCopy:
      "Connected workflows, integrations, and AI-enabled processes when they create practical value.",
    capabilityFourTitle: "Build & Launch",
    capabilityFourCopy:
      "Responsive websites, prototypes, internal tools, and digital platforms ready for real use.",
    capabilityFiveTitle: "Measurement & Improvement",
    capabilityFiveCopy:
      "Analytics, visibility, iteration, and continuous optimization after launch.",
    processLabel: "How We Build",
    processTitle: "From business challenge to working solution.",
    discoverTitle: "Discover",
    discoverCopy: "Understand the business, customer, workflow, and growth opportunity.",
    designTitle: "Design",
    designCopy: "Shape the solution around the real use case.",
    buildTitle: "Build",
    buildCopy: "Create the experience, system, dashboard, or product.",
    launchTitle: "Launch",
    launchCopy: "Deploy, test, and make it usable for real teams.",
    improveTitle: "Improve",
    improveCopy: "Measure, learn, and keep refining over time.",
    philosophyLabel: "Studio Philosophy",
    philosophyTitle: "Built to be useful, not just impressive.",
    philosophyCopy:
      "Quantum Media builds practical technology that supports business growth. We do not chase trends for their own sake. We create solutions that real teams can use, maintain, and improve.",
    principleOne: "Business first.",
    principleTwo: "Simple systems.",
    principleThree: "Practical technology.",
    principleFour: "Built for real teams.",
    principleFive: "Improved over time.",
    principleSix: "AI when it helps.",
    showcaseLabel: "60-second break",
    showcaseCaption: "A small digital experience by Quantum Media.",
    showcaseInstructions: "Tap, press Space, or use Arrow Up to help the bird fly.",
    expandGame: "Expand game",
    collapseGame: "Close game",
    scoreLabel: "Score",
    levelLabel: "Level",
    readyLabel: "Ready to Build?",
    contactTitle: "Have a business challenge worth solving?",
    contactCopy: "Let’s design a practical digital solution that addresses the real need.",
    tagline: "Building practical digital solutions for growing businesses.",
    copyright: "© 2026 Quantum Media. All rights reserved.",
    modalClose: "Close contact form",
    modalLabel: "Start a Project",
    modalTitle: "Tell us about your project.",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    companyLabel: "Company",
    businessEmailLabel: "Business Email",
    phoneLabel: "Phone (optional)",
    websiteLabel: "Website (optional)",
    projectTypeLabel: "Solution Type",
    budgetLabel: "Estimated Budget",
    projectDetailsLabel: "Tell us about the business need",
    selectPlaceholder: "Select one",
    projectTypeWeb: "Web Experience",
    projectTypeCx: "Customer Experience Tool",
    projectTypeAutomation: "Automation System",
    projectTypeDashboard: "Dashboard & Visibility",
    projectTypeProduct: "Digital Product or Platform",
    projectTypeOptimization: "Optimization & Evolution",
    budgetOne: "Under $5,000",
    budgetTwo: "$5,000 - $10,000",
    budgetThree: "$10,000 - $25,000",
    budgetFour: "$25,000+",
    budgetFive: "Not sure yet",
    submitProject: "Submit",
    formPrivacy: "By submitting, you agree that Quantum Media may use these details to respond to your inquiry.",
    privacyLink: "Privacy details"
  },
  es: {
    title: "Quantum Media | Estudio de Soluciones Digitales",
    description:
      "Quantum Media diseña experiencias web, automatizaciones, herramientas para clientes, dashboards y productos digitales en función de necesidades reales de negocio.",
    skip: "Saltar al contenido",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    homeAria: "Inicio de Quantum Media",
    navAria: "Navegación principal",
    preferencesAria: "Preferencias del sitio",
    languageAria: "Cambiar idioma",
    themeAria: "Cambiar modo de color",
    showcaseAria: "Experiencia interactiva de Quantum Media",
    gameAria: "Juega con el ave de origami. Toca, presiona Espacio o usa Flecha arriba para volar.",
    collapseGameAria: "Cerrar juego expandido",
    navSolutions: "Soluciones",
    navCapabilities: "Capacidades",
    navProcess: "Proceso",
    navStudio: "Estudio",
    darkLabel: "Oscuro",
    heroLabel: "Estudio de soluciones digitales",
    heroTitle: "Creamos soluciones digitales prácticas para impulsar tu negocio.",
    heroCopy:
      "Quantum Media diseña experiencias web, automatizaciones, herramientas para clientes, dashboards y productos digitales en función de necesidades reales de negocio.",
    startProject: "Iniciar un proyecto",
    exploreSolutions: "Explorar soluciones",
    studioLabel: "El estudio",
    studioTitle: "Un estudio de soluciones digitales prácticas.",
    studioCopyOne:
      "Cada reto de negocio es diferente. Algunas soluciones parten de una base probada. Otras se diseñan desde cero alrededor del cliente, el flujo de trabajo y la oportunidad de crecimiento.",
    studioCopyTwo:
      "El objetivo es simple: construir tecnología que los equipos puedan usar, mantener y mejorar.",
    solutionsLabel: "Lo que construimos",
    solutionsTitle: "Soluciones digitales para necesidades reales de negocio.",
    solutionsIntro:
      "Combinamos estrategia, diseño, tecnología y mejora continua para crear sistemas que las empresas realmente puedan usar.",
    solutionOneTitle: "Experiencias Web",
    solutionOneCopy:
      "Sitios corporativos, landing pages, páginas de producto, portafolios e interfaces enfocadas en conversión.",
    solutionTwoTitle: "Herramientas para la experiencia del cliente",
    solutionTwoCopy:
      "Chatbots, asistentes de preguntas frecuentes, reservas, calificación de leads y flujos de soporte.",
    solutionThreeTitle: "Sistemas de Automatización",
    solutionThreeCopy:
      "Asignación de leads, flujos de CRM, secuencias de correo, reportes automáticos y procesos internos.",
    solutionFourTitle: "Dashboards y Visibilidad del Negocio",
    solutionFourCopy:
      "Dashboards de desempeño, analítica, reportes operativos y herramientas para tomar decisiones.",
    solutionFiveTitle: "Productos y Plataformas Digitales",
    solutionFiveCopy:
      "Herramientas internas, portales para clientes, prototipos y plataformas creadas para casos de uso reales.",
    solutionSixTitle: "Optimización y Evolución",
    solutionSixCopy:
      "Mejora continua, mantenimiento, análisis de desempeño y evolución después del lanzamiento.",
    exploreSolution: "Explorar esta solución",
    waysLabel: "Formas de construir",
    waysTitle: "Parte de una base probada o construye algo nuevo.",
    discussSolution: "Conversemos sobre una solución",
    adaptTitle: "Adaptar una base",
    adaptCopy:
      "Partimos de una estructura probada y la adaptamos a tu marca, industria, flujo de trabajo y experiencia del cliente.",
    customTitle: "Construir a medida",
    customCopy:
      "Diseñamos una solución digital desde cero para resolver un reto específico de negocio.",
    capabilitiesLabel: "Capacidades del estudio",
    capabilitiesTitle: "Las disciplinas detrás de cada solución.",
    capabilitiesIntro:
      "Los sistemas digitales sólidos requieren más que código. Conectamos contexto de negocio, experiencia del cliente, operaciones y tecnología.",
    capabilityOneTitle: "Estrategia y Descubrimiento",
    capabilityOneCopy:
      "Contexto de negocio, clientes, operaciones, prioridades y la oportunidad que vale la pena desarrollar.",
    capabilityTwoTitle: "Diseño de Experiencia",
    capabilityTwoCopy:
      "Contenido, recorridos, interfaces e interacciones diseñadas alrededor de personas y tareas reales.",
    capabilityThreeTitle: "Sistemas y Automatización",
    capabilityThreeCopy:
      "Flujos conectados, integraciones y procesos con IA cuando generan valor práctico.",
    capabilityFourTitle: "Construcción y Lanzamiento",
    capabilityFourCopy:
      "Sitios responsivos, prototipos, herramientas internas y plataformas digitales listas para uso real.",
    capabilityFiveTitle: "Medición y Mejora",
    capabilityFiveCopy:
      "Analítica, visibilidad, iteración y optimización continua después del lanzamiento.",
    processLabel: "Cómo construimos",
    processTitle: "Del reto de negocio a una solución funcional.",
    discoverTitle: "Descubrir",
    discoverCopy: "Entender el negocio, el cliente, el flujo y la oportunidad de crecimiento.",
    designTitle: "Diseñar",
    designCopy: "Dar forma a la solución alrededor del caso de uso real.",
    buildTitle: "Construir",
    buildCopy: "Crear la experiencia, el sistema, el dashboard o el producto.",
    launchTitle: "Lanzar",
    launchCopy: "Implementar, probar y poner la solución en manos de equipos reales.",
    improveTitle: "Mejorar",
    improveCopy: "Medir, aprender y seguir refinando con el tiempo.",
    philosophyLabel: "Filosofía del estudio",
    philosophyTitle: "Creamos soluciones útiles, no solo impresionantes.",
    philosophyCopy:
      "Quantum Media construye tecnología práctica que apoya el crecimiento del negocio. No seguimos tendencias porque sí. Creamos soluciones que los equipos pueden usar, mantener y mejorar en su trabajo diario.",
    principleOne: "El negocio primero.",
    principleTwo: "Sistemas simples.",
    principleThree: "Tecnología práctica.",
    principleFour: "Para equipos reales.",
    principleFive: "Evoluciona con el tiempo.",
    principleSix: "IA cuando aporta valor.",
    showcaseLabel: "Pausa de 60 segundos",
    showcaseCaption: "Una pequeña experiencia digital de Quantum Media.",
    showcaseInstructions: "Toca, presiona Espacio o usa Flecha arriba para ayudar al ave a volar.",
    expandGame: "Expandir juego",
    collapseGame: "Cerrar juego",
    scoreLabel: "Puntos",
    levelLabel: "Nivel",
    readyLabel: "¿Listo para construir?",
    contactTitle: "¿Tienes un reto de negocio que vale la pena resolver?",
    contactCopy: "Diseñemos una solución digital práctica para resolver la necesidad real.",
    tagline: "Construimos soluciones digitales prácticas para negocios en crecimiento.",
    copyright: "© 2026 Quantum Media. Todos los derechos reservados.",
    modalClose: "Cerrar formulario de contacto",
    modalLabel: "Iniciar un proyecto",
    modalTitle: "Cuéntanos sobre tu proyecto.",
    firstNameLabel: "Nombre",
    lastNameLabel: "Apellido",
    companyLabel: "Empresa",
    businessEmailLabel: "Correo empresarial",
    phoneLabel: "Teléfono (opcional)",
    websiteLabel: "Sitio web (opcional)",
    projectTypeLabel: "Tipo de solución",
    budgetLabel: "Presupuesto estimado",
    projectDetailsLabel: "Cuéntanos sobre la necesidad del negocio",
    selectPlaceholder: "Selecciona una opción",
    projectTypeWeb: "Experiencia Web",
    projectTypeCx: "Herramienta de Experiencia del Cliente",
    projectTypeAutomation: "Sistema de Automatización",
    projectTypeDashboard: "Dashboard y Visibilidad",
    projectTypeProduct: "Producto o Plataforma Digital",
    projectTypeOptimization: "Optimización y Evolución",
    budgetOne: "Menos de $5,000",
    budgetTwo: "$5,000 - $10,000",
    budgetThree: "$10,000 - $25,000",
    budgetFour: "$25,000+",
    budgetFive: "Aún no estoy seguro",
    submitProject: "Enviar",
    formPrivacy: "Al enviar, aceptas que Quantum Media use estos datos para responder a tu solicitud.",
    privacyLink: "Ver privacidad"
  }
};

Object.assign(copy.en, pageCopy.en || {});
Object.assign(copy.es, pageCopy.es || {});

const getStoredPreference = (key, fallback, allowedValues) => {
  try {
    const storedValue = localStorage.getItem(key);
    return allowedValues.includes(storedValue) ? storedValue : fallback;
  } catch {
    return fallback;
  }
};

const storePreference = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
};

let currentLanguage = getStoredPreference("qm-language", "en", ["en", "es"]);
let currentTheme = getStoredPreference("qm-theme", "light", ["light", "dark"]);

const closeNav = (restoreFocus = false) => {
  const wasOpen = body.classList.contains("nav-open");
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", copy[currentLanguage].openNav);

  if (restoreFocus && wasOpen) {
    navToggle?.focus({ preventScroll: true });
  }
};

const setTheme = (theme) => {
  currentTheme = theme;
  const isDark = theme === "dark";

  body.classList.toggle("theme-dark", isDark);

  if (themeToggle) {
    themeToggle.checked = isDark;
  }

  themeColor?.setAttribute("content", isDark ? "#020202" : "#f7f6f2");

  if (logo) {
    logo.src = isDark ? logo.dataset.logoDark : logo.dataset.logoLight;
  }

  if (footerLogo) {
    footerLogo.src = isDark
      ? footerLogo.dataset.logoDark || "quantum-media-logo-dark.png"
      : footerLogo.dataset.logoLight || "quantum-media-logo.png";
  }

  redrawShowcaseGame();
  storePreference("qm-theme", theme);
};

const setLanguage = (language) => {
  currentLanguage = language;
  const dictionary = copy[language];

  document.documentElement.lang = language;
  document.title = dictionary.title;
  metaDescription?.setAttribute("content", dictionary.description);
  ogTitle?.setAttribute("content", dictionary.title);
  ogDescription?.setAttribute("content", dictionary.description);

  if (languageToggle) {
    languageToggle.checked = language === "es";
  }

  if (languageLabel) {
    languageLabel.textContent = language === "es" ? "ES" : "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;

    if (dictionary[key] !== undefined) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  refreshShowcaseScore();
  closeNav();
  storePreference("qm-language", language);
};

const getFocusableModalElements = () => {
  if (!projectModal) {
    return [];
  }

  return Array.from(
    projectModal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
    )
  ).filter((element) => element.offsetParent !== null);
};

const openProjectModal = (trigger) => {
  if (!projectModal) {
    return;
  }

  lastProjectTrigger = trigger || document.activeElement;

  const requestedProjectType = trigger?.dataset?.projectType;
  const projectTypeField = projectForm?.elements?.namedItem("project-type");

  if (requestedProjectType && projectTypeField instanceof HTMLSelectElement) {
    projectTypeField.value = requestedProjectType;
  }

  projectModal.removeAttribute("inert");
  projectModal.setAttribute("aria-hidden", "false");
  modalBackgroundRegions.forEach((region) => region.setAttribute("inert", ""));
  body.classList.add("modal-open");

  requestAnimationFrame(() => {
    getFocusableModalElements()[0]?.focus({ preventScroll: true });
  });
};

const closeProjectModal = () => {
  if (!projectModal || projectModal.getAttribute("aria-hidden") === "true") {
    return;
  }

  projectModal.setAttribute("aria-hidden", "true");
  projectModal.setAttribute("inert", "");
  modalBackgroundRegions.forEach((region) => region.removeAttribute("inert"));
  body.classList.remove("modal-open");

  if (lastProjectTrigger instanceof HTMLElement) {
    lastProjectTrigger.focus({ preventScroll: true });
  }
};

projectOpenButtons.forEach((button) => {
  button.addEventListener("click", () => openProjectModal(button));
});

projectCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? copy[currentLanguage].closeNav : copy[currentLanguage].openNav
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId?.startsWith("#")) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    closeNav(true);
    target.scrollIntoView({
      behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      block: "start"
    });
    history.pushState(null, "", targetId);
    requestActiveNavUpdate();
  });
});

themeToggle?.addEventListener("change", () => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  setTheme(themeToggle.checked ? "dark" : "light");
  requestAnimationFrame(() => window.scrollTo(scrollX, scrollY));
});

languageToggle?.addEventListener("change", () => {
  setLanguage(languageToggle.checked ? "es" : "en");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (isShowcaseExpanded) {
      closeExpandedShowcase();
      return;
    }

    closeNav(true);
    closeProjectModal();
    return;
  }

  if (
    event.key === "Tab" &&
    projectModal?.getAttribute("aria-hidden") === "false"
  ) {
    const focusable = getFocusableModalElements();

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const updateHeaderState = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const updateActiveNav = () => {
  const headerOffset =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-space")) ||
    122;
  const probe = headerOffset + 32;
  const linkedSections = navLinks
    .map((link) => {
      const href = link.getAttribute("href");
      return href?.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);
  const activeSection = linkedSections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= probe && rect.bottom > probe;
  });
  const activeHref = activeSection ? `#${activeSection.id}` : "";

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === activeHref;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const updateScrollScenes = () => {
  const viewportHeight = window.innerHeight || 1;

  if (ambientScene && !reducedMotionQuery.matches) {
    const orbitScroll = Math.min(window.scrollY * 0.012, 72);
    ambientScene.style.setProperty("--orbit-scroll", `${orbitScroll}px`);
  }

  if (processTimeline && processSection) {
    const rect = processSection.getBoundingClientRect();
    const progress = reducedMotionQuery.matches
      ? 1
      : clamp(
          (viewportHeight * 0.82 - rect.top) /
            Math.max(rect.height + viewportHeight * 0.18, 1)
        );
    processTimeline.classList.toggle("is-active", progress > 0.04);
    processTimeline.style.setProperty("--process-progress", `${progress * 100}%`);
  }
};

let scrollFrame = 0;

const requestActiveNavUpdate = () => {
  if (scrollFrame) {
    return;
  }

  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    updateHeaderState();
    updateActiveNav();
    updateScrollScenes();
  });
};

window.addEventListener("scroll", requestActiveNavUpdate, { passive: true });
window.addEventListener("resize", () => {
  requestActiveNavUpdate();
});

const setupMotion = () => {
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  const reduceMotion = reducedMotionQuery.matches;

  const staggerGroups = [
    ".solutions-grid .solution-item",
    ".capability-list li",
    ".process-timeline li",
    ".principle-list li"
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 75, 375)}ms`);
    });
  });

  if (!revealItems.length || reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
    processTimeline?.classList.add("is-active");
    processTimeline?.style.setProperty("--process-progress", "100%");
    updateScrollScenes();
    return;
  }

  body.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((element) => revealObserver.observe(element));

  requestActiveNavUpdate();
};

const setupShowcaseGame = () => {
  if (
    !showcaseCanvas ||
    !showcaseSection ||
    !showcaseScore
  ) {
    return;
  }

  const context = showcaseCanvas.getContext("2d");

  if (!context) {
    return;
  }

  let width = 1120;
  let height = 360;
  let animationFrame = 0;
  let resizeFrame = 0;
  let lastFrame = 0;
  let birdY = 180;
  let birdVelocity = 0;
  let score = 0;
  let started = false;
  let running = false;
  let inView = true;
  let obstacles = [];
  let obstacleBag = [];
  let lastObstacleType = "";
  let expandedObstacleBag = [];
  let lastExpandedObstacleType = "";
  let trail = [];
  let birdX = 0;

  const birdRadius = 15;
  const birdHitRadius = birdRadius * 0.82;
  const gravity = 610;
  const lift = -245;
  const baseSpeed = 92;
  const speedStep = 12;
  const maxSpeed = 176;
  const expandedSpeedStep = 18;
  const expandedMaxSpeed = 220;
  const maxExpandedObstacles = 4;
  const obstacleTypes = ["line", "circle", "triangle", "square"];

  const getLevelIndex = (value = score) => Math.floor(value / 10);
  const getLevelNumber = (value = score) => getLevelIndex(value) + 1;

  const formatScore = () =>
    `${copy[currentLanguage].scoreLabel} ${score} · ${copy[currentLanguage].levelLabel} ${getLevelNumber()}`;

  let refreshGameTelemetry = () => {};

  refreshShowcaseScore = () => {
    showcaseScore.textContent = formatScore();
    showcaseCanvas.dataset.gameScore = String(score);
    showcaseCanvas.dataset.gameLevel = String(getLevelNumber());
    refreshGameTelemetry();
  };

  const getDifficulty = () => {
    const level = getLevelIndex();
    const normalSpeed = Math.min(baseSpeed + level * speedStep, maxSpeed);
    const speed = isShowcaseExpanded
      ? Math.min(baseSpeed + level * expandedSpeedStep, expandedMaxSpeed)
      : normalSpeed;
    const comfortableGap = Math.min(295, Math.max(215, width * 0.24));
    const minGap = Math.max(
      190,
      normalSpeed * 1.15,
      comfortableGap - level * 14
    );

    return {
      level,
      speed,
      minGap,
      maxGap: Math.max(
        minGap + Math.max(48, 96 - level * 4),
        comfortableGap + 125 - level * 18
      ),
      sizeScale: 1 + Math.min(level * 0.025, 0.15)
    };
  };

  refreshGameTelemetry = () => {
    showcaseCanvas.dataset.gameState = running
      ? "running"
      : started
        ? "paused"
        : "ready";
    showcaseCanvas.dataset.gameSpeed = String(getDifficulty().speed);
    showcaseCanvas.dataset.gameMode = isShowcaseExpanded
      ? "expanded"
      : "normal";
    showcaseCanvas.dataset.obstacleCount = String(obstacles.length);
    showcaseCanvas.dataset.expandedObstacleCount = String(
      obstacles.filter((obstacle) => obstacle.expandedOnly).length
    );
    showcaseCanvas.dataset.upcomingObstacleCount = String(
      obstacles.filter(
        (obstacle) => getObstacleGeometry(obstacle).bounds.right >= birdX
      ).length
    );
    showcaseCanvas.dataset.gameViewport = `${Math.round(width)}x${Math.round(height)}`;
    showcaseCanvas.dataset.obstacleTypes = obstacles
      .map((obstacle) => obstacle.type)
      .join(" ");
  };

  const shuffleObstacleBag = () => {
    obstacleBag = [...obstacleTypes];

    for (let index = obstacleBag.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [obstacleBag[index], obstacleBag[randomIndex]] = [
        obstacleBag[randomIndex],
        obstacleBag[index]
      ];
    }

    if (
      lastObstacleType &&
      obstacleBag.at(-1) === lastObstacleType &&
      obstacleBag.length > 1
    ) {
      [obstacleBag[0], obstacleBag[obstacleBag.length - 1]] = [
        obstacleBag.at(-1),
        obstacleBag[0]
      ];
    }
  };

  const getNextObstacleType = () => {
    if (!obstacleBag.length) {
      shuffleObstacleBag();
    }

    const type = obstacleBag.pop();
    lastObstacleType = type;
    return type;
  };

  const shuffleExpandedObstacleBag = () => {
    expandedObstacleBag = [...obstacleTypes];

    for (let index = expandedObstacleBag.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [expandedObstacleBag[index], expandedObstacleBag[randomIndex]] = [
        expandedObstacleBag[randomIndex],
        expandedObstacleBag[index]
      ];
    }

    if (
      lastExpandedObstacleType &&
      expandedObstacleBag.at(-1) === lastExpandedObstacleType &&
      expandedObstacleBag.length > 1
    ) {
      [
        expandedObstacleBag[0],
        expandedObstacleBag[expandedObstacleBag.length - 1]
      ] = [expandedObstacleBag.at(-1), expandedObstacleBag[0]];
    }
  };

  const getNextExpandedObstacleType = () => {
    if (!expandedObstacleBag.length) {
      shuffleExpandedObstacleBag();
    }

    const type = expandedObstacleBag.pop();
    lastExpandedObstacleType = type;
    return type;
  };

  const rotatePoint = (point, rotation, originX, originY) => {
    const cosine = Math.cos(rotation);
    const sine = Math.sin(rotation);

    return {
      x: originX + point.x * cosine - point.y * sine,
      y: originY + point.x * sine + point.y * cosine
    };
  };

  const getBoundsFromPoints = (points, padding = 0) => {
    const xValues = points.map((point) => point.x);
    const yValues = points.map((point) => point.y);

    return {
      left: Math.min(...xValues) - padding,
      right: Math.max(...xValues) + padding,
      top: Math.min(...yValues) - padding,
      bottom: Math.max(...yValues) + padding
    };
  };

  const getObstacleGeometry = (obstacle) => {
    const size = obstacle.sizeRatio * Math.min(width, height);

    if (obstacle.type === "line") {
      const halfLength = size * 0.5;
      const deltaX = Math.cos(obstacle.rotation) * halfLength;
      const deltaY = Math.sin(obstacle.rotation) * halfLength;
      const points = [
        { x: obstacle.x - deltaX, y: obstacle.y - deltaY },
        { x: obstacle.x + deltaX, y: obstacle.y + deltaY }
      ];

      return {
        type: obstacle.type,
        points,
        bounds: getBoundsFromPoints(points, 2)
      };
    }

    if (obstacle.type === "circle") {
      const radius = size * 0.5;

      return {
        type: obstacle.type,
        radius,
        points: [],
        bounds: {
          left: obstacle.x - radius,
          right: obstacle.x + radius,
          top: obstacle.y - radius,
          bottom: obstacle.y + radius
        }
      };
    }

    const localPoints = obstacle.type === "triangle"
      ? [
          { x: 0, y: -size / Math.sqrt(3) },
          { x: size * 0.5, y: size / (2 * Math.sqrt(3)) },
          { x: -size * 0.5, y: size / (2 * Math.sqrt(3)) }
        ]
      : [
          { x: -size * 0.5, y: -size * 0.5 },
          { x: size * 0.5, y: -size * 0.5 },
          { x: size * 0.5, y: size * 0.5 },
          { x: -size * 0.5, y: size * 0.5 }
        ];
    const points = localPoints.map((point) =>
      rotatePoint(point, obstacle.rotation, obstacle.x, obstacle.y)
    );

    return {
      type: obstacle.type,
      points,
      bounds: getBoundsFromPoints(points)
    };
  };

  const fitObstacleVertically = (obstacle, edgePadding = 18) => {
    const geometry = getObstacleGeometry(obstacle);
    const availablePadding = Math.min(edgePadding, Math.max(2, height * 0.08));

    if (geometry.bounds.top < availablePadding) {
      obstacle.y += availablePadding - geometry.bounds.top;
    }

    const adjustedGeometry = getObstacleGeometry(obstacle);

    if (adjustedGeometry.bounds.bottom > height - availablePadding) {
      obstacle.y -= adjustedGeometry.bounds.bottom - (height - availablePadding);
    }

    return obstacle;
  };

  const createObstacle = (
    leftEdge,
    { expandedOnly = false, sizeMultiplier = 1 } = {}
  ) => {
    const difficulty = getDifficulty();
    const type = expandedOnly
      ? getNextExpandedObstacleType()
      : getNextObstacleType();
    const isLine = type === "line";
    const baseSizeRatio = isLine
      ? Math.min(0.78, (0.4 + Math.random() * 0.3) * difficulty.sizeScale)
      : Math.min(0.24, (0.13 + Math.random() * 0.08) * difficulty.sizeScale);
    const sizeRatio = baseSizeRatio * sizeMultiplier;
    const rotation = type === "circle"
      ? Math.random() * Math.PI * 2
      : type === "line"
        ? (Math.random() - 0.5) * 0.95
        : (Math.random() - 0.5) * 0.8;
    const obstacle = {
      type,
      x: 0,
      y: height * 0.5,
      sizeRatio,
      rotation,
      accentAngle: Math.random() * Math.PI * 2,
      hasAccent: Math.random() > 0.42,
      passed: false,
      expandedOnly
    };
    const centeredGeometry = getObstacleGeometry(obstacle);
    const halfHeight = Math.max(
      Math.abs(centeredGeometry.bounds.top - obstacle.y),
      Math.abs(centeredGeometry.bounds.bottom - obstacle.y)
    );
    const margin = Math.min(
      height * 0.5 - 1,
      halfHeight + birdHitRadius * 2 + 10
    );
    obstacle.y = margin + Math.random() * Math.max(1, height - margin * 2);
    fitObstacleVertically(obstacle);
    const positionedGeometry = getObstacleGeometry(obstacle);
    obstacle.x = leftEdge - positionedGeometry.bounds.left;

    return obstacle;
  };

  const getSpawnGap = () => {
    const difficulty = getDifficulty();
    return difficulty.minGap + Math.random() * (difficulty.maxGap - difficulty.minGap);
  };

  const getExpandedExtraGap = () =>
    Math.max(58, Math.min(82, getDifficulty().speed * 0.42));

  const reconcileExpandedObstacleDensity = () => {
    if (!isShowcaseExpanded) {
      return false;
    }

    obstacles.sort((first, second) => first.x - second.x);
    const baseObstacles = obstacles.filter((obstacle) => !obstacle.expandedOnly);
    let upcomingExpandedCount = obstacles.filter(
      (obstacle) =>
        obstacle.expandedOnly &&
        getObstacleGeometry(obstacle).bounds.right >= birdX
    ).length;
    const additions = [];
    const extraGap = getExpandedExtraGap();
    const safeLead = birdX + Math.max(110, getDifficulty().speed * 0.72);

    for (
      let index = 0;
      index < baseObstacles.length - 1 && upcomingExpandedCount < maxExpandedObstacles;
      index += 1
    ) {
      const leftObstacle = baseObstacles[index];
      const rightObstacle = baseObstacles[index + 1];
      const leftBounds = getObstacleGeometry(leftObstacle).bounds;
      const rightBounds = getObstacleGeometry(rightObstacle).bounds;

      if (rightBounds.left <= safeLead) {
        continue;
      }

      const alreadyFilled = obstacles.some((obstacle) => {
        if (!obstacle.expandedOnly) {
          return false;
        }

        const bounds = getObstacleGeometry(obstacle).bounds;
        return bounds.left > leftBounds.right && bounds.right < rightBounds.left;
      });

      if (alreadyFilled) {
        continue;
      }

      for (let attempt = 0; attempt < 3; attempt += 1) {
        const candidate = createObstacle(leftBounds.right + extraGap, {
          expandedOnly: true,
          sizeMultiplier: 0.54
        });
        const candidateBounds = getObstacleGeometry(candidate).bounds;

        if (
          candidateBounds.left >= safeLead &&
          candidateBounds.right + extraGap <= rightBounds.left
        ) {
          additions.push(candidate);
          upcomingExpandedCount += 1;
          break;
        }
      }
    }

    if (!additions.length) {
      return false;
    }

    obstacles.push(...additions);
    obstacles.sort((first, second) => first.x - second.x);
    return true;
  };

  const removeExpandedObstacles = () => {
    const nextObstacles = obstacles.filter((obstacle) => !obstacle.expandedOnly);

    if (nextObstacles.length === obstacles.length) {
      return false;
    }

    obstacles = nextObstacles;
    obstacles.sort((first, second) => first.x - second.x);
    return true;
  };

  const syncObstacleDensityForMode = (expanded = isShowcaseExpanded) => {
    const changed = expanded
      ? reconcileExpandedObstacleDensity()
      : removeExpandedObstacles();

    refreshGameTelemetry();
    return changed;
  };

  const seedObstacles = () => {
    obstacles = [];
    obstacleBag = [];
    lastObstacleType = "";
    expandedObstacleBag = [];
    lastExpandedObstacleType = "";
    let nextLeft = birdX + Math.max(150, width * 0.16);

    for (let index = 0; index < 5; index += 1) {
      const obstacle = createObstacle(nextLeft);
      obstacles.push(obstacle);
      nextLeft = getObstacleGeometry(obstacle).bounds.right + getSpawnGap();
    }
  };

  const resizeCanvas = () => {
    const rect = showcaseCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width || 1120;
    height = rect.height || 360;
    birdX = width * 0.48;
    showcaseCanvas.width = Math.round(width * pixelRatio);
    showcaseCanvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const resetTrail = () => {
    trail = Array.from({ length: 24 }, (_, index) => ({
      y: birdY + Math.sin(index * 0.42) * 5
    }));
  };

  const resetGame = () => {
    birdY = height * 0.5;
    birdVelocity = 0;
    score = 0;
    seedObstacles();
    syncObstacleDensityForMode(isShowcaseExpanded);
    resetTrail();
    refreshShowcaseScore();
  };

  const getCanvasColors = () => {
    const styles = getComputedStyle(document.body);

    return {
      background: styles.getPropertyValue("--bg").trim() || "#f7f6f2",
      text: styles.getPropertyValue("--text").trim() || "#050505",
      accent: styles.getPropertyValue("--accent").trim() || "#ff5757"
    };
  };

  const drawTrace = (colors) => {
    if (trail.length < 2) {
      return;
    }

    context.save();
    context.globalAlpha = 0.28;
    context.strokeStyle = colors.text;
    context.lineWidth = 1.3;
    context.setLineDash([6, 9]);
    context.beginPath();

    trail.forEach((point, index) => {
      const age = trail.length - 1 - index;
      const x = birdX - 30 - age * 14;
      const y = point.y + Math.sin(age * 0.38) * 3;

      if (index === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });

    context.stroke();
    context.restore();
  };

  const drawBird = (colors) => {
    context.save();
    context.translate(birdX, birdY);
    context.rotate(Math.max(-0.34, Math.min(0.42, birdVelocity / 520)));
    context.fillStyle = colors.text;
    context.beginPath();
    context.moveTo(-22, -8);
    context.lineTo(2, -18);
    context.lineTo(24, 0);
    context.lineTo(2, 17);
    context.lineTo(-20, 8);
    context.lineTo(-6, 0);
    context.closePath();
    context.fill();
    context.strokeStyle = colors.background;
    context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(-6, 0);
    context.lineTo(2, -18);
    context.moveTo(-6, 0);
    context.lineTo(2, 17);
    context.stroke();
    context.fillStyle = colors.accent;
    context.beginPath();
    context.arc(10, -4, 1.7, 0, Math.PI * 2);
    context.fill();
    context.restore();
  };

  const drawObstacle = (obstacle, colors) => {
    const geometry = getObstacleGeometry(obstacle);
    context.save();
    context.strokeStyle = colors.text;
    context.fillStyle = colors.text;
    context.lineWidth = 1.6;
    context.lineJoin = "round";
    context.lineCap = "round";

    if (obstacle.type === "line") {
      context.globalAlpha = 0.72;
      context.beginPath();
      context.moveTo(geometry.points[0].x, geometry.points[0].y);
      context.lineTo(geometry.points[1].x, geometry.points[1].y);
      context.stroke();
    } else if (obstacle.type === "circle") {
      context.globalAlpha = 0.07;
      context.beginPath();
      context.arc(obstacle.x, obstacle.y, geometry.radius, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 0.74;
      context.stroke();
    } else {
      context.globalAlpha = 0.07;
      context.beginPath();
      geometry.points.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      });
      context.closePath();
      context.fill();
      context.globalAlpha = 0.74;
      context.stroke();
    }

    if (obstacle.hasAccent) {
      let accentPoint;

      if (obstacle.type === "circle") {
        accentPoint = {
          x: obstacle.x + Math.cos(obstacle.accentAngle) * geometry.radius,
          y: obstacle.y + Math.sin(obstacle.accentAngle) * geometry.radius
        };
      } else if (obstacle.type === "line") {
        accentPoint = geometry.points[1];
      } else {
        accentPoint = geometry.points[0];
      }

      context.globalAlpha = 0.9;
      context.fillStyle = colors.accent;
      context.beginPath();
      context.arc(accentPoint.x, accentPoint.y, 2, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  };

  const distanceToSegment = (pointX, pointY, start, end) => {
    const segmentX = end.x - start.x;
    const segmentY = end.y - start.y;
    const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;

    if (!segmentLengthSquared) {
      return Math.hypot(pointX - start.x, pointY - start.y);
    }

    const projection = Math.max(
      0,
      Math.min(
        1,
        ((pointX - start.x) * segmentX + (pointY - start.y) * segmentY) /
          segmentLengthSquared
      )
    );
    const closestX = start.x + projection * segmentX;
    const closestY = start.y + projection * segmentY;

    return Math.hypot(pointX - closestX, pointY - closestY);
  };

  const pointInPolygon = (pointX, pointY, points) => {
    let inside = false;

    for (let index = 0, previous = points.length - 1; index < points.length; previous = index, index += 1) {
      const currentPoint = points[index];
      const previousPoint = points[previous];
      const intersects =
        currentPoint.y > pointY !== previousPoint.y > pointY &&
        pointX <
          ((previousPoint.x - currentPoint.x) * (pointY - currentPoint.y)) /
            (previousPoint.y - currentPoint.y) +
            currentPoint.x;

      if (intersects) {
        inside = !inside;
      }
    }

    return inside;
  };

  const obstacleHitsBird = (obstacle) => {
    const geometry = getObstacleGeometry(obstacle);

    if (obstacle.type === "line") {
      return distanceToSegment(
        birdX,
        birdY,
        geometry.points[0],
        geometry.points[1]
      ) <= birdHitRadius + 1;
    }

    if (obstacle.type === "circle") {
      return Math.hypot(birdX - obstacle.x, birdY - obstacle.y) <=
        birdHitRadius + geometry.radius;
    }

    if (pointInPolygon(birdX, birdY, geometry.points)) {
      return true;
    }

    return geometry.points.some((point, index) =>
      distanceToSegment(
        birdX,
        birdY,
        point,
        geometry.points[(index + 1) % geometry.points.length]
      ) <= birdHitRadius
    );
  };

  const drawScene = () => {
    const colors = getCanvasColors();
    context.clearRect(0, 0, width, height);
    drawTrace(colors);
    obstacles.forEach((obstacle) => drawObstacle(obstacle, colors));
    drawBird(colors);
  };

  const stopGame = () => {
    running = false;
    cancelAnimationFrame(animationFrame);
    refreshGameTelemetry();
  };

  const failGame = () => {
    stopGame();
    started = false;
    resetGame();
    drawScene();
  };

  const advanceGame = (delta, frameSpeed) => {
    birdVelocity += gravity * delta;
    birdY += birdVelocity * delta;
    let obstacleSetChanged = false;
    obstacles.forEach((obstacle) => {
      obstacle.x -= frameSpeed * delta;
      const bounds = getObstacleGeometry(obstacle).bounds;

      if (!obstacle.passed && bounds.right < birdX - birdHitRadius) {
        obstacle.passed = true;
        score += 1;
        refreshShowcaseScore();
      }
    });

    while (
      obstacles[0] &&
      getObstacleGeometry(obstacles[0]).bounds.right < -24
    ) {
      obstacles.shift();
      obstacleSetChanged = true;
    }

    const lastObstacle = obstacles.at(-1);
    const lastRight = lastObstacle
      ? getObstacleGeometry(lastObstacle).bounds.right
      : birdX + Math.max(150, width * 0.16);

    if (!lastObstacle || lastRight < width + Math.max(55, width * 0.06)) {
      const nextLeft = Math.max(width + 70, lastRight + getSpawnGap());
      obstacles.push(createObstacle(nextLeft));
      obstacleSetChanged = true;
    }

    if (isShowcaseExpanded && obstacleSetChanged) {
      obstacleSetChanged = reconcileExpandedObstacleDensity() || obstacleSetChanged;
    }

    if (obstacleSetChanged) {
      refreshGameTelemetry();
    }

    const hitObstacle = obstacles.some((obstacle) => obstacleHitsBird(obstacle));
    const hitBoundary = birdY < birdHitRadius || birdY > height - birdHitRadius;

    if (hitBoundary || hitObstacle) {
      failGame();
      return false;
    }

    return true;
  };

  const updateGame = (delta) => {
    const frameSpeed = getDifficulty().speed;
    const predictedVelocity = birdVelocity + gravity * delta;
    const verticalTravel = Math.max(
      Math.abs(birdVelocity),
      Math.abs(predictedVelocity)
    ) * delta;
    const horizontalTravel = frameSpeed * delta;
    const maximumTravel = Math.max(verticalTravel, horizontalTravel);
    const substeps = Math.min(
      4,
      Math.max(1, Math.ceil(maximumTravel / (birdHitRadius * 0.72)))
    );
    const stepDelta = delta / substeps;

    for (let index = 0; index < substeps; index += 1) {
      if (!advanceGame(stepDelta, frameSpeed)) {
        return;
      }
    }

    trail.push({ y: birdY });

    if (trail.length > 30) {
      trail.shift();
    }
  };

  const playLoop = (timestamp) => {
    if (!running || document.hidden) {
      return;
    }

    if (!inView && !isShowcaseExpanded) {
      stopGame();
      return;
    }

    if (!lastFrame) {
      lastFrame = timestamp;
    }

    const delta = Math.min((timestamp - lastFrame) / 1000, 0.03);
    lastFrame = timestamp;
    updateGame(delta);
    drawScene();

    if (running) {
      animationFrame = requestAnimationFrame(playLoop);
    }
  };

  const flap = () => {
    if (!started) {
      started = true;
    }

    birdVelocity = lift;

    if (!running && (inView || isShowcaseExpanded) && !document.hidden) {
      running = true;
      lastFrame = 0;
      animationFrame = requestAnimationFrame(playLoop);
    }

    refreshGameTelemetry();
  };

  showcaseCanvas.addEventListener("pointerdown", flap);
  showcaseCanvas.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "ArrowUp" || event.key === "Enter") {
      event.preventDefault();
      flap();
    }
  });
  showcaseCanvas.tabIndex = 0;

  const resizeGamePreservingState = () => {
    const previousWidth = width;
    const previousHeight = height;
    const previousBirdX = birdX;
    const previousObstacleStates = obstacles.map((obstacle) => {
      const bounds = getObstacleGeometry(obstacle).bounds;

      return {
        wasAhead: bounds.left > previousBirdX + birdHitRadius,
        wasBehind: bounds.right < previousBirdX - birdHitRadius,
        wasColliding: obstacleHitsBird(obstacle)
      };
    });

    resizeCanvas();

    if (previousWidth > 0 && previousHeight > 0) {
      const verticalScale = height / previousHeight;

      birdY *= verticalScale;
      trail = trail.map((point) => ({ y: point.y * verticalScale }));
      birdY = Math.max(birdRadius + 4, Math.min(height - birdRadius - 4, birdY));
      birdVelocity = Math.max(
        lift,
        Math.min(Math.max(260, height * 0.75), birdVelocity)
      );
      obstacles = obstacles.map((obstacle, index) => {
        const previousState = previousObstacleStates[index];
        const adjustedObstacle = fitObstacleVertically({
          ...obstacle,
          x: birdX + (obstacle.x - previousBirdX),
          y: obstacle.y * verticalScale
        });
        const safeDistance = birdHitRadius + 8;
        let bounds = getObstacleGeometry(adjustedObstacle).bounds;

        if (
          previousState?.wasAhead &&
          bounds.left < birdX + safeDistance
        ) {
          adjustedObstacle.x += birdX + safeDistance - bounds.left;
        } else if (
          previousState?.wasBehind &&
          bounds.right > birdX - safeDistance
        ) {
          adjustedObstacle.x -= bounds.right - (birdX - safeDistance);
        }

        bounds = getObstacleGeometry(adjustedObstacle).bounds;

        if (previousState && !previousState.wasColliding && obstacleHitsBird(adjustedObstacle)) {
          if (adjustedObstacle.passed || adjustedObstacle.x < birdX) {
            adjustedObstacle.x -= Math.max(
              0,
              bounds.right - (birdX - safeDistance)
            );
          } else {
            adjustedObstacle.x += Math.max(
              0,
              birdX + safeDistance - bounds.left
            );
          }
        }

        return adjustedObstacle;
      });
      obstacles.sort((first, second) => first.x - second.x);
    }

    syncObstacleDensityForMode(isShowcaseExpanded);
    drawScene();
  };

  window.addEventListener("resize", () => {
    if (resizeFrame) {
      return;
    }

    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      resizeGamePreservingState();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopGame();
    }
  });

  if ("IntersectionObserver" in window) {
    const gameObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;

        if (!inView && !isShowcaseExpanded) {
          stopGame();
        }
      },
      { threshold: 0.2 }
    );

    gameObserver.observe(showcaseSection);
  }

  redrawShowcaseGame = () => {
    resizeGamePreservingState();
  };

  syncShowcaseGameMode = (expanded = isShowcaseExpanded) => {
    const changed = syncObstacleDensityForMode(expanded);

    if (changed) {
      drawScene();
    }
  };

  resizeCanvas();
  resetGame();
  drawScene();
};

const setupExpandedShowcase = () => {
  if (
    !showcaseExperience ||
    !showcaseExpandButton ||
    !showcaseCollapseButton ||
    !showcaseCanvas
  ) {
    return;
  }

  const mobileShowcaseQuery = window.matchMedia(
    "(max-width: 760px), (max-width: 1000px) and (hover: none) and (pointer: coarse)"
  );
  let originMarker = null;
  let lockedScrollY = 0;
  let temporarilyInertElements = [];
  let nativeFullscreenActive = false;

  const redrawAfterLayout = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(redrawShowcaseGame);
    });
  };

  const getExpandedGameFocusables = () =>
    [showcaseCollapseButton, showcaseCanvas].filter(
      (element) => element instanceof HTMLElement && !element.hidden
    );

  const expandShowcase = () => {
    if (isShowcaseExpanded || !mobileShowcaseQuery.matches) {
      return;
    }

    const originParent = showcaseExperience.parentNode;

    if (!originParent) {
      return;
    }

    lockedScrollY = window.scrollY;
    originMarker = document.createComment("showcase-experience-origin");
    originParent.insertBefore(originMarker, showcaseExperience);
    body.append(showcaseExperience);

    temporarilyInertElements = Array.from(body.children).filter((element) => {
      if (
        element === showcaseExperience ||
        !(element instanceof HTMLElement) ||
        element.hasAttribute("inert")
      ) {
        return false;
      }

      element.setAttribute("inert", "");
      return true;
    });

    isShowcaseExpanded = true;
    showcaseExperience.classList.add("is-expanded");
    showcaseExperience.setAttribute("role", "dialog");
    showcaseExperience.setAttribute("aria-modal", "true");
    showcaseExpandButton.setAttribute("aria-expanded", "true");
    showcaseCollapseButton.hidden = false;
    body.style.setProperty("--showcase-scroll-offset", `${-lockedScrollY}px`);
    body.classList.add("showcase-expanded");

    if (typeof showcaseExperience.requestFullscreen === "function") {
      try {
        const fullscreenRequest = showcaseExperience.requestFullscreen({
          navigationUI: "hide"
        });

        fullscreenRequest?.catch(() => {
          // The fixed full-viewport experience remains the Safari/iPhone fallback.
        });
      } catch {
        // Some mobile engines expose the method without supporting this element.
      }
    }

    redrawAfterLayout();
    requestAnimationFrame(() => {
      showcaseCollapseButton.focus({ preventScroll: true });
    });
  };

  const finishExpandedShowcaseClose = () => {
    if (!isShowcaseExpanded) {
      return;
    }

    isShowcaseExpanded = false;
    syncShowcaseGameMode(false);
    nativeFullscreenActive = false;
    showcaseExperience.classList.remove("is-expanded");
    showcaseExperience.removeAttribute("role");
    showcaseExperience.removeAttribute("aria-modal");
    showcaseExpandButton.setAttribute("aria-expanded", "false");
    showcaseCollapseButton.hidden = true;

    if (originMarker?.parentNode) {
      originMarker.parentNode.replaceChild(showcaseExperience, originMarker);
    }

    originMarker = null;
    temporarilyInertElements.forEach((element) => element.removeAttribute("inert"));
    temporarilyInertElements = [];
    body.classList.remove("showcase-expanded");
    body.style.removeProperty("--showcase-scroll-offset");
    document.documentElement.classList.add("showcase-restoring-scroll");
    window.scrollTo(0, lockedScrollY);

    redrawAfterLayout();
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("showcase-restoring-scroll");
      showcaseExpandButton.focus({ preventScroll: true });
    });
  };

  closeExpandedShowcase = () => {
    if (!isShowcaseExpanded) {
      return;
    }

    if (
      document.fullscreenElement === showcaseExperience &&
      typeof document.exitFullscreen === "function"
    ) {
      try {
        const exitRequest = document.exitFullscreen();
        exitRequest?.then(finishExpandedShowcaseClose).catch(finishExpandedShowcaseClose);
        return;
      } catch {
        finishExpandedShowcaseClose();
        return;
      }
    }

    finishExpandedShowcaseClose();
  };

  showcaseExpandButton.addEventListener("click", expandShowcase);
  showcaseCollapseButton.addEventListener("click", closeExpandedShowcase);

  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement === showcaseExperience) {
      nativeFullscreenActive = true;
      redrawAfterLayout();
      return;
    }

    const shouldCloseExpandedExperience = nativeFullscreenActive && isShowcaseExpanded;
    nativeFullscreenActive = false;

    if (shouldCloseExpandedExperience) {
      finishExpandedShowcaseClose();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isShowcaseExpanded || event.key !== "Tab") {
      return;
    }

    const focusable = getExpandedGameFocusables();
    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) {
      return;
    }

    if (!focusable.includes(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  mobileShowcaseQuery.addEventListener?.("change", (event) => {
    if (!event.matches && isShowcaseExpanded) {
      closeExpandedShowcase();
    }
  });
};

reducedMotionQuery.addEventListener?.("change", () => {
  if (reducedMotionQuery.matches) {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  requestActiveNavUpdate();
});

setTheme(currentTheme);
setLanguage(currentLanguage);
setupMotion();
setupShowcaseGame();
setupExpandedShowcase();
updateHeaderState();
updateActiveNav();
updateScrollScenes();
