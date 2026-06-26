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

const copy = {
  en: {
    title: "Quantum Media | Digital Solutions Studio",
    description:
      "Quantum Media builds, manages, automates, optimizes, and scales digital assets that help businesses grow.",
    skip: "Skip to content",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    navServices: "Services",
    navProcess: "Process",
    navPhilosophy: "Philosophy",
    navServe: "Who We Are",
    darkLabel: "Dark",
    heroLabel: "Digital Solutions Studio",
    heroTitle: "We build digital assets that grow businesses",
    heroCopy:
      "Quantum Media is a Digital Solutions Studio that helps businesses build, manage, automate, optimize, and scale their digital assets.",
    startProject: "Start a Project",
    exploreServices: "Explore Services",
    aboutLabel: "About Us",
    aboutTitle: "Digital assets should create measurable business value.",
    aboutCopyOne:
      "Every modern business relies on digital assets: websites, customer communication channels, automations, analytics, and software.",
    aboutCopyTwo:
      "Quantum Media helps companies turn those assets into systems that support growth, improve operations, and create better customer experiences.",
    servicesLabel: "Our Services",
    buildTitle: "Build",
    buildCopy:
      "Landing pages, business websites, corporate websites, redesigns, conversion-focused UX, and mobile experiences.",
    manageTitle: "Manage",
    manageCopy:
      "Monthly website administration, content updates, hosting support, security monitoring, and technical maintenance.",
    automateTitle: "Automate",
    automateCopy:
      "Lead routing, CRM integrations, appointment scheduling, internal workflows, customer support automation, and AI-enabled processes.",
    optimizeTitle: "Optimize",
    optimizeCopy:
      "Conversion audits, revenue leak analysis, funnel reviews, analytics implementation, performance reports, and optimization roadmaps.",
    scaleTitle: "Scale",
    scaleCopy:
      "Custom software, AI applications, internal tools, digital transformation projects, and scalable digital infrastructure.",
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
    discoverCopy:
      "We start by understanding your business, customers, operations, and objectives.",
    designTitle: "Design",
    designCopy: "We design digital solutions aligned with your goals and built for impact.",
    deployTitle: "Deploy",
    deployCopy: "We launch efficiently with minimal disruption and full technical excellence.",
    processOptimizeTitle: "Optimize",
    processOptimizeCopy:
      "We measure performance and continuously improve outcomes that drive growth.",
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
      "We implement AI only when it creates measurable business value. Sometimes the right solution includes AI. Sometimes it does not. Technology should always follow business needs, not trends.",
    readyLabel: "Ready to Grow?",
    contactTitle: "Let's turn your digital assets into business growth.",
    tagline: "We Build. We Manage. We Optimize.",
    copyright: "© 2026 Quantum Media. All rights reserved."
  },
  es: {
    title: "Quantum Media | Estudio de Soluciones Digitales",
    description:
      "Quantum Media construye, administra, automatiza, optimiza y escala activos digitales que ayudan a crecer a los negocios.",
    skip: "Saltar al contenido",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    navServices: "Servicios",
    navProcess: "Proceso",
    navPhilosophy: "Filosofía",
    navServe: "Quiénes somos",
    darkLabel: "Oscuro",
    heroLabel: "Estudio de Soluciones Digitales",
    heroTitle: "Creamos activos digitales que hacen crecer negocios",
    heroCopy:
      "Quantum Media es un Estudio de Soluciones Digitales que ayuda a las empresas a construir, administrar, automatizar, optimizar y escalar sus activos digitales.",
    startProject: "Iniciar Proyecto",
    exploreServices: "Explorar Servicios",
    aboutLabel: "Sobre Nosotros",
    aboutTitle: "Los activos digitales deben crear valor medible para el negocio.",
    aboutCopyOne:
      "Todo negocio moderno depende de activos digitales: sitios web, canales de comunicación con clientes, automatizaciones, analítica y software.",
    aboutCopyTwo:
      "Quantum Media ayuda a convertir esos activos en sistemas que apoyan el crecimiento, mejoran operaciones y crean mejores experiencias para los clientes.",
    servicesLabel: "Nuestros Servicios",
    buildTitle: "Construir",
    buildCopy:
      "Landing pages, sitios web empresariales, sitios corporativos, rediseños, UX enfocado en conversión y experiencias móviles.",
    manageTitle: "Administrar",
    manageCopy:
      "Administración mensual de sitios web, actualización de contenido, soporte de hosting, monitoreo de seguridad y mantenimiento técnico.",
    automateTitle: "Automatizar",
    automateCopy:
      "Ruteo de leads, integraciones CRM, agendamiento de citas, flujos internos, automatización de soporte y procesos con IA.",
    optimizeTitle: "Optimizar",
    optimizeCopy:
      "Auditorías de conversión, análisis de fugas de ingresos, revisión de embudos, analítica, reportes y rutas de optimización.",
    scaleTitle: "Escalar",
    scaleCopy:
      "Software a la medida, aplicaciones con IA, herramientas internas, transformación digital e infraestructura digital escalable.",
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
    discoverCopy: "Empezamos entendiendo tu negocio, clientes, operaciones y objetivos.",
    designTitle: "Diseñar",
    designCopy: "Diseñamos soluciones digitales alineadas a tus metas y hechas para impactar.",
    deployTitle: "Lanzar",
    deployCopy: "Lanzamos eficientemente, con mínima fricción y excelencia técnica.",
    processOptimizeTitle: "Optimizar",
    processOptimizeCopy:
      "Medimos rendimiento y mejoramos continuamente los resultados que impulsan crecimiento.",
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
      "Implementamos IA solo cuando crea valor medible para el negocio. A veces la solución correcta incluye IA. A veces no. La tecnología siempre debe seguir las necesidades del negocio, no las tendencias.",
    readyLabel: "Listo para crecer?",
    contactTitle: "Convirtamos tus activos digitales en crecimiento para tu negocio.",
    tagline: "Construimos. Administramos. Optimizamos.",
    copyright: "© 2026 Quantum Media. Todos los derechos reservados."
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

  closeNav();
  storePreference("qm-language", language);
};

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
  }
});

if ("IntersectionObserver" in window) {
  const sections = navLinks
    .map((link) => link.getAttribute("href"))
    .filter((href) => href?.startsWith("#"))
    .map((href) => document.getElementById(href.slice(1)))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

setTheme(currentTheme);
setLanguage(currentLanguage);
