import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import useScrollAnimation from "./useScrollAnimation";

interface CTABannerProps {
  heading?: string;
  text?: string;
  buttonLabel?: string;
  to?: string;
}

export default function CTABanner({
  heading,
  text,
  buttonLabel,
  to = "/contact",
}: CTABannerProps) {
  const { t } = useLanguage();
  const ref = useScrollAnimation<HTMLElement>();

  const h = heading ?? t.cta.defaultHeading;
  const p = text ?? t.cta.defaultText;
  const btn = buttonLabel ?? t.cta.defaultButton;

  return (
    <section ref={ref} className="animate-on-scroll px-8 pb-32">
      <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden py-24 px-8 md:px-24 bg-primary text-on-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">{h}</h2>
          <p className="text-xl mb-12 max-w-xl opacity-90">{p}</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              to={to}
              className="bg-surface text-primary px-12 py-5 rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 text-center"
            >
              {btn}
            </Link>
            <Link
              to="/services"
              className="border border-white/40 text-on-primary px-12 py-5 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center"
            >
              {t.cta.viewPricing}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
