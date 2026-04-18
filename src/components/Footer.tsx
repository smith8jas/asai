import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-low rounded-t-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="text-xl font-serif italic text-primary">Asai</Link>
          <p className="text-on-surface-variant text-sm max-w-xs">{t.footer.tagline}</p>
          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">public</span>
            </span>
            <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">share</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-sans text-sm uppercase tracking-widest text-primary font-bold mb-6">{t.footer.explore}</h5>
            <ul className="space-y-4">
              <li><Link to="/" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/services" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/about" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-sm uppercase tracking-widest text-primary font-bold mb-6">{t.footer.servicesLabel}</h5>
            <ul className="space-y-4">
              <li><Link to="/services/yoga-asai" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.footer.yoga}</Link></li>
              <li><Link to="/services/nutrition-coaching" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.footer.nutrition}</Link></li>
              <li><Link to="/services/healing-sessions" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.footer.healing}</Link></li>
              <li><Link to="/services/workshops-courses" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.footer.workshops}</Link></li>
              <li><Link to="/services/corporate-programs" className="font-sans text-sm uppercase tracking-widest text-tertiary hover:text-primary transition-colors">{t.footer.corporate}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h5 className="font-sans text-sm uppercase tracking-widest text-primary font-bold mb-6">{t.footer.newsletter}</h5>
            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b border-outline/20 py-3 focus:ring-0 focus:border-primary text-sm tracking-widest outline-none placeholder:text-on-surface-variant/50"
                placeholder={t.footer.emailPlaceholder}
                type="email"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-bold text-xs uppercase tracking-widest">
                {t.footer.join}
              </button>
            </div>
          </div>
          <p className="font-sans text-xs uppercase tracking-widest text-tertiary mt-8">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
