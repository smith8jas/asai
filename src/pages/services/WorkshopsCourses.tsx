import { useLanguage } from "../../i18n/LanguageContext";
import Section from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function WorkshopsCourses() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const foodCourses = [
    { name: t.workshopsPage.greenSmoothies, description: t.workshopsPage.greenSmoothiesDesc, icon: "blender" },
    { name: t.workshopsPage.veganCourse, description: t.workshopsPage.veganCourseDesc, icon: "eco" },
    { name: t.workshopsPage.alkalineCourse, description: t.workshopsPage.alkalineCourseDesc, icon: "restaurant" },
  ];

  const yogaCourses = [
    { name: t.workshopsPage.kundaliniWorkshop, description: t.workshopsPage.kundaliniWorkshopDesc, icon: "air" },
    { name: t.workshopsPage.breathworkMeditation, description: t.workshopsPage.breathworkMeditationDesc, icon: "self_improvement" },
    { name: t.workshopsPage.ayurvedaCircles, description: t.workshopsPage.ayurvedaCirclesDesc, icon: "menu_book" },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhp8G-uan1f4LMCDYadnWo2EVwLM_-Ux9ZH-_NinrY-iTlScihwHBeV8W_5SUQCLwFezMVKRpbmMIg5kpSpT0juy7eHowdwmRABUKF6mgNfGoxCx5QxuUD70AejPuV903gtUiZbPUGnspcWGKDOm7BsFAJKFIRsUnshQW5wD1cClPhKsCtq-D8DL7O6n0QwcqeIyMVIl53lWQ0m4PLrNeSnqyg7zyq1Z0zNVdl7y6hZ5ghN8q_ukT_jYBnIlBax4qUNFy9b4VkQs" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div ref={heroRef} className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.workshopsPage.heroTag}</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-on-surface">
              {t.workshopsPage.heroTitle1} <br /><span className="italic text-primary">{t.workshopsPage.heroTitle2}</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">{t.workshopsPage.heroText}</p>
          </div>
        </div>
      </section>

      {/* Food Workshops */}
      <Section id="food">
        <div className="text-center mb-14">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.workshopsPage.foodTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">{t.workshopsPage.foodTitle}</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.workshopsPage.foodSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foodCourses.map((c) => (
            <div key={c.name} className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{c.icon}</span>
              <h3 className="font-serif text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">{c.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Yoga Workshops */}
      <Section bg="low">
        <div className="text-center mb-14">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.workshopsPage.yogaTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">{t.workshopsPage.yogaTitle}</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.workshopsPage.yogaSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yogaCourses.map((c) => (
            <div key={c.name} className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{c.icon}</span>
              <h3 className="font-serif text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">{c.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner heading={t.workshopsPage.ctaHeading} text={t.workshopsPage.ctaText} buttonLabel={t.workshopsPage.ctaButton} />
    </>
  );
}
