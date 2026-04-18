import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import Section from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function WorkshopsCourses() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();
  const [activeFood, setActiveFood] = useState(0);
  const [activeYoga, setActiveYoga] = useState(0);

  const foodCourses = [
    { name: t.workshopsPage.greenSmoothies, intro: t.workshopsPage.greenSmoothiesIntro, bullets: t.workshopsPage.greenSmoothiesBullets, icon: "blender" },
    { name: t.workshopsPage.veganCourse, intro: t.workshopsPage.veganCourseIntro, bullets: t.workshopsPage.veganCourseBullets, icon: "eco" },
    { name: t.workshopsPage.alkalineCourse, intro: t.workshopsPage.alkalineCourseIntro, bullets: t.workshopsPage.alkalineCourseBullets, icon: "restaurant" },
  ];

  const yogaCourses = [
    { name: t.workshopsPage.kundaliniWorkshop, intro: t.workshopsPage.kundaliniWorkshopIntro, bullets: t.workshopsPage.kundaliniWorkshopBullets, icon: "air" },
    { name: t.workshopsPage.breathworkMeditation, intro: t.workshopsPage.breathworkMeditationIntro, bullets: t.workshopsPage.breathworkMeditationBullets, icon: "self_improvement" },
    { name: t.workshopsPage.ayurvedaCircles, intro: t.workshopsPage.ayurvedaCirclesIntro, bullets: t.workshopsPage.ayurvedaCircleBullets, icon: "menu_book" },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Workshop" src="https://images.pexels.com/photos/6551144/pexels-photo-6551144.jpeg?auto=compress&w=1920" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-2 shadow-sm self-start">
            {foodCourses.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveFood(i)}
                className={`w-full flex items-center justify-between px-6 py-5 rounded-xl text-left transition-all duration-300 ${
                  activeFood === i
                    ? "bg-tertiary/10 text-tertiary"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                <span className={`font-serif text-lg ${activeFood === i ? "font-semibold" : ""}`}>{c.name}</span>
                {activeFood === i && (
                  <span className="material-symbols-outlined text-tertiary text-xl shrink-0 ml-2">arrow_forward</span>
                )}
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-10 md:p-14 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-6 right-6 opacity-5">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: "8rem" }}>{foodCourses[activeFood].icon}</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{foodCourses[activeFood].icon}</span>
              <h3 className="font-serif text-3xl md:text-4xl text-tertiary mb-6">{foodCourses[activeFood].name}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">{foodCourses[activeFood].intro}</p>
              <ul className="space-y-3">
                {foodCourses[activeFood].bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-xl shrink-0">check_circle</span>
                    <span className="text-on-surface-variant leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Yoga Workshops */}
      <Section bg="low">
        <div className="text-center mb-14">
          <span className="text-tertiary text-sm font-sans uppercase tracking-widest mb-3 block">{t.workshopsPage.yogaTag}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">{t.workshopsPage.yogaTitle}</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.workshopsPage.yogaSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-2 shadow-sm self-start">
            {yogaCourses.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveYoga(i)}
                className={`w-full flex items-center justify-between px-6 py-5 rounded-xl text-left transition-all duration-300 ${
                  activeYoga === i
                    ? "bg-tertiary/10 text-tertiary"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                <span className={`font-serif text-lg ${activeYoga === i ? "font-semibold" : ""}`}>{c.name}</span>
                {activeYoga === i && (
                  <span className="material-symbols-outlined text-tertiary text-xl shrink-0 ml-2">arrow_forward</span>
                )}
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-10 md:p-14 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-6 right-6 opacity-5">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: "8rem" }}>{yogaCourses[activeYoga].icon}</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{yogaCourses[activeYoga].icon}</span>
              <h3 className="font-serif text-3xl md:text-4xl text-tertiary mb-6">{yogaCourses[activeYoga].name}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">{yogaCourses[activeYoga].intro}</p>
              <ul className="space-y-3">
                {yogaCourses[activeYoga].bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-xl shrink-0">check_circle</span>
                    <span className="text-on-surface-variant leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner heading={t.workshopsPage.ctaHeading} text={t.workshopsPage.ctaText} buttonLabel={t.workshopsPage.ctaButton} />
    </>
  );
}
