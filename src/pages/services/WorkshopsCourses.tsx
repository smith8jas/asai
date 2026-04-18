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
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div ref={heroRef} className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
<span className="text-tertiary font-sans text-sm uppercase tracking-[0.3em] mb-6 block">{t.workshopsPage.heroTag}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
              {t.workshopsPage.heroTitle1} <br /><span className="italic">{t.workshopsPage.heroTitle2}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">{t.workshopsPage.heroText}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#food" className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20">
                {t.workshopsPage.exploreCourses}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhp8G-uan1f4LMCDYadnWo2EVwLM_-Ux9ZH-_NinrY-iTlScihwHBeV8W_5SUQCLwFezMVKRpbmMIg5kpSpT0juy7eHowdwmRABUKF6mgNfGoxCx5QxuUD70AejPuV903gtUiZbPUGnspcWGKDOm7BsFAJKFIRsUnshQW5wD1cClPhKsCtq-D8DL7O6n0QwcqeIyMVIl53lWQ0m4PLrNeSnqyg7zyq1Z0zNVdl7y6hZ5ghN8q_ukT_jYBnIlBax4qUNFy9b4VkQs" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </header>

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
