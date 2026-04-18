import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import CTABanner from '../components/CTABanner';
import useScrollAnimation from '../components/useScrollAnimation';

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth * 0.6;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img
            alt="Calm yoga studio"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-dzCgSxV1IzlQGZHHIvRPwH-xMQZWllzNJhdmqERMaf2jHxWrJiwG90Jm7WJys7VkGO5PVeS3M3dp4kEHNfH0jeinGrtSPZZlhLj5ziR5EWxBvwGL_or0OViBIPJncP-qixvdawXSWB9yRF_YdJOXhth0WV8JtM0S6jVsHFmCMLvLh9548rjYajxcWiVu-6jPFbJ6ZUotiLKW7dh9zx39Srnx9CnR7l333gksvSAhZgtImH3lVdA_A0lAhpO3hjymGXOaKXjwMlw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
        </div>
        <div
          ref={heroRef}
          className="animate-on-scroll relative z-10 max-w-7xl mx-auto w-full"
        >
          <div className="max-w-2xl">
            <span className="font-sans text-sm uppercase tracking-[0.3em] text-tertiary mb-6 block">
              {t.home.heroTag}
            </span>
            <h1 className="font-serif text-[4rem] md:text-[5.5rem] leading-[1.1] text-on-surface tracking-tight mb-8">
              {t.home.heroTitle1} <br />
              <span className="italic text-primary">{t.home.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              {t.home.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary to-primary-container shadow-xl shadow-primary/20 text-center"
              >
                {t.home.bookClass}
              </Link>
              <Link
                to="/services"
                className="bg-white/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-10 py-5 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-white/60 transition-all duration-300 text-center"
              >
                {t.home.viewSchedule}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-primary-container animate-breathe" />
            <span className="material-symbols-outlined text-primary">air</span>
          </div>
          <span className="font-serif italic text-primary">
            {t.home.breathe}
          </span>
        </div>
      </section>

      {/* Philosophy */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="relative">
              <img
                alt="Meditation practice"
                className="rounded-xl w-full h-[600px] object-cover shadow-2xl"
                src="https://images.pexels.com/photos/14167805/pexels-photo-14167805.jpeg"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 bg-surface-container-low rounded-xl p-8 shadow-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  spa
                </span>
                <p className="font-serif italic text-on-surface text-lg">
                  "The soul always knows what to do to heal itself."
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
              {t.home.philTitle}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              {t.home.philText1}
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              {t.home.philText2}
            </p>
            <Link
              to="/about"
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <span className="font-sans text-sm uppercase tracking-widest text-primary border-b-2 border-primary-container pb-1 transition-all group-hover:pr-4">
                {t.home.ourStory}
              </span>
              <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&w=1920"
            alt="Yoga background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-surface/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-sans text-sm uppercase tracking-widest text-tertiary mb-4 block">
              {t.home.servicesTag}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface leading-tight">
              {t.home.servicesTitle}
            </h2>
          </div>
          <p className="max-w-md text-on-surface-variant">
            {t.home.servicesText}
          </p>
        </div>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {[
              {
                to: '/services/yoga-asai',
                icon: 'self_improvement',
                title: t.home.yogaTitle,
                text: t.home.yogaText,
                b1: t.home.privateSessions,
                b2: t.home.groupImmersion,
              },
              {
                to: '/services/nutrition-coaching',
                icon: 'ecg_heart',
                title: t.home.nutritionTitle,
                text: t.home.nutritionText,
                b1: t.home.bodyAnalysis,
                b2: t.home.herbalAlchemy,
              },
              {
                to: '/services/healing-sessions',
                icon: 'storm',
                title: t.home.healingTitle,
                text: t.home.healingText,
                b1: t.home.healingBullet1,
                b2: t.home.healingBullet2,
              },
              {
                to: '/services/workshops-courses',
                icon: 'school',
                title: t.home.workshopsTitle,
                text: t.home.workshopsText,
                b1: t.home.workshopsBullet1,
                b2: t.home.workshopsBullet2,
              },
              {
                to: '/services/corporate-programs',
                icon: 'corporate_fare',
                title: t.home.corporateTitle,
                text: t.home.corporateText,
                b1: t.home.corporateBullet1,
                b2: t.home.corporateBullet2,
              },
            ].map((card) => (
              <div
                key={card.to}
                className="group snap-start shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-1.34rem)] bg-surface-container-lowest p-8 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-tertiary flex flex-col"
              >
                <div className="relative z-10 flex-1">
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:text-white transition-colors">
                    {card.icon}
                  </span>
                  <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant mb-8 leading-relaxed group-hover:text-white transition-colors">
                    {card.text}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-sans uppercase tracking-wider text-tertiary group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container group-hover:bg-white mr-3 transition-colors" />{' '}
                      {card.b1}
                    </li>
                    <li className="flex items-center text-sm font-sans uppercase tracking-wider text-tertiary group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container group-hover:bg-white mr-3 transition-colors" />{' '}
                      {card.b2}
                    </li>
                  </ul>
                </div>
                <Link
                  to={card.to}
                  className="mt-6 w-full py-2.5 border border-primary text-primary text-xs font-sans uppercase tracking-widest rounded-full group-hover:border-white group-hover:text-white hover:!bg-white hover:!text-primary transition-colors text-center block"
                >
                  {t.corporatePage.learnMore}
                </Link>
              </div>
            ))}
          </div>
          {/* Scroll arrows */}
          <button
            onClick={() => scrollSlider('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full bg-surface-container-lowest shadow-lg items-center justify-center hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors z-10"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scrollSlider('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full bg-surface-container-lowest shadow-lg items-center justify-center hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors z-10"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-primary-container/40"
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="material-symbols-outlined text-primary-container text-8xl opacity-20 absolute -top-12 -left-12">
            format_quote
          </span>
          <div className="relative z-10">
            <p className="font-serif text-3xl md:text-4xl text-on-surface leading-snug mb-12 italic">
              {t.home.testimonialQuote}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                alt="Client portrait"
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFxvd8HWpbXn1m6xqkOkT1aIxhfnHjqI-LuId9IyX87otiZa5GnkGcL5mgO0CAbVsGAFRzEqSl02Recvb7-UWC9tqQYWjPtsiDLZNtbeObGoAPHdH-WiIUOIZ_T83UONYAyG1vbuzZQ5813OrETTz5nlnGZXE0UBNPak3hPoq6a4N9pc6trBlAmJWtxIlAyPqPRXSuJ0ndJYGtpswW-fpaEpfgvUBlSF0VKVIg-h-oIttIvnI7_IWXoWN1AmUeJamxeGjz6_5zZGc"
              />
              <div className="text-left">
                <h4 className="font-sans font-bold text-on-surface uppercase tracking-widest text-sm">
                  {t.home.testimonialName}
                </h4>
                <p className="text-tertiary text-xs uppercase tracking-widest">
                  {t.home.testimonialRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
