import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import Section from '../../components/Section';
import useScrollAnimation from '../../components/useScrollAnimation';

export default function YogaClasses() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const styles = [
    { title: t.yogaPage.powerTitle, text: t.yogaPage.powerText, icon: 'bolt' },
    {
      title: t.yogaPage.kundaliniTitle,
      text: t.yogaPage.kundaliniText,
      icon: 'air',
    },
    {
      title: t.yogaPage.kidsTitle,
      text: t.yogaPage.kidsText,
      icon: 'child_care',
    },
    { title: t.yogaPage.gentleTitle, text: t.yogaPage.gentleText, icon: 'spa' },
    {
      title: t.yogaPage.ashtangaTitle,
      text: t.yogaPage.ashtangaText,
      icon: 'fitness_center',
    },
    {
      title: t.yogaPage.athletesTitle,
      text: t.yogaPage.athletesText,
      icon: 'sports',
    },
    {
      title: t.yogaPage.prenatalTitle,
      text: t.yogaPage.prenatalText,
      icon: 'pregnant_woman',
    },
    {
      title: t.yogaPage.restorativeTitle,
      text: t.yogaPage.restorativeText,
      icon: 'self_improvement',
    },
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
          {styles.map((s) => (
            <div
              key={s.title}
              className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4">
                {s.icon}
              </span>
              <h3 className="font-serif text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
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
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-primary text-on-primary">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  {t.common.day}
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  {t.common.time}
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  {t.common.class}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 bg-surface-container-lowest">
              {[
                { day: 'Monday', time: '7:00 AM', type: 'Power Yoga' },
                { day: 'Monday', time: '6:00 PM', type: 'Kundalini Yoga' },
                {
                  day: 'Tuesday',
                  time: '9:00 AM',
                  type: t.yogaPage.gentleTitle,
                },
                { day: 'Tuesday', time: '5:30 PM', type: 'Ashtanga Yoga' },
                {
                  day: 'Wednesday',
                  time: '7:00 AM',
                  type: t.yogaPage.athletesTitle,
                },
                {
                  day: 'Wednesday',
                  time: '10:00 AM',
                  type: t.yogaPage.prenatalTitle,
                },
                {
                  day: 'Thursday',
                  time: '9:00 AM',
                  type: t.yogaPage.kidsTitle,
                },
                {
                  day: 'Thursday',
                  time: '6:00 PM',
                  type: t.yogaPage.restorativeTitle,
                },
              ].map((s, i) => (
                <tr
                  key={i}
                  className="hover:bg-primary-container/5 transition-colors"
                >
                  <td className="px-6 py-4 text-on-surface font-medium">
                    {s.day}
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">
                    {s.time}
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">
                    {s.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
