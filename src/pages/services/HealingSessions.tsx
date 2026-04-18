import { useLanguage } from "../../i18n/LanguageContext";
import Section from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function HealingSessions() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const modalities = [
    { name: t.healingPage.reiki, description: t.healingPage.reikiDesc, icon: "auto_awesome" },
    { name: t.healingPage.lightBody, description: t.healingPage.lightBodyDesc, icon: "brightness_7" },
    { name: t.healingPage.quantum, description: t.healingPage.quantumDesc, icon: "blur_on" },
    { name: t.healingPage.accessBars, description: t.healingPage.accessBarsDesc, icon: "touch_app" },
  ];

  const steps = [
    { step: "01", title: t.healingPage.step1Title, text: t.healingPage.step1Text },
    { step: "02", title: t.healingPage.step2Title, text: t.healingPage.step2Text },
    { step: "03", title: t.healingPage.step3Title, text: t.healingPage.step3Text },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Healing session" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA21jDO2UDm7xBS4hKiXGCvGu9ky3OvoZk9UVrkBYpTHCAMZmDrL3l-p-qImLYh2giR1fFEgHoHTvlq_G3uYFFliw7W1qR_h5-C7ZCZ1j9OKeiHsTSlEjdTloDpfaNuMSGAmrW54vS6pxG2Vv4BDs4G3ighvhcKOQ-056bw1Fv_dJAg00Vy90WTr4NPTHKpLgrkwsldjtCba-BXLOVInesFTTTzFcYLsV240vsDwpf9Lxwr1mZHFIu7Keda50jSWFh1jxMOLSehG14" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div ref={heroRef} className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.healingPage.heroTag}</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-on-surface">
              {t.healingPage.heroTitle1} <br /><span className="italic text-primary">{t.healingPage.heroTitle2}</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">{t.healingPage.heroText}</p>
          </div>
        </div>
      </section>

      <Section bg="low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
              {t.healingPage.philTitle1} <br />{t.healingPage.philTitle2} <br />{t.healingPage.philTitle3}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">{t.healingPage.philText1}</p>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">{t.healingPage.philText2}</p>
            <div className="flex flex-wrap gap-3">
              {[t.healingPage.tag1, t.healingPage.tag2, t.healingPage.tag3].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-primary-container/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover" alt="Healing practice" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2InVyodQ5Z5lafD8X2gvlvBiyKeoOx_Z4KPb_7VY_k6UGVdUukAOBnL5o-ID-bIFlWEZj_McQHsqWh9vyPikt6JXDkkPFnvLed7spub-Z_8Tryl5YxtDGn4fmFemr8ri7uujM5nNSO81K7nR5g2FUU9JuKIfK5jlk8mOLOaVLV0Sa_noU0vxk27tZWtvYXbE7ua5OCN2d6zxPWpe-Jpe6ZILW-_DvorKk8sB74YyzXOcE5JNI6RYi9GCLDf75nWu7jnFJhOA3-vQ" />
          </div>
        </div>
      </Section>

      <Section id="modalities">
        <div className="text-center mb-14">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.healingPage.modalitiesTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">{t.healingPage.modalitiesTitle}</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.healingPage.modalitiesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modalities.map((m) => (
            <div key={m.name} className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{m.icon}</span>
              <h3 className="font-serif text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">{m.name}</h3>
              <p className="text-on-surface-variant leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center mb-14">
          <span className="text-on-primary/70 text-sm font-sans uppercase tracking-widest mb-3 block">{t.healingPage.experienceTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.healingPage.experienceTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl relative">
              <span className="font-serif text-6xl font-bold opacity-15 absolute top-4 right-6">{s.step}</span>
              <h3 className="font-serif text-xl font-bold mb-3 mt-8">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="material-symbols-outlined text-primary-container text-8xl opacity-20 absolute -top-12 -left-12">format_quote</span>
          <div className="relative z-10">
            <p className="font-serif text-2xl md:text-3xl text-on-surface leading-relaxed italic mb-8">{t.healingPage.testimonialQuote}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">L</div>
              <div className="text-left">
                <p className="font-semibold text-on-surface">{t.healingPage.testimonialName}</p>
                <p className="text-sm text-tertiary">{t.healingPage.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading={t.healingPage.ctaHeading} text={t.healingPage.ctaText} buttonLabel={t.healingPage.ctaButton} />
    </>
  );
}
