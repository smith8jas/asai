import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { to: "/services/yoga-asai", label: t.nav.yogaAsai },
    { to: "/services/nutrition-coaching", label: t.nav.nutritionCoaching },
    { to: "/services/healing-sessions", label: t.nav.healingSessions },
    { to: "/services/workshops-courses", label: t.nav.workshopsCourses },
    { to: "/services/corporate-programs", label: t.nav.corporatePrograms },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans text-sm uppercase tracking-widest transition-colors duration-200 ${
      isActive
        ? "text-primary font-semibold"
        : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-sm"
          : "bg-surface/80 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif italic text-primary tracking-tight">
          Asai
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className={linkClass} end>{t.nav.home}</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkClass({ isActive })} flex items-center gap-1.5`
              }
            >
              {t.nav.services}
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </NavLink>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 transition-all duration-200 origin-top ${
                servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <ul className="bg-surface-container-lowest rounded-xl shadow-xl py-2">
                {services.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="block px-5 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/about" className={linkClass}>{t.nav.about}</NavLink>
          <NavLink to="/contact" className={linkClass}>{t.nav.contact}</NavLink>

          {/* Language dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 text-sm font-sans text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors duration-200"
              aria-label="Select language"
            >
              <span className="text-base leading-none">{currentLang.flag}</span>
              <span className="uppercase tracking-widest">{currentLang.code}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full right-0 mt-3 w-44 bg-surface-container-lowest rounded-xl shadow-xl py-2 transition-all duration-200 origin-top ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${lang === l.code ? "text-primary font-semibold bg-primary-container/10" : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"}`}
                >
                  <span className="text-lg leading-none">{l.flag}</span>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/30 text-xs font-sans uppercase tracking-widest text-on-surface-variant"
            aria-label="Toggle language"
          >
            <span className="text-sm leading-none">{currentLang.flag}</span>
            {currentLang.code}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-on-surface"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-8 py-6 space-y-4 bg-surface/98 backdrop-blur-md border-t border-outline-variant/20">
          <NavLink to="/" className="block text-on-surface-variant hover:text-primary font-medium text-sm uppercase tracking-widest" onClick={() => setMobileOpen(false)} end>
            {t.nav.home}
          </NavLink>
          <NavLink to="/services" className="block text-on-surface-variant hover:text-primary font-medium text-sm uppercase tracking-widest" onClick={() => setMobileOpen(false)}>
            {t.nav.services}
          </NavLink>
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="block pl-4 text-sm text-on-surface-variant hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <NavLink to="/about" className="block text-on-surface-variant hover:text-primary font-medium text-sm uppercase tracking-widest" onClick={() => setMobileOpen(false)}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/contact" className="block text-on-surface-variant hover:text-primary font-medium text-sm uppercase tracking-widest" onClick={() => setMobileOpen(false)}>
            {t.nav.contact}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
