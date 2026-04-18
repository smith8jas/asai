import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import Section from '../../components/Section';
import useScrollAnimation from '../../components/useScrollAnimation';

export default function YogaClasses() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  const scrollSchedule = (direction: "left" | "right") => {
    if (!scheduleRef.current) return;
    const scrollAmount = scheduleRef.current.offsetWidth * 0.6;
    scheduleRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const styles = [
    { title: t.yogaPage.powerTitle, text: t.yogaPage.powerText, extended: t.yogaPage.powerExtended, icon: 'bolt' },
    { title: t.yogaPage.kundaliniTitle, text: t.yogaPage.kundaliniText, extended: t.yogaPage.kundaliniExtended, icon: 'air' },
    { title: t.yogaPage.kidsTitle, text: t.yogaPage.kidsText, extended: t.yogaPage.kidsExtended, icon: 'child_care' },
    { title: t.yogaPage.gentleTitle, text: t.yogaPage.gentleText, extended: t.yogaPage.gentleExtended, icon: 'spa' },
    { title: t.yogaPage.ashtangaTitle, text: t.yogaPage.ashtangaText, extended: t.yogaPage.ashtangaExtended, icon: 'fitness_center' },
    { title: t.yogaPage.athletesTitle, text: t.yogaPage.athletesText, extended: t.yogaPage.athletesExtended, icon: 'sports' },
    { title: t.yogaPage.prenatalTitle, text: t.yogaPage.prenatalText, extended: t.yogaPage.prenatalExtended, icon: 'pregnant_woman' },
    { title: t.yogaPage.restorativeTitle, text: t.yogaPage.restorativeText, extended: t.yogaPage.restorativeExtended, icon: 'self_improvement' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Yoga practice in studio"
            src="https://images.pexels.com/photos/36715224/pexels-photo-36715224.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div
          ref={heroRef}
          className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-8 w-full"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {t.yogaPage.heroTag}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-on-surface">
              {t.yogaPage.heroTitle1} <br />
              <span className="italic text-primary">
                {t.yogaPage.heroTitle2}
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              {t.yogaPage.heroText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
              >
                {t.yogaPage.viewSchedule}
              </Link>
              <a
                href="#styles"
                className="bg-surface-container-highest/50 backdrop-blur-md px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors"
              >
                {t.yogaPage.ourEthos}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Styles */}
      <Section id="styles">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-on-surface">
              {t.yogaPage.stylesTitle}
            </h2>
            <p className="text-on-surface-variant text-lg">
              {t.yogaPage.stylesText}
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-outline-variant/30 mb-4 mx-12" />
          <div className="text-primary font-serif italic text-2xl">
            {t.yogaPage.stylesList}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((s, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={s.title}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`cursor-pointer [perspective:1200px] transition-all duration-500 ${
                  isExpanded ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full h-64 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    isExpanded ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary group">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:text-white transition-colors">
                      {s.icon}
                    </span>
                    <h3 className="font-serif text-xl text-on-surface mb-3 group-hover:text-white transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {s.text}
                    </p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-xl p-8 overflow-y-auto shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-white text-3xl">
                        {s.icon}
                      </span>
                      <h3 className="font-serif text-xl text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {s.extended}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="primary">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            {t.yogaPage.benefitsTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'psychology', text: t.yogaPage.benefit1 },
            { icon: 'flexibility', text: t.yogaPage.benefit2 },
            { icon: 'lightbulb', text: t.yogaPage.benefit3 },
            { icon: 'shield', text: t.yogaPage.benefit4 },
          ].map((b) => (
            <div
              key={b.text}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center"
            >
              <span className="material-symbols-outlined text-4xl mb-4">
                {b.icon}
              </span>
              <p className="text-sm leading-relaxed opacity-90 font-medium">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Schedule */}
      <Section bg="low">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">
            {t.yogaPage.scheduleTitle}
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            {t.yogaPage.scheduleText}
          </p>
        </div>
        <div className="relative">
          <div ref={scheduleRef} className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {[
              { day: "Monday", classes: [{ time: "7:00 AM", type: "Power Yoga" }, { time: "12:00 PM", type: t.yogaPage.gentleTitle }, { time: "6:00 PM", type: "Kundalini Yoga" }] },
              { day: "Tuesday", classes: [{ time: "9:00 AM", type: t.yogaPage.gentleTitle }, { time: "5:30 PM", type: "Ashtanga Yoga" }] },
              { day: "Wednesday", classes: [{ time: "7:00 AM", type: t.yogaPage.athletesTitle }, { time: "10:00 AM", type: t.yogaPage.prenatalTitle }, { time: "6:00 PM", type: "Power Yoga" }] },
              { day: "Thursday", classes: [{ time: "9:00 AM", type: t.yogaPage.kidsTitle }, { time: "6:00 PM", type: t.yogaPage.restorativeTitle }] },
              { day: "Friday", classes: [{ time: "7:00 AM", type: "Kundalini Yoga" }, { time: "10:00 AM", type: t.yogaPage.gentleTitle }, { time: "5:30 PM", type: "Ashtanga Yoga" }] },
              { day: "Saturday", classes: [{ time: "8:00 AM", type: "Power Yoga" }, { time: "10:00 AM", type: t.yogaPage.prenatalTitle }, { time: "12:00 PM", type: t.yogaPage.kidsTitle }] },
              { day: "Sunday", classes: [{ time: "9:00 AM", type: t.yogaPage.gentleTitle }, { time: "11:00 AM", type: t.yogaPage.restorativeTitle }] },
            ].map((d) => (
              <div key={d.day} className="snap-start shrink-0 w-[75vw] sm:w-[45vw] lg:w-[calc(25%-1.15rem)] bg-surface-container-lowest rounded-xl overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h3 className="font-sans text-sm uppercase tracking-widest text-on-primary font-bold">{d.day}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {d.classes.map((c, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs font-sans uppercase tracking-widest text-tertiary mb-1">{c.time}</span>
                      <span className="text-on-surface font-medium text-sm">{c.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scrollSchedule("left")} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-surface-container-lowest shadow-lg items-center justify-center hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors z-10">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button onClick={() => scrollSchedule("right")} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-surface-container-lowest shadow-lg items-center justify-center hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors z-10">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </Section>

      {/* Booking CTA */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Tranquil studio corner"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsPht4zDb-Kbue4sCmPqveGUPVeIzFy5_aQDT3plCv9jdO04xOan2vrp-sydRDVfcEtydyqqTcpVjXiw9mFZzi47J6UaLcqW7N2NBKoK7gmhCt-BXuyfddakJEQ3oypfXiI9FdUEvyuU6YlMiRhty1xer73HYw_Qn9_My_bOp7aEKQbZi8uMKU04Bj7Lvk9WZhfC28nFL0dUbLr19LT-L_wKGU9hpD2IEPYLwTrbVzENBYbHQg9OM0Ro_WpBzH_HGmKRmaK44Xx5g"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-on-primary">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            {t.yogaPage.ctaTitle} <br />
            <span className="italic font-normal">{t.yogaPage.ctaTitle2}</span>
          </h2>
          <p className="text-xl mb-12 text-on-primary/80 max-w-2xl mx-auto">
            {t.yogaPage.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-surface text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
            >
              {t.yogaPage.ctaButton1}
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/30 hover:border-white/60 px-12 py-5 rounded-full font-bold text-xl transition-all text-on-primary"
            >
              {t.yogaPage.ctaButton2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
