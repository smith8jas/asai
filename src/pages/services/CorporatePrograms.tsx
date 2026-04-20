import { useLanguage } from "../../i18n/LanguageContext";
import Section from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function CorporatePrograms() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const benefits = [
    { icon: "trending_up", title: t.corporatePage.benefit1Title, text: t.corporatePage.benefit1Text },
    { icon: "bolt", title: t.corporatePage.benefit2Title, text: t.corporatePage.benefit2Text },
    { icon: "groups", title: t.corporatePage.benefit3Title, text: t.corporatePage.benefit3Text },
    { icon: "favorite", title: t.corporatePage.benefit4Title, text: t.corporatePage.benefit4Text },
  ];

  const mbsrBenefits = [
    t.corporatePage.mbsrBenefit1,
    t.corporatePage.mbsrBenefit2,
    t.corporatePage.mbsrBenefit3,
    t.corporatePage.mbsrBenefit4,
    t.corporatePage.mbsrBenefit5,
    t.corporatePage.mbsrBenefit6,
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Corporate wellness" src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&w=1920" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div ref={heroRef} className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.corporatePage.heroTag}</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-on-surface">
              {t.corporatePage.heroTitle1} <br /><span className="italic text-primary">{t.corporatePage.heroTitle2}</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">{t.corporatePage.heroText}</p>
          </div>
        </div>
      </section>

      {/* Wellness */}
      <Section id="wellness" bg="low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.corporatePage.wellnessTag}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.corporatePage.wellnessTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">{t.corporatePage.wellnessText1}</p>
            <p className="text-on-surface-variant leading-relaxed text-lg">{t.corporatePage.wellnessText2}</p>
          </div>
          <div className="relative">
            <img className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover" alt="Team wellness" src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&w=800" />
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="primary">
        <div className="text-center mb-14">
          <span className="text-on-primary/70 text-sm font-sans uppercase tracking-widest mb-3 block">{t.corporatePage.benefitsTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.corporatePage.benefitsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <span className="material-symbols-outlined text-4xl mb-4">{b.icon}</span>
              <h3 className="font-serif text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mindfulness / MBSR */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.corporatePage.mindfulnessTag}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.corporatePage.mindfulnessTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">{t.corporatePage.mindfulnessText1}</p>
            <p className="text-on-surface-variant leading-relaxed text-lg">{t.corporatePage.mindfulnessText2}</p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mbsrBenefits.map((b) => (
                <div key={b} className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Modules */}
      <Section bg="low">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.corporatePage.modulesTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-6">{t.corporatePage.modulesTitle}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">{t.corporatePage.modulesText}</p>
        </div>
      </Section>

      <CTABanner heading={t.corporatePage.ctaHeading} text={t.corporatePage.ctaText} buttonLabel={t.corporatePage.ctaButton} />
    </>
  );
}
