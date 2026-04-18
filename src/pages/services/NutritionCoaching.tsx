import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import Section from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function NutritionCoaching() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const programs = [
    { name: t.nutritionPage.individualCoaching, description: t.nutritionPage.individualCoachingDesc, icon: "person" },
    { name: t.nutritionPage.groupCoaching, description: t.nutritionPage.groupCoachingDesc, icon: "groups" },
    { name: t.nutritionPage.wellnessPrograms, description: t.nutritionPage.wellnessProgramsDesc, icon: "spa" },
    { name: t.nutritionPage.lifestyleSupport, description: t.nutritionPage.lifestyleSupportDesc, icon: "favorite" },
  ];

  const process = [
    { step: "01", title: t.nutritionPage.discover, description: t.nutritionPage.discoverText },
    { step: "02", title: t.nutritionPage.design, description: t.nutritionPage.designText },
    { step: "03", title: t.nutritionPage.implement, description: t.nutritionPage.implementText },
    { step: "04", title: t.nutritionPage.thrive, description: t.nutritionPage.thriveText },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Health coaching" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEffw72o0z7fwARUKFPZfctLwgsIcpKRqOcO9391j2T6KOTqRFV5Dov0oAfJOM9le-qNmx5GjhWN4oFM0s5ePjnfuqvraMLhDk2VV_Ih791iWSfgS9s-LSUsxYxwS8U9jaNFa2jWL2wmoohBZeCib6sP6X-31c2GcSzsPeY70isncV9wcR__cRQLvzC9fZjDqjpY8erS3-i9b7y6-nTSaX-0Fdz4FbZUk2g0aXwZ9H77Qioxoyo5F22wopZA49P4bK3o4M8V47rnU" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div ref={heroRef} className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.nutritionPage.heroTag}</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-on-surface">
              {t.nutritionPage.heroTitle1} <br /><span className="italic text-primary">{t.nutritionPage.heroTitle2}</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              {t.nutritionPage.heroText}
            </p>
          </div>
        </div>
      </section>

      <Section bg="low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover" alt="Healthy food" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBhs3oAJCplUKiSJDNXirZTqppAPssRqjV3mHbcfdgMRNEQ4ZvnFsZStODnloI8Zt1pkEHVkGg5jCKJvEeTja8tgv6g9JVlgNbsB4coKbvB3qKopPudNzdmctFTZTa3jpvTycCGtczv3OT4NKOTu0Hbu1aTwh7d64O57LAAD2wG3p1Ew7SpJcvFP-l3BdJ4QygcgnwBhPwqfOwJA_1bTR5218rzD6KHwqUOGBjcOU2AMgk3ih0muv9UfqIdHNlxd1dUKcoDjsp4Bs" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.nutritionPage.philTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">{t.nutritionPage.philText1}</p>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">{t.nutritionPage.philText2}</p>
            <div className="flex flex-wrap gap-3">
              {[t.nutritionPage.tag1, t.nutritionPage.tag2, t.nutritionPage.tag3].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-primary-container/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center mb-14">
          <span className="text-on-primary/70 text-sm font-sans uppercase tracking-widest mb-3 block">{t.nutritionPage.processTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.nutritionPage.processTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl relative">
              <span className="font-serif text-5xl font-bold opacity-20 absolute top-4 right-6">{p.step}</span>
              <h3 className="font-serif text-xl font-bold mb-3 mt-8">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-14">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.nutritionPage.programsTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">{t.nutritionPage.programsTitle}</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.nutritionPage.programsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <div key={p.name} className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{p.icon}</span>
              <h3 className="font-serif text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-on-surface-variant leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-24 px-8 overflow-hidden bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="material-symbols-outlined text-primary-container text-8xl opacity-20 absolute -top-12 -left-12">format_quote</span>
          <div className="relative z-10">
            <p className="font-serif text-2xl md:text-3xl text-on-surface leading-relaxed italic mb-8">{t.nutritionPage.testimonialQuote}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">A</div>
              <div className="text-left">
                <p className="font-semibold text-on-surface">{t.nutritionPage.testimonialName}</p>
                <p className="text-sm text-tertiary">{t.nutritionPage.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading={t.nutritionPage.ctaHeading} text={t.nutritionPage.ctaText} buttonLabel={t.nutritionPage.ctaButton} />
    </>
  );
}
