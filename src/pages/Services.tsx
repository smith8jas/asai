import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import CTABanner from "../components/CTABanner";

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <header className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-tight tracking-tight">
          {t.services.heroTitle1} <span className="italic">{t.services.heroTitle2}</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-90">{t.services.heroText}</p>
      </header>

      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Yoga Asai - Large */}
          <Link to="/services/yoga-asai" className="md:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group">
            <div className="flex-1 z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container/20 rounded-full mb-6 text-primary">
                <span className="material-symbols-outlined">self_improvement</span>
              </div>
              <h2 className="text-3xl font-serif text-on-surface mb-4">{t.services.yogaTitle}</h2>
              <p className="text-on-surface-variant mb-8 max-w-md leading-relaxed">{t.services.yogaText}</p>
              <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                {t.services.exploreClasses}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </div>
            <div className="flex-1 h-64 md:h-full w-full relative">
              <img alt="Yoga" className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg -rotate-2 group-hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGzXIfvhB9mMa51SkJaDi2_NfTpXk9SLHMau3y_mtDPeXbd60XUNP7XAL__9IdfXQj_bDkrQsdmUCkt-I4H0xDCW3RfK3MnvkzohFqVpfxynXvrnYyE611prLvNHqrFGuciHyn8nOAMVeT88KvG1cM1i2Ocp6EhECStnNuhcXYBhpCJ2GTERKNi9OOseUNxDncjFcU1YokXxED-VzZiYfuSBx3n--VWUP1sIsQhnvNp_d1T4AiGceFx9jqnJnucS4fFMKWHZ-AE_4" />
            </div>
          </Link>

          {/* Nutrition Coaching */}
          <Link to="/services/nutrition-coaching" className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container/20 rounded-full mb-6 text-primary">
                <span className="material-symbols-outlined">ecg_heart</span>
              </div>
              <h2 className="text-3xl font-serif text-on-surface mb-4">{t.services.nutritionTitle}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">{t.services.nutritionText}</p>
            </div>
            <div className="mt-auto">
              <img alt="Nutrition" className="w-full h-40 object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEffw72o0z7fwARUKFPZfctLwgsIcpKRqOcO9391j2T6KOTqRFV5Dov0oAfJOM9le-qNmx5GjhWN4oFM0s5ePjnfuqvraMLhDk2VV_Ih791iWSfgS9s-LSUsxYxwS8U9jaNFa2jWL2wmoohBZeCib6sP6X-31c2GcSzsPeY70isncV9wcR__cRQLvzC9fZjDqjpY8erS3-i9b7y6-nTSaX-0Fdz4FbZUk2g0aXwZ9H77Qioxoyo5F22wopZA49P4bK3o4M8V47rnU" />
              <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                {t.services.viewPlans}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </div>
          </Link>

          {/* Healing Sessions */}
          <Link to="/services/healing-sessions" className="md:col-span-6 bg-surface-container rounded-xl p-8 group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container/20 rounded-full mb-6 text-primary">
                  <span className="material-symbols-outlined">storm</span>
                </div>
                <h2 className="text-3xl font-serif text-on-surface mb-4">{t.services.healingTitle}</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">{t.services.healingText}</p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t.services.bookSession}
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </span>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-xl">
                <img alt="Healing" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA21jDO2UDm7xBS4hKiXGCvGu9ky3OvoZk9UVrkBYpTHCAMZmDrL3l-p-qImLYh2giR1fFEgHoHTvlq_G3uYFFliw7W1qR_h5-C7ZCZ1j9OKeiHsTSlEjdTloDpfaNuMSGAmrW54vS6pxG2Vv4BDs4G3ighvhcKOQ-056bw1Fv_dJAg00Vy90WTr4NPTHKpLgrkwsldjtCba-BXLOVInesFTTTzFcYLsV240vsDwpf9Lxwr1mZHFIu7Keda50jSWFh1jxMOLSehG14" />
              </div>
            </div>
          </Link>

          {/* Workshops & Courses */}
          <Link to="/services/workshops-courses" className="md:col-span-6 bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container/20 rounded-full mb-6 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h2 className="text-3xl font-serif text-on-surface mb-4">{t.services.workshopsTitle}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">{t.services.workshopsText}</p>
            </div>
            <div className="flex items-center justify-end">
              <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                {t.services.exploreWorkshops}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Corporate Programs Banner */}
        <div className="mt-16 p-12 bg-primary rounded-[3rem] text-on-primary flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="md:w-1/2 z-10">
            <span className="font-sans text-xs uppercase tracking-widest mb-4 block opacity-80">{t.services.sanctuaryTag}</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{t.services.corporateTitle}</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">{t.services.corporateText}</p>
            <Link to="/services/corporate-programs" className="bg-surface text-primary px-8 py-3 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300 inline-block">
              {t.services.exploreCorporate}
            </Link>
          </div>
          <div className="md:w-1/2 relative z-10">
            <img alt="Corporate" className="rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1lCB12rKOnrThEyyz6-sE2vi1XxUHXoLZQldojb3OE6VZwrKhx1t5B2GFBBiFYYg8A7CIkJE3uadccdV4uvb-0tfIBycRPHYlwm3csCW7MGREukkErTz3vz-zKaot9NCSFFgaJ4BTl-UPB3Hb1ZJf1KRMkJS8xdr-bLj_qLqc7tDVwUTnjm-diE3JCqIyeudeDgFUIHByZFkibr-weTDhzqtehi_InsehAAwb7PrMj_dvXhRJ4R7VZc8e5M8HMH9D_4wodUPzUGg" />
          </div>
        </div>
      </section>

      <CTABanner heading={t.services.ctaHeading} text={t.services.ctaText} buttonLabel={t.services.ctaButton} />
    </>
  );
}
