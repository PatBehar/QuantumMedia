const body = document.body;
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
const projectStatus = document.querySelector("[data-project-status]");
const showcaseCanvas = document.querySelector("[data-showcase-canvas]");
const showcaseSection = document.querySelector("[data-showcase-section]");
const showcaseScore = document.querySelector("[data-showcase-score]");
let redrawShowcaseGame = () => {};

const copy = {
  en: {
    title: "Quantum Media | Digital Solutions Studio",
    description:
      "Quantum Media helps businesses build, manage, automate, optimize, and scale the digital assets that support long-term business growth.",
    skip: "Skip to content",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    navServices: "Services",
    navProcess: "Process",
    navPhilosophy: "Philosophy",
    navServe: "Who We Are",
    darkLabel: "Dark",
    heroLabel: "Digital Solutions Studio",
    heroTitle: "We build digital solutions that grow your business",
    heroCopy:
      "Quantum Media helps businesses build, manage, automate, optimize, and scale the digital assets that support long-term business growth.",
    startProject: "Start a Project",
    exploreServices: "Explore Services",
    assetsLabel: "Strategic Foundation",
    assetsTitle: "Every digital asset should create measurable business value.",
    assetsCopyOne:
      "Your website, customer communication, automations, analytics, and software should work together as one business system.",
    assetsCopyTwo:
      "Every digital asset should support growth, improve operations, and create better customer experiences.",
    assetsCopyThree:
      "Technology only creates value when it improves how a business operates.",
    aboutLabel: "About Us",
    aboutTitle: "Technology follows business. Not the other way around.",
    aboutCopyOne:
      "Many businesses rely on disconnected websites, tools, workflows, and customer touchpoints.",
    aboutCopyTwo:
      "Quantum Media helps simplify that complexity by building practical digital systems designed around business operations, customer experience, and measurable growth.",
    servicesLabel: "Our Services",
    buildTitle: "Build",
    buildCopy:
      "Create the digital foundation your business needs through websites, landing pages, mobile experiences, and conversion-focused design.",
    manageTitle: "Manage",
    manageCopy: "Keep every digital asset secure, updated, monitored, and performing at its best.",
    automateTitle: "Automate",
    automateCopy:
      "Connect systems, remove repetitive work, and improve operational efficiency with practical automation.",
    optimizeTitle: "Optimize",
    optimizeCopy:
      "Measure performance, identify opportunities, improve conversion, and continuously optimize business outcomes.",
    scaleTitle: "Scale",
    scaleCopy:
      "Expand your digital capabilities through software, AI-enabled solutions, integrations, and systems that support long-term growth.",
    whyLabel: "Our Principles",
    whyOneTitle: "Business First",
    whyOneCopy: "Every technology decision should support business goals.",
    whyTwoTitle: "Build for the Long Term",
    whyTwoCopy: "Create solutions that remain valuable as the business grows.",
    whyThreeTitle: "Keep Technology Practical",
    whyThreeCopy: "Technology should simplify operations, never complicate them.",
    whyFourTitle: "Optimize Continuously",
    whyFourCopy: "Launch is only the beginning. Improvement never stops.",
    philosophyLabel: "Our Philosophy",
    philosophyTitle: "We Build. We Manage. We Optimize.",
    principleOne: "Business First",
    principleTwo: "Build for the Long Term",
    principleThree: "Keep Technology Practical",
    principleFour: "Measure Everything",
    principleFive: "Optimize Continuously",
    principleSix: "Simplify Complexity",
    processLabel: "Our Process",
    discoverTitle: "Discover",
    discoverCopy: "Understand the business, customers, operations, and objectives.",
    designTitle: "Design",
    designCopy: "Create digital solutions aligned with measurable business goals.",
    deployTitle: "Deploy",
    deployCopy: "Launch efficiently with minimal disruption and technical excellence.",
    processOptimizeTitle: "Optimize",
    processOptimizeCopy:
      "Measure performance, identify improvements, and continuously increase business value.",
    serveLabel: "Who We Serve",
    serveOne: "Professional Services",
    serveTwo: "Healthcare",
    serveThree: "Hospitality",
    serveFour: "Real Estate",
    serveFive: "Local Businesses",
    serveSix: "Startups",
    serveSeven: "Growing SMBs",
    aiLabel: "AI Philosophy",
    aiTitle: "AI is a tool, not the product.",
    aiCopy:
      "Artificial Intelligence is one of many tools we use. Sometimes the right solution includes AI. Sometimes it doesn't. Technology should always follow business needs—not trends.",
    showcaseLabel: "60-second break",
    showcaseCaption: "A small digital experience by Quantum Media.",
    readyLabel: "Ready to Grow?",
    contactTitle: "Let’s turn your digital assets into business growth.",
    tagline: "We Build. We Manage. We Optimize.",
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
    projectTypeLabel: "Project Type",
    budgetLabel: "Estimated Budget",
    projectDetailsLabel: "Tell us about your project",
    selectPlaceholder: "Select one",
    projectTypeWebsite: "Website or Landing Page",
    projectTypeAutomation: "Automation",
    projectTypeOptimization: "Optimization",
    projectTypeSoftware: "Software or Integrations",
    projectTypeManagement: "Ongoing Management",
    budgetOne: "Under $5,000",
    budgetTwo: "$5,000 - $10,000",
    budgetThree: "$10,000 - $25,000",
    budgetFour: "$25,000+",
    budgetFive: "Not sure yet",
    submitProject: "Submit",
    modalThanks: "Thank you. We'll be in touch soon."
  },
  es: {
    title: "Quantum Media | Estudio de Soluciones Digitales",
    description:
      "Quantum Media ayuda a empresas a construir, administrar, automatizar, optimizar y escalar los activos digitales que respaldan el crecimiento empresarial a largo plazo.",
    skip: "Saltar al contenido",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    navServices: "Servicios",
    navProcess: "Proceso",
    navPhilosophy: "Filosofía",
    navServe: "Quiénes somos",
    darkLabel: "Oscuro",
    heroLabel: "Estudio de Soluciones Digitales",
    heroTitle: "Creamos soluciones digitales que hacen crecer tu negocio",
    heroCopy:
      "Quantum Media ayuda a empresas a construir, administrar, automatizar, optimizar y escalar los activos digitales que respaldan el crecimiento empresarial a largo plazo.",
    startProject: "Iniciar Proyecto",
    exploreServices: "Explorar Servicios",
    assetsLabel: "Base Estratégica",
    assetsTitle: "Cada activo digital debe crear valor de negocio medible.",
    assetsCopyOne:
      "Tu sitio web, comunicación con clientes, automatizaciones, analítica y software deben trabajar juntos como un solo sistema de negocio.",
    assetsCopyTwo:
      "Cada activo digital debe apoyar el crecimiento, mejorar las operaciones y crear mejores experiencias para los clientes.",
    assetsCopyThree:
      "La tecnología solo crea valor cuando mejora cómo opera un negocio.",
    aboutLabel: "Sobre Nosotros",
    aboutTitle: "La tecnología sigue al negocio. No al revés.",
    aboutCopyOne:
      "Muchas empresas dependen de sitios web, herramientas, flujos de trabajo y puntos de contacto con clientes que están desconectados.",
    aboutCopyTwo:
      "Quantum Media ayuda a simplificar esa complejidad construyendo sistemas digitales prácticos diseñados alrededor de las operaciones del negocio, la experiencia del cliente y el crecimiento medible.",
    servicesLabel: "Nuestros Servicios",
    buildTitle: "Construir",
    buildCopy:
      "Creamos la base digital que tu negocio necesita con sitios web, landing pages, experiencias móviles y diseño enfocado en conversión.",
    manageTitle: "Administrar",
    manageCopy: "Mantenemos cada activo digital seguro, actualizado, monitoreado y funcionando al máximo.",
    automateTitle: "Automatizar",
    automateCopy:
      "Conectamos sistemas, eliminamos trabajo repetitivo y mejoramos la eficiencia operativa con automatización práctica.",
    optimizeTitle: "Optimizar",
    optimizeCopy:
      "Medimos rendimiento, identificamos oportunidades, mejoramos conversión y optimizamos continuamente los resultados del negocio.",
    scaleTitle: "Escalar",
    scaleCopy:
      "Expandimos tus capacidades digitales con software, soluciones con IA, integraciones y sistemas que apoyan el crecimiento a largo plazo.",
    whyLabel: "Nuestros Principios",
    whyOneTitle: "Negocio Primero",
    whyOneCopy: "Cada decisión tecnológica debe apoyar los objetivos del negocio.",
    whyTwoTitle: "Construir a Largo Plazo",
    whyTwoCopy: "Crear soluciones que sigan siendo valiosas mientras el negocio crece.",
    whyThreeTitle: "Mantener la Tecnología Práctica",
    whyThreeCopy: "La tecnología debe simplificar operaciones, nunca complicarlas.",
    whyFourTitle: "Optimizar Continuamente",
    whyFourCopy: "El lanzamiento es solo el inicio. La mejora nunca se detiene.",
    philosophyLabel: "Nuestra Filosofía",
    philosophyTitle: "Construimos. Administramos. Optimizamos.",
    principleOne: "Negocio Primero",
    principleTwo: "Construir a Largo Plazo",
    principleThree: "Mantener la Tecnología Práctica",
    principleFour: "Medir Todo",
    principleFive: "Optimizar Continuamente",
    principleSix: "Simplificar la Complejidad",
    processLabel: "Nuestro Proceso",
    discoverTitle: "Descubrir",
    discoverCopy: "Entender el negocio, los clientes, las operaciones y los objetivos.",
    designTitle: "Diseñar",
    designCopy: "Crear soluciones digitales alineadas con objetivos de negocio medibles.",
    deployTitle: "Lanzar",
    deployCopy: "Lanzar de forma eficiente, con mínima interrupción y excelencia técnica.",
    processOptimizeTitle: "Optimizar",
    processOptimizeCopy:
      "Medir rendimiento, identificar mejoras y aumentar continuamente el valor del negocio.",
    serveLabel: "A Quién Servimos",
    serveOne: "Servicios Profesionales",
    serveTwo: "Salud",
    serveThree: "Hospitalidad",
    serveFour: "Bienes Raíces",
    serveFive: "Negocios Locales",
    serveSix: "Startups",
    serveSeven: "PYMES en Crecimiento",
    aiLabel: "Filosofía de IA",
    aiTitle: "La IA es una herramienta, no el producto.",
    aiCopy:
      "La Inteligencia Artificial es una de las muchas herramientas que usamos. A veces la solución correcta incluye IA. A veces no. La tecnología siempre debe seguir las necesidades del negocio, no las tendencias.",
    showcaseLabel: "Pausa de 60 segundos",
    showcaseCaption: "Una pequeña experiencia digital por Quantum Media.",
    readyLabel: "Listo para crecer?",
    contactTitle: "Convirtamos tus activos digitales en crecimiento para tu negocio.",
    tagline: "Construimos. Administramos. Optimizamos.",
    copyright: "© 2026 Quantum Media. Todos los derechos reservados.",
    modalClose: "Cerrar formulario de contacto",
    modalLabel: "Iniciar Proyecto",
    modalTitle: "Cuéntanos sobre tu proyecto.",
    firstNameLabel: "Nombre",
    lastNameLabel: "Apellido",
    companyLabel: "Empresa",
    businessEmailLabel: "Email de Empresa",
    phoneLabel: "Teléfono (opcional)",
    websiteLabel: "Website (opcional)",
    projectTypeLabel: "Tipo de Proyecto",
    budgetLabel: "Presupuesto Estimado",
    projectDetailsLabel: "Cuéntanos sobre tu proyecto",
    selectPlaceholder: "Selecciona una opción",
    projectTypeWebsite: "Sitio Web o Landing Page",
    projectTypeAutomation: "Automatización",
    projectTypeOptimization: "Optimización",
    projectTypeSoftware: "Software o Integraciones",
    projectTypeManagement: "Administración Continua",
    budgetOne: "Menos de $5,000",
    budgetTwo: "$5,000 - $10,000",
    budgetThree: "$10,000 - $25,000",
    budgetFour: "$25,000+",
    budgetFive: "Aún no estoy seguro",
    submitProject: "Enviar",
    modalThanks: "Gracias. Nos pondremos en contacto pronto."
  }
};

const getStoredPreference = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
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

const closeNav = () => {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", copy[currentLanguage].openNav);
};

let currentLanguage = getStoredPreference("qm-language", "en");
let currentTheme = getStoredPreference("qm-theme", "light");

const setTheme = (theme) => {
  currentTheme = theme;
  const isDark = theme === "dark";

  body.classList.toggle("theme-dark", isDark);
  themeToggle.checked = isDark;
  themeColor?.setAttribute("content", isDark ? "#020202" : "#f7f6f2");

  if (logo) {
    logo.src = isDark ? logo.dataset.logoDark : logo.dataset.logoLight;
  }

  if (footerLogo) {
    footerLogo.src = isDark ? "quantum-media-logo-dark.png" : "quantum-media-logo.png";
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
  languageToggle.checked = language === "es";
  languageLabel.textContent = language === "es" ? "ES" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", dictionary[key]);
  });

  if (projectStatus?.dataset.submitted === "true") {
    projectStatus.textContent = dictionary.modalThanks;
  }

  closeNav();
  storePreference("qm-language", language);
};

let lastProjectTrigger = null;

const openProjectModal = (trigger) => {
  if (!projectModal) {
    return;
  }

  lastProjectTrigger = trigger || document.activeElement;
  projectModal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");

  const firstField = projectModal.querySelector(".project-form input, .project-form select, .project-form textarea");

  requestAnimationFrame(() => {
    firstField?.focus({ preventScroll: true });
  });
};

const closeProjectModal = () => {
  if (!projectModal || projectModal.getAttribute("aria-hidden") === "true") {
    return;
  }

  projectModal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");

  if (projectStatus) {
    projectStatus.textContent = "";
    delete projectStatus.dataset.submitted;
  }

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

projectForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  projectForm.reset();

  if (projectStatus) {
    projectStatus.dataset.submitted = "true";
    projectStatus.textContent = copy[currentLanguage].modalThanks;
  }
});

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? copy[currentLanguage].closeNav : copy[currentLanguage].openNav);
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
    closeNav();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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
    closeNav();
    closeProjectModal();
  }
});

const updateActiveNav = () => {
  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  const headerOffset =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-space")) ||
    128;
  const probe = headerOffset + 24;
  const activeSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();

    return rect.top <= probe && rect.bottom > probe;
  });
  const activeHref = activeSection ? `#${activeSection.id}` : "";

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === activeHref);
  });
};

let activeNavFrame = 0;

const requestActiveNavUpdate = () => {
  if (activeNavFrame) {
    return;
  }

  activeNavFrame = requestAnimationFrame(() => {
    activeNavFrame = 0;
    updateActiveNav();
  });
};

window.addEventListener("scroll", requestActiveNavUpdate, { passive: true });
window.addEventListener("resize", requestActiveNavUpdate);

const setupSectionFocus = () => {
  const focusSections = Array.from(document.querySelectorAll("main > section"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!focusSections.length || reduceMotion || !("IntersectionObserver" in window)) {
    focusSections.forEach((section) => section.classList.add("is-in-view"));
    return;
  }

  body.classList.add("section-focus-enabled");

  const focusObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      });
    },
    {
      threshold: 0.22,
      rootMargin: "-14% 0px -18% 0px"
    }
  );

  focusSections.forEach((section) => focusObserver.observe(section));
};

const setupShowcaseGame = () => {
  if (
    !showcaseCanvas ||
    !showcaseSection ||
    !showcaseScore ||
    window.matchMedia("(max-width: 760px)").matches
  ) {
    return;
  }

  const context = showcaseCanvas.getContext("2d");

  if (!context) {
    return;
  }

  let width = 420;
  let height = 220;
  let animationFrame = 0;
  let lastFrame = 0;
  let birdY = 110;
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
  const baseSpeed = 88;
  const speedStep = 12;
  const maxSpeed = 160;

  const createObstacle = (x) => {
    const lineWidth = Math.min(width * 0.44, 116 + Math.random() * 156);
    const margin = 34;
    const y = margin + Math.random() * Math.max(1, height - margin * 2);

    return {
      x,
      y,
      lineWidth,
      passed: false
    };
  };

  const formatScore = () => `Score ${score}`;

  const getCurrentSpeed = () => {
    const level = Math.floor(score / 10);

    return Math.min(baseSpeed + level * speedStep, maxSpeed);
  };

  const seedObstacles = () => {
    obstacles = [];

    let nextX = birdX + 90 + Math.random() * 70;

    for (let index = 0; index < 5; index += 1) {
      obstacles.push(createObstacle(nextX));
      nextX += 190 + Math.random() * 190;
    }
  };

  const resizeCanvas = () => {
    const rect = showcaseCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width || 420;
    height = rect.height || 220;
    birdX = width * 0.5;
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
    showcaseScore.textContent = formatScore();
  };

  const getCanvasColors = () => {
    const styles = getComputedStyle(document.body);

    return {
      background: styles.getPropertyValue("--bg").trim() || "#f7f6f2",
      text: styles.getPropertyValue("--text").trim() || "#050505",
      accent: styles.getPropertyValue("--accent").trim() || "#ff5757"
    };
  };

  const drawTrace = () => {
    const colors = getCanvasColors();

    if (trail.length < 2) {
      return;
    }

    context.save();
    context.globalAlpha = 0.24;
    context.strokeStyle = colors.text;
    context.lineWidth = 1.35;
    context.setLineDash([6, 9]);
    context.beginPath();

    trail.forEach((point, index) => {
      const age = trail.length - 1 - index;
      const x = birdX - 30 - age * 14;
      const y = point.y + Math.sin(age * 0.38) * 3;

      if (index === 0) {
        context.moveTo(x, y);
        return;
      }

      context.lineTo(x, y);
    });

    context.stroke();
    context.restore();
  };

  const drawBird = () => {
    const colors = getCanvasColors();

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

  const drawObstacle = (obstacle) => {
    const colors = getCanvasColors();

    context.strokeStyle = colors.text;
    context.lineWidth = 1.6;
    context.beginPath();
    context.moveTo(obstacle.x, obstacle.y);
    context.lineTo(obstacle.x + obstacle.lineWidth, obstacle.y);
    context.stroke();
  };

  const drawScene = () => {
    context.clearRect(0, 0, width, height);
    drawTrace();
    obstacles.forEach(drawObstacle);
    drawBird();
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
        showcaseScore.textContent = formatScore();
      }
    });

    if (obstacles[0] && obstacles[0].x + obstacles[0].lineWidth < -12) {
      obstacles.shift();
    }

    if (obstacles.at(-1)?.x < width - 230) {
      obstacles.push(createObstacle(width + 120 + Math.random() * 90));
    }

    const hitObstacle = obstacles.some((obstacle) => {
      const closestX = Math.max(obstacle.x, Math.min(birdX, obstacle.x + obstacle.lineWidth));
      const distanceX = birdX - closestX;
      const distanceY = birdY - obstacle.y;

      return Math.hypot(distanceX, distanceY) < birdRadius * 0.82;
    });

    if (birdY < 4 || birdY > height - 4 || hitObstacle) {
      failGame();
    }
  };

  const playLoop = (timestamp) => {
    if (!running || !inView) {
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

    if (!running && inView) {
      running = true;
      lastFrame = 0;
      animationFrame = requestAnimationFrame(playLoop);
    }
  };

  showcaseCanvas.addEventListener("pointerdown", flap);

  window.addEventListener("resize", () => {
    resizeCanvas();
    resetGame();
    drawScene();
  });

  if ("IntersectionObserver" in window) {
    const gameObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;

        if (!inView) {
          stopGame();
          return;
        }

        if (started && !running) {
          running = true;
          lastFrame = 0;
          animationFrame = requestAnimationFrame(playLoop);
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

setupSectionFocus();

setTheme(currentTheme);
setLanguage(currentLanguage);
setupShowcaseGame();
updateActiveNav();
