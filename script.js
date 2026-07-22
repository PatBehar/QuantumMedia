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
    gameAria: "Play the origami bird game. Use Space or Arrow Up to fly.",
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
    showcaseInstructions: "Press Space or Arrow Up to help the bird fly.",
    scoreLabel: "Score",
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
    gameAria: "Juega con el ave de origami. Usa Espacio o Flecha arriba para volar.",
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
    showcaseInstructions: "Presiona Espacio o Flecha arriba para ayudar al ave a volar.",
    scoreLabel: "Puntos",
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
    !showcaseScore ||
    reducedMotionQuery.matches ||
    window.matchMedia("(max-width: 760px)").matches
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
  let trail = [];
  let birdX = 0;

  const birdRadius = 15;
  const gravity = 610;
  const lift = -245;
  const baseSpeed = 92;
  const speedStep = 12;
  const maxSpeed = 165;

  const formatScore = () => `${copy[currentLanguage].scoreLabel} ${score}`;

  refreshShowcaseScore = () => {
    showcaseScore.textContent = formatScore();
  };

  const getCurrentSpeed = () => {
    const level = Math.floor(score / 10);
    return Math.min(baseSpeed + level * speedStep, maxSpeed);
  };

  const createObstacle = (x) => {
    const lineWidth = Math.min(width * 0.3, 126 + Math.random() * 165);
    const margin = 52;
    const y = margin + Math.random() * Math.max(1, height - margin * 2);

    return { x, y, lineWidth, passed: false };
  };

  const seedObstacles = () => {
    obstacles = [];
    let nextX = birdX + 150 + Math.random() * 100;

    for (let index = 0; index < 5; index += 1) {
      obstacles.push(createObstacle(nextX));
      nextX += 245 + Math.random() * 235;
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
    context.strokeStyle = colors.text;
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(obstacle.x, obstacle.y);
    context.lineTo(obstacle.x + obstacle.lineWidth, obstacle.y);
    context.stroke();
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
  };

  const failGame = () => {
    stopGame();
    started = false;
    resetGame();
    drawScene();
  };

  const updateGame = (delta) => {
    birdVelocity += gravity * delta;
    birdY += birdVelocity * delta;
    trail.push({ y: birdY });

    if (trail.length > 30) {
      trail.shift();
    }

    obstacles.forEach((obstacle) => {
      obstacle.x -= getCurrentSpeed() * delta;

      if (!obstacle.passed && obstacle.x + obstacle.lineWidth < birdX) {
        obstacle.passed = true;
        score += 1;
        refreshShowcaseScore();
      }
    });

    if (obstacles[0] && obstacles[0].x + obstacles[0].lineWidth < -12) {
      obstacles.shift();
    }

    if (obstacles.at(-1)?.x < width - 280) {
      obstacles.push(createObstacle(width + 140 + Math.random() * 110));
    }

    const hitObstacle = obstacles.some((obstacle) => {
      const closestX = Math.max(obstacle.x, Math.min(birdX, obstacle.x + obstacle.lineWidth));
      return Math.hypot(birdX - closestX, birdY - obstacle.y) < birdRadius * 0.82;
    });

    if (birdY < 4 || birdY > height - 4 || hitObstacle) {
      failGame();
    }
  };

  const playLoop = (timestamp) => {
    if (!running || !inView || document.hidden) {
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
      resetGame();
      started = true;
    }

    birdVelocity = lift;

    if (!running && inView && !document.hidden) {
      running = true;
      lastFrame = 0;
      animationFrame = requestAnimationFrame(playLoop);
    }
  };

  showcaseCanvas.addEventListener("pointerdown", flap);
  showcaseCanvas.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "ArrowUp") {
      event.preventDefault();
      flap();
    }
  });
  showcaseCanvas.tabIndex = 0;

  window.addEventListener("resize", () => {
    if (resizeFrame) {
      return;
    }

    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      resizeCanvas();
      resetGame();
      drawScene();
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

        if (!inView) {
          stopGame();
        }
      },
      { threshold: 0.2 }
    );

    gameObserver.observe(showcaseSection);
  }

  redrawShowcaseGame = () => {
    resizeCanvas();
    drawScene();
  };

  resizeCanvas();
  resetGame();
  drawScene();
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
updateHeaderState();
updateActiveNav();
updateScrollScenes();
