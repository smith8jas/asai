import { Link } from "react-router-dom";
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
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div ref={heroRef} className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
<span className="text-tertiary font-sans text-sm uppercase tracking-[0.3em] mb-6 block">{t.corporatePage.heroTag}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
              {t.corporatePage.heroTitle1} <br /><span className="italic">{t.corporatePage.heroTitle2}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">{t.corporatePage.heroText}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20">
                {t.corporatePage.getStarted}
              </Link>
              <a href="#wellness" className="bg-surface-container-high px-10 py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                {t.corporatePage.learnMore}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Corporate wellness" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1lCB12rKOnrThEyyz6-sE2vi1XxUHXoLZQldojb3OE6VZwrKhx1t5B2GFBBiFYYg8A7CIkJE3uadccdV4uvb-0tfIBycRPHYlwm3csCW7MGREukkErTz3vz-zKaot9NCSFFgaJ4BTl-UPB3Hb1ZJf1KRMkJS8xdr-bLj_qLqc7tDVwUTnjm-diE3JCqIyeudeDgFUIHByZFkibr-weTDhzqtehi_InsehAAwb7PrMj_dvXhRJ4R7VZc8e5M8HMH9D_4wodUPzUGg" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </header>

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
            <img className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover" alt="Team wellness" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGsc--ON7Mf1mKt_v_cMawAQB-yv0hbGRVZRzPCjsBqK0K5gRaYgysPgfz5THeirlwa7ChIk5tGWBrP0rjRySnSaAxTMnnuvVt48PTdXbmvXYfO4BtIGws9Nl0cxtamiFkloWBbRZyYXhIpXIJvKkVRVynAbhZ0-N2_uk6qPE-7xOCFme5VabRRl2VZsEPpWkfKDXPdVp4LvuC1JIgxFEaYH5dfW9Q_ujXAyOXVLXklNmu2LwE2pm9EWM7VAXFVMduibWYinLeEDs" />
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
